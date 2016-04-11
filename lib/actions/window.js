export const ENTER_FULLSCREEN = 'ENTER_FULLSCREEN';
export const LEAVE_FULLSCREEN = 'LEAVE_FULLSCREEN';

export function enterFullScreen() {
  return {type: ENTER_FULLSCREEN};
}

export function leaveFullScreen() {
  return {type: LEAVE_FULLSCREEN};
}
