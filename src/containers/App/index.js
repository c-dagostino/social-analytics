import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router';
import { Auth, Hub } from 'aws-amplify';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import { THEME } from '../constants';
import { GlobalStyles } from '../../design-system/atoms';
import { AuthContext } from '../../context/auth';
import Layout from './layout';

const isUserAuthenticated = () => {
  const authenticatedUserId = localStorage.getItem(`authenticatedUserId`);
  // If the flag is null, then the user probably isn't logged in (if you add this to your code, the user will experience a one-time-only bad guess). Otherwise, check the flag's value.
  const isLoggedIn =
    authenticatedUserId !== undefined || authenticatedUserId !== null;
  return isLoggedIn;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(isUserAuthenticated());
  const setAuthenticatedUserId = userId => {
    localStorage.setItem('authenticatedUserId', userId);
    // eslint-disable-next-line no-unused-expressions
    userId ? setIsAuthenticated(true) : setIsAuthenticated(false);
  };

  useEffect(() => {
    const updateUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user && user.username) {
          setAuthenticatedUserId(user.username);
        } else {
          setAuthenticatedUserId(null);
        }
      } catch (err) {
        setAuthenticatedUserId(null);
      }
    };
    Hub.listen('auth', updateUser); // listen for login/signup events

    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser); // cleanup
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticatedUserId }}>
      <Router>
        <ThemeProvider theme={THEME}>
          <Helmet>
            <link rel="stylesheet" href="https://use.typekit.net/ubn5qiw.css" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700&display=swap"
            />
          </Helmet>
          <GlobalStyles />
          <Layout />
        </ThemeProvider>
      </Router>
    </AuthContext.Provider>
  );
};

export default withRouter(App);
