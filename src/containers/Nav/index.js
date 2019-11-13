import React from 'react';
import { string, func } from 'prop-types';
import { Auth } from 'aws-amplify';
import Header from '../../components/Header'

const signOut = async () => {
    return Auth.signOut();
  };

const Nav = ({push, pathname}) => {
    debugger;
    const onClickPage = path => {
        push(path);
      };
    return (<Header onLogOut={signOut} memberFirstName={'Welcome!'} onClickPage={onClickPage} currentPath={pathname} />)
};

const propTypes = {
      push: func.isRequired,
      pathname: string.isRequired
  };
  
  const defaultProps = {
  };
  
  Nav.defaultProps = defaultProps;
  Nav.propTypes = propTypes;

export default Nav;