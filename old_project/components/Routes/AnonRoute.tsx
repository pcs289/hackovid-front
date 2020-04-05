import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {withAuth} from "../../contexts/AuthContext";

const AnonRoute: React.FunctionComponent<any> = ({ Comp, isLoggedin, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                !isLoggedin ? (
                    <Comp {...props} />
                ) : (
                    <>
                        <Redirect
                            to={{
                                pathname: '/map',
                            }}
                        />
                    </>
                )
            }
        />
    );
};

export default withAuth(AnonRoute);
