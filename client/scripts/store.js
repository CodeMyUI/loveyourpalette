'use strict';

const Redux = require('redux');

const App = require('./reducers');

module.exports = Redux.createStore(App);
