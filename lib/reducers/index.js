import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import file from './file';
import slider from './slider';

const reducers = combineReducers({
  file,
  slider,
  routing
});

export default reducers;
