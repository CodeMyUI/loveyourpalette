'use strict';

const React = require('react');

const HexInput = require('./hex-input');

let PaletteSwatch = function (props) {

  return (
    <div className={`PaletteSwatch PaletteSwatch--${props.colorKey}`}>
      <div className="PaletteSwatch_label">
        {props.label}
        <br/>
        <HexInput colorKey={props.colorKey} value={props.value} onUpdate={props.onUpdate} />
      </div>
    </div>
  );

}

module.exports = PaletteSwatch;
