'use strict';

const React = require('react');
const { Link } = require('react-scroll');

let Hero = function (props) {

  return (
    <div className="Hero">
      <h1 className="Hero_title">Love Your Palette</h1>
      <p className="Hero_subtitle">A simple palette testing tool.</p>
      <Link className="Hero_callToAction" to="colorPalette" smooth={true} duration={500}>
        Edit Your Palette
      </Link>
    </div>
  )

}

module.exports = Hero;
