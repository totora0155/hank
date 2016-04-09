import React, {Component, PropTypes} from 'react';
import {hashHistory} from 'react-router';
import {push} from 'react-router-redux';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}
