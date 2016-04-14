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

store.subscribe(function () {
  let palette = store.getState().palette;
  let path = `/${palette.primary}/${palette.accent}/${palette.darkGray}/${palette.lightGray}/${palette.white}/`

  path = path.replace(/\#/g, '');

  hashHistory.push({
    pathname: path
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>,
  document.getElementById('LoveYourPaletteRoot')
);
