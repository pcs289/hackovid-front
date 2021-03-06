import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles/main.scss";

import Homepage from "./views/Homepage";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Map from "./views/MapView";
import Profile from "./views/Profile";
import Cercar from "./views/Cercar";
import EditProfile from "./views/EditProfile";
import Activities from "./views/Activities";
import Managed from "./views/Managed";
import Contactar from "./views/Contactar";
import PublishOffer from "./views/PublishOffer";
import ErrorPage from "./views/auth/ErrorPage";

import { withAuth } from "./Context/AuthContext";

import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";
import Navbar from "./components/Navigation/Navbar";
import Topbar from "./components/Navigation/Topbar";

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <>
        <ToastContainer autoClose={2000} />
        <Router>
          <div className="container">
            <Topbar />
            <Switch>
              <AnonRoute exact path="/" component={Homepage} />
              <AnonRoute exact path="/entra" component={Login} />
              <AnonRoute exact path="/registre" component={Signup} />

              <PrivateRoute exact path="/cercar" component={Cercar} />
              <PrivateRoute exact path="/mapa" component={Map} />
              <PrivateRoute exact path="/contactar/:offerId" component={Contactar} />

              <PrivateRoute exact path="/publicar" component={PublishOffer} />

              <PrivateRoute exact path="/inscripcions" component={Activities} />
              <PrivateRoute exact path="/publicacions" component={Managed} />

              <PrivateRoute exact path="/perfil" component={Profile} />
              <PrivateRoute exact path="/perfil/editar" component={EditProfile} />


              <Route component={ErrorPage} path="*" />
            </Switch>
            <Navbar />
          </div>
        </Router>
      </>
    );
  }
}

export default withAuth(App);
