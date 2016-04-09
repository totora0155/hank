import * as path from 'path';
import React, {Component, PropTypes} from 'react';
import DropFile from '../components/DropFile';
import store from '../stores';
import { push } from 'react-router-redux'

import {readFile} from '../actions/file';

export default class Top extends Component {
  ondrop(files) {
    const file = files[0];
    const extname = path.extname(file.name)
    if (!/\.(?:md|markdown)$/.test(extname)) {
      return;
    }

    store.dispatch(readFile(file.path));
    store.dispatch(push('/slide'));
  }

  render() {
    return (
      <div>
        <DropFile ondrop={this.ondrop} />
      </div>
    );
  }
}
