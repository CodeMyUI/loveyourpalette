'use strict';

require('../styles/index.css');

const React = require('react');
const ReactDOM = require('react-dom');
const { Router, hashHistory } = require('react-router');

let routes = require('./routes');

ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('LoveYourPaletteRoot'));
