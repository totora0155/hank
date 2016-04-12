import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore, push} from 'react-router-redux';
import store from './stores';
import routes from './routes';
import keycode from './constants/keycode';

document.addEventListener('keydown', e => {
  if (e.keyCode === keycode.SLASH && e.shiftKey) {
    store.dispatch(push('/config'));
  }
});

const history = syncHistoryWithStore(hashHistory, store)
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
