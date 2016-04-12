'use strict';

const React = require('react');

let IconOrigamiBird = function (props) {

  return (
    <svg viewBox="0 0 24 24">
      <polygon points="9.77 19 6.43 13.16 12.23 7.37 21.4 7.37 9.77 19" fill={props.primary}/>
      <polygon points="11.19 6.8 6.49 11.5 6.49 3.09 8.41 3.09 11.19 6.8" fill={props.accent}/>
      <path d="M23.92,6.62A1,1,0,0,0,23,6H12.5L9.8,2.4A1,1,0,0,0,9,2H5a1,1,0,0,0-.78.38l-4,5A1,1,0,0,0,1,9H5v4a1,1,0,0,0,.13.5l4,7A1,1,0,0,0,10,21h9a1,1,0,0,0,.63-1.78l-4.13-3.3,8.21-8.21A1,1,0,0,0,23.92,6.62Zm-13.24.29L7,10.59V4H8.5ZM3.08,7L5,4.6V7H3.08ZM16.15,19H12.41l1.66-1.66Zm-5.93-.63-3-5.2L12.41,8h8.17Z" fill={props.darkGray}/>
    </svg>
  )

}

module.exports = IconOrigamiBird;
