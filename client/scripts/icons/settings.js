'use strict';

const React = require('react');

let IconSettings = function (props) {

  return (
    <svg viewBox="0 0 24 24">
      <circle cx="19" cy="6" r="1.4" fill={props.primary}/>
      <circle cx="9" cy="12" r="1.4" fill={props.accent}/>
      <path d="M19,9a3,3,0,1,0-2.82-4H2V7H16.19A3,3,0,0,0,19,9Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,19,5Z" fill={props.darkGray}/>
      <path d="M9,9a3,3,0,0,0-2.82,2H2v2H6.18a3,3,0,0,0,5.63,0H22V11H11.81A3,3,0,0,0,9,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,9,13Z" fill={props.darkGray}/>
      <path d="M19,15a3,3,0,0,0-2.82,2H2v2H16.19A3,3,0,1,0,19,15Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,19,19Z" fill={props.darkGray}/>
    </svg>
  )

}

module.exports = IconSettings;
