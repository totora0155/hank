import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import file from './file';
import slider from './slider';
import win from './window';
import config from './config';

const reducers = combineReducers({
  file,
  slider,
  win,
  config,
  routing
});

export default reducers;
