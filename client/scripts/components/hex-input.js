'use strict';

const React = require('react');
const TinyColor = require('tinycolor2');

class HexInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = { focused: false, value: props.value };
  }

  clickToFocus() {
    this.setState({focused: true});
  }

  leaveToBlur() {

    let color = TinyColor(this.state.value);

    this.setState({focused: false, value: '#' + color.toHex() });

    return false;
  }

  updateValue(event) {
    this.setState({value: event.target.value});

    console.log(event.target.value, TinyColor(event.target.value).isValid());
  }

  componentDidUpdate() {
    this.refs.input.focus();
  }

  render() {

    return (
      <div className={`HexInput ${this.state.focused ? 'isFocused' : ''}`} onClick={this.clickToFocus.bind(this)}>
        <span className="HexInput_plainText">{this.state.value}</span>
        <form onSubmit={this.leaveToBlur.bind(this)}>
          <input type="text"
                 className="HexInput_input"
                 value={this.state.value}
                 ref="input"
                 onBlur={this.leaveToBlur.bind(this)}
                 onChange={this.updateValue.bind(this)}
                 tabindex="-1" />
        </form>
      </div>
    )

  }

}

module.exports = HexInput;
