import React from 'react';
import { string, func, shape } from 'prop-types';
import { Auth } from 'aws-amplify';
import Header from '../../components/Header';

const signOut = async () => {
  return Auth.signOut();
};

const Nav = ({ history, location }) => {
  debugger;
  const onClickPage = path => {
    history.push(path);
  };
  return (
    <Header
      onLogOut={signOut}
      memberFirstName={'Welcome!'}
      onClickPage={onClickPage}
      currentPath={location.pathname}
    />
  );
};

const propTypes = {
  history: shape({
    push: func,
  }),
  location: shape({
    pathname: string,
  }),
};

const defaultProps = {
  location: { pathname: '/' },
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
