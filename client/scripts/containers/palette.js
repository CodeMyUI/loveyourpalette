'use strict';

const React = require('react');
const ReactRedux = require('react-redux');
const { Element } = require('react-scroll');

const PaletteActions = require('../actions/palette');
const PaletteSwatch = require('../components/palette-swatch');

class Palette extends React.Component {

  render() {

    return (
      <Element className="Cards" name="colorPalette">
        <div className="Card">
          <h2 className="Card_title">Current Palette</h2>
          <p>Click HEX codes to edit palette colors.</p>
          <div className="Palette">
            <PaletteSwatch
              key="primary"
              colorKey="primary"
              label="Primary"
              value={this.props.primary}
              onUpdate={this.props.onUpdate} />
            <PaletteSwatch
              key="accent"
              colorKey="accent"
              label="Accent"
              value={this.props.accent}
              onUpdate={this.props.onUpdate} />
            <PaletteSwatch
              key="darkGray"
              colorKey="darkGray"
              label="Dark Gray"
              value={this.props.darkGray}
              onUpdate={this.props.onUpdate} />
            <PaletteSwatch
              key="lightGray"
              colorKey="lightGray"
              label="Light Gray"
              value={this.props.lightGray}
              onUpdate={this.props.onUpdate} />
            <PaletteSwatch
              key="white"
              colorKey="white"
              label="White"
              value={this.props.white}
              onUpdate={this.props.onUpdate} />
          </div>
        </div>
      </Element>
    )

  }

}

let mapStateToProps = (state) => state.palette;
let mapDispatchToProps = function (dispatch) {
  return {
    onUpdate: function (colorKey, value) {
      dispatch(PaletteActions.changeColor(colorKey, value));
    }
  }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Palette);
