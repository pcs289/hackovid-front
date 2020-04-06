import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";

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

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <>
        <ToastContainer autoClose={2000} />
        <Router>
          <div className="container">
            <div className="data-container">
              <Switch>
                <PrivateRoute exact path="/map" component={Map} />
                <PrivateRoute exact path="/perfil" component={Profile} />

                {/* <AnonRoute exact path="/map" component={Map} /> */}
                <AnonRoute exact path="/" component={Homepage} />
                <AnonRoute exact path="/entra" component={Login} />
                <AnonRoute exact path="/registre" component={Signup} />

                <Route component={ErrorPage} path="*" />
              </Switch>
            </div>
            <PrivateRoute component={Navbar} />
            {/* <AnonRoute component={Navbar} /> */}
          </div>
        </Router>
      </>
    );
  }
}

export default withAuth(App);
