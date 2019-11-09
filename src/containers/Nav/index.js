import React from 'react';
import { Auth } from 'aws-amplify';
import Header from '../../components/Header'

const signOut = async () => {
    return Auth.signOut();
  };

const Nav = ({history, location }) => {
    const onClickPage = path => {
        history.push(path);
      };
    return (<Header onLogOut={signOut} memberFirstName={'Welcome!'} onClickPage={onClickPage} currentPath={'/'} />)
};


export default Nav;