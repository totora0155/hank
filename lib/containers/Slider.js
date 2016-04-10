import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {initSlider, setNext, setPrev} from '../actions/slider';
import store from '../stores'
import Page from './page';
import keycode from '../constants/keycode';
import Menu from '../components/Menu';

class Slider extends Component {
  onkeydown(e) {
    switch (e.keyCode) {
      case keycode.LEFT:
        if (this.props.slider.current > 0) {
          const prev = this.props.slider.current - 1;
          store.dispatch(this.props.setPrev(prev));
        }
        return;
      case keycode.RIGHT:
        if (this.props.slider.current < this.props.file.contentLength) {
          const next = this.props.slider.current + 1
          store.dispatch(this.props.setNext(next));
        }
        return;
      default:
        return;
    }
  }

  componentWillMount() {
    if (this.props.file.contents === null) {
      store.dispatch(push('/'));
      return;
    }

    store.dispatch(this.props.initSlider(this.props.file.contentLength));
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onkeydown.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onkeydown.bind(this), false);
  }

  render() {
    if (this.props.file.contents === null) {
      return <div />;
    }

    const sections = this.props.file.contents.map((content, i) => {
      const className = classNames({
        'slider__page': true,
        'visible': i === this.props.slider.current
      });
      return <Page key={i} className={className} content={content} />;
    });

    return (
      <div>
        <Menu />
        <div className="slider__box">{sections}</div>
      </div>
    );
  }
}

Slider.propTypes = {
  setPrev: PropTypes.func.isRequired,
  setNext: PropTypes.func.isRequired
};

export default connect(state => state, {initSlider, setNext, setPrev})(Slider);
