import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './App/pages/SignIn/form';
import SignUp from './App/pages/SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);

export default Routes;
