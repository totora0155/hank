import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Page extends Component {
  setInnerHTML(content) {
    return {__html: content};
  }

  render() {
    const {content} = this.props;
    return (
      <section className={this.props.className}
               dangerouslySetInnerHTML={this.setInnerHTML(content)} />
    );
  };
}

Page.propTypes = {
  content: PropTypes.string.isRequired
};

export default connect(state => state)(Page);
