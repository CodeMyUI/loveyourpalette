'use strict';
require('babel-polyfill');

require('../styles/index.css');

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { Router, hashHistory } = require('react-router');

let routes = require('./routes');
let store = require('./store');

require('./utilities/style-generator');

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>,
  document.getElementById('LoveYourPaletteRoot')
);
