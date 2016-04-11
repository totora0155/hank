import React, {Component, PropTypes} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as slider from '../actions/slider';
import store from '../stores'
import {resetFile} from '../actions/file';
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

  goBegining(e) {
    e.preventDefault();
    store.dispatch(this.props.setFirst());
  }

  goTop(e) {
    e.preventDefault();
    store.dispatch(this.props.resetFile());
    store.dispatch(this.props.resetSlider());
    store.dispatch(push('/'))
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

    const {contents, contentLength} = this.props.file;
    const sections = contents.map((content, idx) => {
      const className = getClassName.call(this, idx);
      return <Page key={idx} className={className} content={content} />;
    });

    const last = (
      <section key={contentLength}
               className={getClassName.call(this, contentLength)}>
        <div className="layout--ycenter layout--flex">
          <a role="button" onClick={this.goBegining.bind(this)}>Go begining</a>
          <a role="button" onClick={this.goTop.bind(this)}>Go top</a>
        </div>
      </section>
    );
    sections.push(last);

    return (
      <div>
        <Menu />
        <div className="slider__box">{sections}</div>
      </div>
    );

    function getClassName(idx) {
      return classNames({
        'slider__page': true,
        'visible': idx === this.props.slider.current
      });
    }
  }
}

Slider.propTypes = {
  resetFile: PropTypes.func.isRequired,
  setNext: PropTypes.func.isRequired,
  setPrev: PropTypes.func.isRequired,
  setFirst: PropTypes.func.isRequired,
  resetSlider: PropTypes.func.isRequired
};

export default connect(state => state, {
  resetFile,
  initSlider: slider.initSlider,
  setNext: slider.setNext,
  setPrev: slider.setPrev,
  setFirst: slider.setFirst,
  resetSlider: slider.resetSlider
})(Slider);
