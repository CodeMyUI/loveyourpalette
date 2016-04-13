'use strict';

const _ = require('lodash');

const PaletteActions = require('../actions/palette');

const defaultPalette = require('../config/default-palette');

let PaletteReducer = function (state = defaultPalette, action) {

  switch (action.type) {
    case PaletteActions.CHANGE_COLOR:
      let newState = _.clone(state);
      newState[action.payload.colorKey] = action.payload.colorValue;
      return newState;
    case PaletteActions.CHANGE_PALETTE:
      return _.defaults({}, action.payload, defaultPalette);
    default:
      return state;
  }

}

module.exports = PaletteReducer;
