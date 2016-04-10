import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Menu extends Component {
  render() {
    if (this.props.file.name === null) {
      return (
        <nav className="menu__box">
          <span>Hank</span>
        </nav>
      );
    }

    return (
      <nav className="menu__box" />
    );
  }
}

Menu.propTypes = {
  file: PropTypes.object.isRequired
};

export default connect(state => state)(Menu);
