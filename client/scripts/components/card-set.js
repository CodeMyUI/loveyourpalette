'use strict';

const React = require('react');

const Icon = require('./icon');

let CardSet = function (props) {

  return (
    <div className="Cards">
      <div className="Card Card--center">
        <div className="Card_icon">
          <Icon glyph={Icon.GLYPHS.ORIGAMI_PAPER_BIRD} />
        </div>
        <div className="Card_title">Designing a Color Palette</div>
        <p>Designing a color palette doesn't have to be hard. In fact Love Your Palette was inspired by a mockup in Laura Elizabeth's amazing article on creating a color palette the easy way. It is definitely worth a read.</p>
        <p>
          <a className="Card_callToAction" href="https://www.smashingmagazine.com/2016/04/web-developer-guide-color/">Read the Article</a>
        </p>
      </div>
      <div className="Card Card--center">
        <div className="Card_icon">
          <Icon glyph={Icon.GLYPHS.HANDS} />
        </div>
        <div className="Card_title">Share Some Inspiration</div>
        <p>Want to share your palette with a friend? What about a client? Love Your Palette is easy to share. Simply copy the URL in the address bar above and whomever you want can instantly see your palette.</p>
      </div>
      <div className="Card Card--center">
        <div className="Card_icon">
          <Icon glyph={Icon.GLYPHS.SETTINGS} />
        </div>
        <div className="Card_title">Make LYP Your Own</div>
        <p>Want to integrate Love Your Palette into your business? You can easily fork and customize Love Your Palette to be what ever you want to demo. This project is licensed under the MIT open source license so feel free to use this project however you want, even comercially.</p>
        <p>
          <a className="Card_callToAction" href="http://github.com/nrdobie/loveyourpalette">Fork on GitHub</a>
        </p>
      </div>
    </div>
  )

}

module.exports = CardSet;
