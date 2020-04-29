import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import './style.scss';
import { ConnectedRouter } from 'connected-react-router';
import Home from './pages/Home';
import About from './pages/About';
import { Route } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
