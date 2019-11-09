import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from  '../Home'
import SignIn from '../SignIn';
import PrivateRoute from './PrivateRoute';
const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/sign-in" component={SignIn} />
  </Switch>
);

export default Routes;
