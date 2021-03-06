import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import ConfirmSignUp from '../ConfirmSignUp';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Dashboard';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Dashboard} />
    <Route exact path="/sign-in" component={SignIn} />
    <Route exact path="/sign-up" component={SignUp} />
    <Route exact path="/confirm-sign-up" component={ConfirmSignUp} />
    <Route exact path="/tweets" component={Dashboard} />
  </Switch>
);

export default Routes;
