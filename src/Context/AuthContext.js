// eslint-disable-next-line max-classes-per-file
import React, { Component, createContext } from 'react';
import authService from '../services/authService';
import LoadingView from "../views/LoadingView";

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthConsumer = AuthContext.Consumer;

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthConsumer>
          {({
            isLoading,
            isLoggedin,
            user,
            handleLogin,
            handleLogout,
            handleSignup,
            handleProfileUpdate,
            handleAvatarUpdate,
            handleUserDelete,
          }) => (
            <Comp
              {...this.props}
              isLoading={isLoading}
              isLoggedin={isLoggedin}
              user={user}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              handleSignup={handleSignup}
              handleProfileUpdate={handleProfileUpdate}
              handleAvatarUpdate={handleAvatarUpdate}
              handleUserDelete={handleUserDelete}
            />
          )}
        </AuthConsumer>
      );
    }
  };
};

export default class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: undefined,
    isLoading: true,
    
  };

  componentDidMount() {
    authService
      .me()
      .then(user => {
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  handleLogin = user => {
    return authService
      .login(user)
      .then(loggedUser => {
        this.setState({
          isLoggedin: true,
          user: loggedUser,
          isLoading: false,
        });
        return loggedUser;
      })
      .catch((e) => {
        this.setState({
          isLoading: false,
        });
        return e;
      });
  };

  handleSignup = user => {
    return authService
      .signup(user)
      .then(registeredUser => {
        this.setState({
          isLoggedin: true,
          user: registeredUser,
          isLoading: false,
        });
        return registeredUser;
      })
      .catch((e) => {
        this.setState({
          isLoading: false,
        });
        return e;
      });
  };

  handleProfileUpdate = user => {
    return authService
      .profileUpdate(user)
      .then(updatedUser => {
        this.setState({
          isLoggedin: true,
          user: updatedUser,
          isLoading: false,
        });
        return updatedUser;
      })
      .catch((e) => {
        this.setState({
          isLoading: false,
        });
        return e;
      });
  };

  handleAvatarUpdate = () => {
    return authService
        .me()
        .then( user => {
          this.setState({
            isLoggedin: true,
            user,
            isLoading: false,
          });
          return user;
        }).catch(e => e);
  };

  handleLogout = () => {
    this.setState({
      isLoading: true,
    });
    return authService
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: undefined,
          isLoading: false,
        });
        return {code: 'success'};
      })
      .catch((e) => {
        this.setState({
          isLoading: false,
          isLoggedin: false,
          user: undefined,
        });
        return e;
      });
  };

  handleUserDelete = () => {
    this.setState({
      isLoading: true,
    });
    return authService
      .userDelete()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: undefined,
          isLoading: false,
        });
        return {code: 'success'};
      })
      .catch((e) => {
        this.setState({
          isLoading: false,
          isLoggedin: false,
          user: undefined,
        });
        return e;
      });
  };

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { children } = this.props;
    if (isLoading) {
      return (
          <LoadingView />
      );
    }
    return (
      <Provider
        value={{
          isLoading,
          isLoggedin,
          user,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleSignup: this.handleSignup,
          handleProfileUpdate: this.handleProfileUpdate,
          handleAvatarUpdate: this.handleAvatarUpdate,
          handleUserDelete: this.handleUserDelete,
        }}
      >
        {children}
      </Provider>
    );
  }
}
