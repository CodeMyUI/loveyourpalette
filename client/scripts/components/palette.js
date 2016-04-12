'use strict';

const React = require('react');
const TinyColor = require('tinycolor2');

const HexInput = require('./hex-input');

class Palette extends React.Component {

  render() {

    let mrOpt = [ this.props.darkGray, this.props.white ];

    return (
      <div className="Cards">
        <div className="Card" style={{backgroundColor: this.props.white}}>
          <h2 className="Card_title">Curent Palette</h2>
          <p>Click HEX codes to edit palette colors.</p>
          <div className="Palette">
            <div className="Palette_color" style={{backgroundColor: this.props.primary}} >
              <div className="Palette_colorHex" style={{color: TinyColor.mostReadable(this.props.primary, mrOpt)}}>
                Primary<br/>
                <HexInput value={this.props.primary} />
              </div>
            </div>
            <div className="Palette_color" style={{backgroundColor: this.props.accent}} >
              <div className="Palette_colorHex" style={{color: TinyColor.mostReadable(this.props.accent, mrOpt)}}>
                Accent<br/>{this.props.accent}
              </div>
            </div>
            <div className="Palette_color" style={{backgroundColor: this.props.darkGray}} >
              <div className="Palette_colorHex" style={{color: TinyColor.mostReadable(this.props.darkGray, mrOpt)}}>
                Dark Gray<br/>{this.props.darkGray}
              </div>
            </div>
            <div className="Palette_color" style={{backgroundColor: this.props.lightGray}} >
              <div className="Palette_colorHex" style={{color: TinyColor.mostReadable(this.props.lightGray, mrOpt)}}>
                Light Gray<br/>{this.props.lightGray}
              </div>
            </div>
            <div className="Palette_color" style={{backgroundColor: this.props.white}} >
              <div className="Palette_colorHex" style={{color: TinyColor.mostReadable(this.props.white, mrOpt)}}>
                White<br/>{this.props.white}
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

}


module.exports = Palette;
