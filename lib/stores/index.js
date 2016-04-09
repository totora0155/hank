import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import reducers from '../reducers';

const middleware = routerMiddleware(hashHistory);
export default createStore(
  reducers,
  applyMiddleware(middleware, thunk)
);
