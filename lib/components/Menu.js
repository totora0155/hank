import {remote} from 'electron';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import store from '../stores';
import {enterFullScreen, leaveFullScreen} from '../actions/window';

const win = remote.getCurrentWindow();
class Menu extends Component {
  constructor(props) {
    super(props);
    win.on('enter-full-screen', () => {
      store.dispatch(this.props.enterFullScreen());
    });
    win.on('leave-full-screen', () => {
      store.dispatch(this.props.leaveFullScreen());
    });
  }

  render() {
    if (this.props.win.fullScreen) {
      return false;
    }

    const className = classNames({
      'menu__box': true
    });

    if (this.props.file.name === null) {
      return (
        <nav className={className}>
          <span>Hank</span>
        </nav>
      );
    }

    return (
      <nav className={className}>
        <span>Hank</span>
        <span className="menu__separator" />
        <span>{this.props.file.name}</span>
      </nav>
    );
  }
}

Menu.propTypes = {
  file: PropTypes.object.isRequired,
  enterFullScreen: PropTypes.func.isRequired,
  leaveFullScreen: PropTypes.func.isRequired
};

export default connect(state => state, {
  enterFullScreen,
  leaveFullScreen
})(Menu);
