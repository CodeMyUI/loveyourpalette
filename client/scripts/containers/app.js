'use strict';

const React = require('react');
const ReactRedux = require('react-redux');

const PaletteActions = require('../actions/palette');
const defaultPalette = require('../config/default-palette');
const NavBar = require('../components/navbar');
const Hero = require('../components/hero');
const CardSet = require('../components/card-set');
const Palette = require('../containers/palette');
const Footer = require('../components/footer');

class App extends React.Component {

  componentDidMount() {
    this.checkPalette();
  }

  componentDidUpdate() {
    this.checkPalette();
  }

  checkPalette () {

    let pathPalette = _.clone(this.props.params);

    pathPalette = _.pick(pathPalette, _.keys(defaultPalette));

    pathPalette = _.omitBy(pathPalette, _.isUndefined);

    pathPalette = _.mapValues(pathPalette, (color) => `#${color.toUpperCase()}`);

    pathPalette = _.defaults({}, pathPalette, defaultPalette);

    if(!_.isMatch(pathPalette, this.props.palette)) {
      this.props.onDifferentPalette(pathPalette);
    }

  }

  render () {
    return (
      <div>
        <NavBar />
        <Hero />
        <div className="Container">
          <CardSet />
          <Palette />
          <Footer />
        </div>
      </div>
    );
  }

}

let mapStateToProps = (state) => { return { palette: state.palette }; };
let mapDispatchToProps = function (dispatch) {
  return {
    onDifferentPalette: function (palette) {
      dispatch(PaletteActions.changePalette(palette));
    }
  }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
