import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Top from './containers/Top';
import Slider from './containers/Slider';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="slide" component={Slider} />
  </Route>
);
