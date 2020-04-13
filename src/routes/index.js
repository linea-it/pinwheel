import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Process from '../pages/Process';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Process} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
