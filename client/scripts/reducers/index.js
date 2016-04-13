'use strict';

const Redux = require('redux');

const PaletteReducer = require('./palette');

let App = Redux.combineReducers({
  palette: PaletteReducer
});

module.exports = App;
