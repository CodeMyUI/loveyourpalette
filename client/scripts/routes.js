'use strict';

let App = require('./components/app');

module.exports = {
  path: '/(:primary)(/:accent)(/:darkGray)(/:lightGray)(/:white)',
  component: App
};
