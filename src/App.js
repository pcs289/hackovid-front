import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import "./App.css";
import "./styles/main.scss";

import Homepage from "./views/Homepage";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Map from "./views/MapView";
import Profile from "./views/Profile";

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
            <Route component={Topbar} />
            <div className="data-container1">
              <Switch>
                <AnonRoute exact path="/" component={Homepage} />
                <div className="data-container">
                  <PrivateRoute exact path="/map" component={Map} />
                  <PrivateRoute exact path="/perfil" component={Profile} />
                  <AnonRoute exact path="/entra" component={Login} />
                  <AnonRoute exact path="/registre" component={Signup} />
                  <Route component={ErrorPage} path="*" />
                  <PrivateRoute component={Navbar} />
                </div>
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default withAuth(App);
