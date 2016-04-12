import * as slider from '../../lib/actions/slider';
import test from 'ava';

test('initSlider', t => {
  t.deepEqual(slider.initSlider(5), {
    type: slider.INIT_SLIDER,
    contentLength: 5
  });
});

test('setNext', t => {
  t.deepEqual(slider.setNext(2), {type: slider.SET_NEXT, next: 2});
});

test('setPrev', t => {
  t.deepEqual(slider.setPrev(2), {type: slider.SET_PREV, prev: 2});
});
test('setFirst', t => {
  t.deepEqual(slider.setFirst(), {type: slider.SET_FIRST});
});
test('setLast', t => {
  t.deepEqual(slider.setLast(), {type: slider.SET_LAST});
});
test('resetSlider', t => {
  t.deepEqual(slider.resetSlider(), {type: slider.RESET_SLIDER});
});
