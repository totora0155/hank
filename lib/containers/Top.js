import path from 'path';
import React, {Component, PropTypes} from 'react';
import Menu from '../components/Menu';
import DropFile from '../components/DropFile';
import store from '../stores';
import { push } from 'react-router-redux'

import {readFile} from '../actions/file';

export default class Top extends Component {
  ondrop(files) {
    const file = files[0];
    const extname = path.extname(file.name)
    if (file.type === 'text/markdown') {
      store.dispatch(readFile(file.name, file.path));
      store.dispatch(push('/slide'));
    }
  }

  render() {
    return (
      <div>
        <Menu />
        <DropFile ondrop={this.ondrop} />
      </div>
    );
  }
}
