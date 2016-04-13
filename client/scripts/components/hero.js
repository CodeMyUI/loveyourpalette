'use strict';

const React = require('react');

let Hero = function (props) {

  return (
    <div className="Hero">
      <h1 className="Hero_title">Love Your Palette</h1>
      <p className="Hero_subtitle">A simple palette testing tool.</p>
      <div className="Hero_callToAction">Edit Your Palette</div>
    </div>
  )

}

module.exports = Hero;
