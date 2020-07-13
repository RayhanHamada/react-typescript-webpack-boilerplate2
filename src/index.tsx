import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

import store, { history } from './store';

import Home from './pages/Home';
import About from './pages/About';

import './style.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
