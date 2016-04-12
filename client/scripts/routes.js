'use strict';

let App = require('./containers/app');

module.exports = {
  path: '/(:primary)(/:accent)(/:darkGray)(/:lightGray)(/:white)',
  component: App
};