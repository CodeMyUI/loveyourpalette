'use strict';

const React = require('react');

const GLYPHS = {
  COLOR_PALETTE: require('../../assets/icons/color-palette.svg'),
  HANDS: require('../../assets/icons/hands.svg'),
  ORIGAMI_PAPER_BIRD: require('../../assets/icons/origami-paper-bird.svg'),
  SETTINGS: require('../../assets/icons/settings.svg'),
};

let Icon = function (props) {

  return (
    <svg viewBox="0 0 24 24" class="SVG">
      <use xlinkHref={props.glyph}></use>
    </svg>
  );

}

Icon.GLYPHS = GLYPHS;

module.exports = Icon;
