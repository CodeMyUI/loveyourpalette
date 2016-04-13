'use strict';

const React = require('react');

const IconColorPalette = require('../icons/color-palette');

let NavBar = function (props) {

  return (
    <div className="NavBar">
      <div className="NavBar_logo">
        <IconColorPalette primary={props.primary} accent={props.accent} darkGray={props.darkGray} />
      </div>
      <div className="NavBar_title">Love Your Palette</div>
      <div className="NavBar_spacer"></div>
      <div className="NavBar_item">Item 1</div>
      <div className="NavBar_item">Item 2</div>
      <div className="NavBar_item">Item 3</div>
      <div className="NavBar_item">Item 4</div>
      <div className="NavBar_item">Item 5</div>
      <div className="NavBar_item NavBar_item--button">Edit Your Palette</div>
    </div>
  )

};

module.exports = NavBar;
