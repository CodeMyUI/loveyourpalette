'use strict';

const _ = require('lodash');

const PaletteActions = require('../actions/palette');

let defaultPalette = {
  primary: '#929292',
  accent: '#676767',
  darkGray: '#333333',
  lightGray: '#F8F8F8',
  white: '#FFFFFF'
};

let PaletteReducer = function (state = defaultPalette, action) {

  switch (action.type) {
    case PaletteActions.CHANGE_COLOR:
      let newState = _.clone(state);
      newState[action.payload.colorKey] = action.payload.colorValue;
      console.log(action.payload, newState);
      return newState;
    case PaletteActions.CHANGE_PALETTE:
      return _.merge({}, action.payload, defaultPalette);
    default:
      return state;
  }

}

module.exports = PaletteReducer;
