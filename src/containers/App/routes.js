import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../SignIn';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/sign-in" component={SignIn} />
  </Switch>
);

export default Routes;
