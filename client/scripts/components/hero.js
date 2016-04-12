'use strict';

const React = require('react');

let Hero = function (props) {

  return (
    <div className="Hero" style={{backgroundColor: props.primary}}>
      <h1 className="Hero_title" style={{color: props.white}}>Love Your Palette</h1>
      <p className="Hero_subtitle" style={{color: props.white}}>A simple palette testing tool.</p>
      <div className="Hero_callToAction" style={{backgroundColor: props.accent, color: props.white}}>Edit Your Palette</div>
    </div>
  )

}

module.exports = Hero;
