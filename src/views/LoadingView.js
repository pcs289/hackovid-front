import React, {Component} from "react";

class LoadingView extends Component {
 render() {
     const { showText } = this.props;
     return (
         <div className="loading-container">
             <h2 style={ showText === false ? { display: 'none'} : null }>Carregant el contingut</h2>
             <img src="/images/loading.svg" alt="Carregant el contingut"/>
         </div>
     );
 }
}

export default LoadingView;
