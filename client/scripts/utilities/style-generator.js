'use strict';

const postcss = require('postcss');
//
// // PostCSS Extensions
const autoprefixer = require('autoprefixer');
const cssVariables = require('postcss-css-variables');

const store = require('../store');
const colorStyleSheet = require('!!raw!../../styles/colors.css');

let lypStyleTag = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(lypStyleTag);

let generateStyleSheet = function (palette) {

  postcss([
    cssVariables({
      variables: {
        '--color-primary': palette.primary,
        '--color-accent': palette.accent,
        '--color-dark-gray': palette.darkGray,
        '--color-light-gray': palette.lightGray,
        '--color-white': palette.white
      }
    }),
    autoprefixer()
  ])
  .process(colorStyleSheet)
  .then(function (result) {
    lypStyleTag.innerText = result.css;
  });

}

generateStyleSheet(store.getState().palette);

store.subscribe(function () {

  let state = store.getState();

  generateStyleSheet(state.palette);

});
