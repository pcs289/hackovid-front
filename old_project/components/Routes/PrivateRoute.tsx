import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {withAuth} from "../../contexts/AuthContext";


const PrivateRoute: React.FunctionComponent<RouteProps | any> = ({ component: Comp, isLoggedin, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedin ? (
                    <Comp {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                        }}
                    />
                )
            }
        />
    );
};

export default withAuth(PrivateRoute);
