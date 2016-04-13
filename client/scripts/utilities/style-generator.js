'use strict';

const TinyColor = require('tinycolor2');

const store = require('../store');
const colorStyleSheet = require('!!raw!../../styles/colors.css');

let lypStyleTag = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(lypStyleTag);

let varRegEx = /var\(([^\)]+)\)/gm;

let generateStyleSheet = function (palette) {

  let variables =  {
    '--color-primary': palette.primary,
    '--color-primary-readable': TinyColor.mostReadable(palette.primary, [palette.darkGray, palette.white]),
    '--color-accent': palette.accent,
    '--color-accent-readable': TinyColor.mostReadable(palette.accent, [palette.darkGray, palette.white]),
    '--color-dark-gray': palette.darkGray,
    '--color-dark-gray-readable': TinyColor.mostReadable(palette.darkGray, [palette.darkGray, palette.white]),
    '--color-light-gray': palette.lightGray,
    '--color-light-gray-readable': TinyColor.mostReadable(palette.lightGray, [palette.darkGray, palette.white]),
    '--color-white': palette.white,
    '--color-white-readable': TinyColor.mostReadable(palette.white, [palette.darkGray, palette.white])
  };

  let finishedStyleSheet = colorStyleSheet.replace(varRegEx, function (varStatement, variableName) {
    if (variableName in variables) {
      return variables[variableName];
    }
    return varStatement;
  });

  lypStyleTag.innerText = finishedStyleSheet;

}

generateStyleSheet(store.getState().palette);

store.subscribe(function () {

  let state = store.getState();

  generateStyleSheet(state.palette);

});
