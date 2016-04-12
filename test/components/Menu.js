import React from 'react';
import {shallow} from 'enzyme';
import test from 'ava';
import {PureMenu as Menu} from '../../lib/components/Menu';

test.beforeEach(t => {
  t.context.file = {
    name: 'test'
  };
});

test('<Menu />', t => {
  const win = {fullScreen: false};
  const wrapper = shallow(<Menu win={win} file={t.context.file} />);
  t.is(wrapper.find('.menu__filename').text(), 'test');
});

test('<Menu /> hidden', t => {
  const win = {fullScreen: true};
  const wrapper = shallow(<Menu win={win} file={t.context.file} />);
  t.is(wrapper.html(), null);
});
