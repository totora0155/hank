import {ENTER_FULLSCREEN, LEAVE_FULLSCREEN} from '../actions/window';

let initialState;
if (process.env.NODE_ENV !== 'test') {
  initialState = {
    fullScreen: require('electron').remote.getCurrentWindow().isFullScreen()
  };
} else {
  initialState = {fullScreen: false};
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ENTER_FULLSCREEN:
      return {fullScreen: true};
    case LEAVE_FULLSCREEN:
      return {fullScreen: false};
    default:
      return state;
  }
};
