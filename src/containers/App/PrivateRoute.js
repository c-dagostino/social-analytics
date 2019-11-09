import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../context/auth";
function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();
  debugger;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
}

export default PrivateRoute;
