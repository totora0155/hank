import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import file from './file';
import slider from './slider';
import win from './window';

const reducers = combineReducers({
  file,
  slider,
  win,
  routing
});

export default reducers;
