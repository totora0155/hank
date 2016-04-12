import React, {Component, PropTypes} from 'react';
import {goBack} from 'react-router-redux';
import store from '../stores';
import Menu from '../components/Menu';
import keycode from '../constants/keycode';

class Config extends Component {
  componentDidMount() {
    document.addEventListener('keydown', keyBind, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', keyBind, false);
  }

  render() {
    return (
      <div>
        <Menu />
        <form className="config__box">
          <div className="config__item">
            <label htmlFor="theme">Theme</label>
            <input type="text" id="theme" />
          </div>
          <div className="config__item">
            <label htmlFor="fontFamily">FontFamily</label>
            <input type="text" id="fontFamily" />
          </div>
        </form>
      </div>
    );
  }
}

export default Config;

function keyBind(e) {
  switch (e.keyCode) {
    case keycode.ESC:
      return store.dispatch(goBack());
    default:
      return;
  }
}
