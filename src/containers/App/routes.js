import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequireAuth from '../../components/auth/RequireAuth'
import Home from  '../Home'
import SignIn from '../SignIn';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RequireAuth(Home)} />
    <Route path="/sign-in" component={SignIn} />
  </Switch>
);

export default Routes;
