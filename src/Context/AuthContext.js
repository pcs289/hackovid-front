// eslint-disable-next-line max-classes-per-file
import React, { Component, createContext } from 'react';
import authService from '../services/authService';
import profileService from '../services/profileService';
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
            handleUserDelete,
            handlePostPhoto,
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
              handleUserDelete={handleUserDelete}
              handlePostPhoto={handlePostPhoto}
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
    authService
      .login(user)
      .then(loggedUser => {
        this.setState({
          isLoggedin: true,
          user: loggedUser,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
        });
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
    authService
      .profileUpdate(user)
      .then(updatedUser => {
        this.setState({
          isLoggedin: true,
          user: updatedUser,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  handleLogout = () => {
    this.setState({
      isLoading: true,
    });
    authService
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: undefined,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isLoggedin: false,
          user: undefined,
        });
      });
  };

  handleUserDelete = () => {
    this.setState({
      isLoading: true,
    });
    authService
      .userDelete()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: undefined,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isLoggedin: false,
          user: undefined,
        });
      });
  };

  handlePostPhoto = user => {
    profileService.uploadAvatarImg(user);
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
          handleUserDelete: this.handleUserDelete,
          handlePostPhoto: this.handlePostPhoto,
        }}
      >
        {children}
      </Provider>
    );
  }
}
