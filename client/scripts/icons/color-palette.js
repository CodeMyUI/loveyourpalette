'use strict';

const React = require('react');

let IconColorPalette = function (props) {

  return (
    <svg viewBox="0 0 24 24">
      <path fill={props.darkGray} d="M21.641,6.979c-0.016-0.534-0.238-1.03-0.625-1.396l-2.305-2.181c-0.771-0.729-2.101-0.69-2.827,0.079L13,6.531v2.911l4.336-4.585l2.305,2.181L13,14.059v2.911l8.093-8.558C21.46,8.026,21.655,7.518,21.641,6.979z"/>
      <path fill={props.darkGray} d="M10,2H4C2.897,2,2,2.898,2,4v16c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2V4C12,2.898,11.103,2,10,2zM4,20V4h6l0.001,16H4z"/>
      <rect x="5" y="6" fill={props.primary} width="4" height="4"/>
      <rect x="5" y="12" fill={props.accent} width="4" height="4"/>
      <circle fill={props.darkGray} cx="7" cy="18" r="1"/>
      <path fill={props.darkGray} d="M22.893,17.947l-0.362-3.152c-0.061-0.522-0.331-1.009-0.743-1.338c-0.419-0.332-0.939-0.482-1.472-0.419l-2.346,0.27l0.229,1.987l2.345-0.271l0.363,3.153L13,19.084v2.013l8.134-0.935c0.531-0.061,1.006-0.324,1.339-0.743C22.805,19.001,22.954,18.478,22.893,17.947z"/>
    </svg>
  )

}

module.exports = IconColorPalette;
