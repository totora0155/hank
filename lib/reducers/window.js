import {remote} from 'electron'
import {ENTER_FULLSCREEN, LEAVE_FULLSCREEN} from '../actions/window';

const initialState = {
  fullScreen: remote.getCurrentWindow().isFullScreen()
};

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
