import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';
import store from '../stores';
import Menu from '../components/Menu';
import keycode from '../constants/keycode';
import {readData, saveData} from '../actions/config';

class Config extends Component {
  componentWillMount() {
    store.dispatch(this.props.readData());
  }

  componentDidMount() {
    document.addEventListener('keydown', keyBind, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', keyBind, false);
  }

  saveData(key, e) {
    store.dispatch(this.props.saveData({
      [key]: e.currentTarget.value
    }));
  }

  render() {
    return (
      <div>
        <Menu />
        <form className="config__box">
          <div className="config__item">
            <label htmlFor="theme">Theme</label>
            <input type="text" id="theme"
                   value={this.props.config.theme}
                   onChange={this.saveData.bind(this, 'theme')} />
          </div>
          <div className="config__item">
            <label htmlFor="fontFamily">FontFamily</label>
            <input type="text" id="fontFamily"
                   value={this.props.config.fontFamily}
                   onChange={this.saveData.bind(this, 'fontFamily')} />
          </div>
        </form>
      </div>
    );
  }
}

Config.propTypes = {
  config: PropTypes.object.isRequired
}

export default connect(state => state, {readData, saveData})(Config);
export {Config};

function keyBind(e) {
  switch (e.keyCode) {
    case keycode.ESC:
      return store.dispatch(goBack());
    default:
      return;
  }
}
