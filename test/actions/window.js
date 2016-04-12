import * as win from '../../lib/actions/window';
import test from 'ava';

test('enterFullScreen', t => {
  t.deepEqual(win.enterFullScreen(), {type: win.ENTER_FULLSCREEN});
});

test('leaveFullScreen', t => {
  t.deepEqual(win.leaveFullScreen(), {type: win.LEAVE_FULLSCREEN});
});
