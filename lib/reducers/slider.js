import * as slider from '../actions/slider';

const initialState = {
  current: 0,
  contentLength: 0,
}

export default function ( state = initialState, action) {
  switch (action.type) {
    case slider.INIT_SLIDER:
      return Object.assign({}, state, {contentLength: action.contentLength});
    case slider.SET_NEXT:
      return Object.assign({}, state, {current: action.next});
    case slider.SET_PREV:
      return Object.assign({}, state, {current: action.prev});
    case slider.SET_FIRST:
      return Object.assign({}, state, {current: 0});
    case slider.SET_LAST:
      return Object.assign({}, state, {current: state.length - 1});
    case slider.RESET_SLIDER:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}
