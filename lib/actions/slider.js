export const INIT_SLIDER = 'INIT_SLIDER';
export const SET_NEXT = 'SET_NEXT';
export const SET_PREV = 'SET_PREV';
export const SET_FIRST = 'SET_FIRST';
export const SET_LAST = 'SET_LAST';
export const RESET_SLIDER = 'RESET_SLIDER';

export function initSlider(contentLength) {
  return {type: INIT_SLIDER, contentLength};
}

export function setNext(next) {
  return {type: SET_NEXT, next};
}

export function setPrev(prev) {
  return {type: SET_PREV, prev};
}

export function setFirst() {
  return {type: SET_FIRST};
}

export function setLast() {
  return {type: SET_LAST};
}

export function resetSlider() {
  return {type: RESET_SLIDER};
}
