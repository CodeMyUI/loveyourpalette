'use strict';

const ReduxActions = require('redux-actions');

const CHANGE_COLOR = Symbol('CHANGE_COLOR');

let changeColor = ReduxActions.createAction(CHANGE_COLOR);

const CHANGE_PALETTE = Symbol('CHANGE_PALETTE');

let changePalette = ReduxActions.createAction(CHANGE_PALETTE);

module.exports = {
  CHANGE_COLOR,
  changeColor,
  CHANGE_PALETTE,
  changePalette
};
