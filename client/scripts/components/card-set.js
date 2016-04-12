'use strict';

const React = require('react');

const IconCircleHeart = require('../icons/circle-heart');
const IconSettings = require('../icons/settings');
const IconOrigamiBird = require('../icons/origami-bird');


let CardSet = function (props) {

  return (
    <div className="Cards">
      <div className="Card Card--center" style={{backgroundColor: props.white}}>
        <div className="Card_icon">
          <IconOrigamiBird {...props} />
        </div>
        <div className="Card_title">Designing a Color Palette</div>
        <p>Designing a color palette doesn't have to be hard. In fact Love Your Palette was inspired by a mockup in Laura Elizabeth's amazing article on creating a color palette the easy way. It is definitely worth a read.</p>
        <p>
          <a className="Card_callToAction" href="https://www.smashingmagazine.com/2016/04/web-developer-guide-color/" style={{backgroundColor: props.primary, color: props.white}}>Read the Article</a>
        </p>
      </div>
      <div className="Card Card--center" style={{backgroundColor: props.white}}>
        <div className="Card_icon">
          <IconCircleHeart {...props} />
        </div>
        <div className="Card_title">Get Some Inspiration</div>
        <p>Not sure where to start? Click the button below to have Love Your Palette create a completely random palette.</p>
        <p>
          <a className="Card_callToAction" style={{backgroundColor: props.primary, color: props.white}}>Create Random Palette</a>
        </p>
      </div>
      <div className="Card Card--center" style={{backgroundColor: props.white}}>
        <div className="Card_icon">
          <IconSettings {...props} />
        </div>
        <div className="Card_title">Make LYP Your Own</div>
        <p>Want to demo this to a client? You can easily fork and customize Love Your Palette to be what ever you want to demo. This project is licensed under the MIT open source license so feel free to use this project however you want, even comercially.</p>
        <p>
          <a className="Card_callToAction" href="http://github.com/nrdobie/loveyourpalette" style={{backgroundColor: props.primary, color: props.white}}>Fork on GitHub</a>
        </p>
      </div>
    </div>
  )

}

module.exports = CardSet;
