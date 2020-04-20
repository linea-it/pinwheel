import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Process from '../pages/Process';

const styles = {
  root: {
    paddingTop: 100,
  },
};

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch className={styles.root}>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Process} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
