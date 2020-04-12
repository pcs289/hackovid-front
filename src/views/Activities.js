import React, { Component } from "react";
import { withAuth } from "../Context/AuthContext";
import OffersTab from "../components/Navigation/OffersTab";
import requestService from '../services/requestService';
import LoadingView from "./LoadingView";
import RequestManaged from "../components/RequestManaged";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
        display: false,
        pendingExpand: true,
        acceptedExpand: false,
        canceledExpand: false,
        requests: null,
        pendingRequests: [],
        acceptedRequests: [],
        deniedRequests: [],
    };
  }

  componentDidMount() {
    this.getRequests();
  }

  async getRequests() {
      const requests = await requestService.getMyRequests();
      await this.setState({ ...this.state, requests });

      const pendingRequests = requests.filter((request) => request.status === 0);
      await this.setState({ ...this.state, pendingRequests, pendingExpand: pendingRequests.length > 0 });

      const acceptedRequests = requests.filter((request) => request.status === 1);
      await this.setState({ ...this.state, acceptedRequests, acceptedExpand: acceptedRequests.length > 0 });

      const deniedRequests = requests.filter((request) => request.status === 2 || request.status === 3); // Denied or Cancelled Requests
      await this.setState({ ...this.state, deniedRequests, canceledExpand: deniedRequests.length > 0 });

  };

    render() {
        const {pendingRequests, acceptedRequests, deniedRequests} = this.state;
        return (
            <>
                <div className="activities-container">
                    <OffersTab tab="activities"/>

                    { this.state.requests ?
                        <>
                            <div className="profile-stats-card">
                                <div style={{display: "flex", flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                                    <span className="title" style={{color: "rgb(242,157,105)", fontWeight: "bold"}}>Pendents de Resposta ({pendingRequests.length})</span>
                                    <div className="icon-container" onClick={() => this.setState({ pendingExpand: !this.state.pendingExpand })}>
                                        <img className="arrow-icon" style={{ width: '25px', height: '25px', transform: !this.state.pendingExpand ? 'rotate(90deg)' : 'rotate(0deg)' }} src="../../images/chevron.svg" alt="close-cross"></img>
                                    </div>
                                </div>
                                <div style={{ display: this.state.pendingExpand ? 'block' : 'none' }}>
                                    { pendingRequests.map((request, i) => {
                                        return <RequestManaged key={i} request={request} />
                                    })}
                                </div>
                            </div>

                            <div className="profile-stats-card">
                                <div style={{display: "flex", flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                                    <span className="title" style={{color: "#a4d96c", fontWeight: "bold"}}>Acceptades ({acceptedRequests.length})</span>
                                    <div className="icon-container" onClick={() => this.setState({ acceptedExpand: !this.state.acceptedExpand })}>
                                        <img className="arrow-icon" style={{ width: '25px', height: '25px', transform: !this.state.acceptedExpand ? 'rotate(90deg)' : 'rotate(0deg)' }} src="../../images/chevron.svg" alt="close-cross"></img>
                                    </div>
                                </div>
                                <div style={{ display: this.state.acceptedExpand ? 'block' : 'none' }}>
                                    { acceptedRequests.map((request, i) => {
                                        return <RequestManaged key={i} request={request} />
                                    })}
                                </div>
                            </div>

                            <div className="profile-stats-card">
                                <div style={{display: "flex", flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                                    <span className="title" style={{color: "rgb(184, 92, 89)", fontWeight: "bold"}}>Denegades ({deniedRequests.length})</span>
                                    <div className="icon-container" onClick={() => this.setState({ canceledExpand: !this.state.canceledExpand })}>
                                        <img className="arrow-icon" style={{ width: '25px', height: '25px', transform: !this.state.canceledExpand ? 'rotate(90deg)' : 'rotate(0deg)' }} src="../../images/chevron.svg" alt="close-cross"></img>
                                    </div>
                                </div>
                                <div style={{ display: this.state.canceledExpand ? 'block' : 'none' }}>
                                    { deniedRequests.map((request, i) => {
                                        return <RequestManaged key={i} request={request} />
                                    })}
                                </div>
                            </div>

                        </>
                        : <LoadingView showText={false} /> }

                </div>
            </>
        );
  }
}

export default withAuth(Activities);
