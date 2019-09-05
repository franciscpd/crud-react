import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import GuestRoute from './guest';
// import PrivateRoute from './private';
import { MainPage } from '../pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}
