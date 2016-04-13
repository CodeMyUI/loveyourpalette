'use strict';

const React = require('react');
const TinyColor = require('tinycolor2');

class HexInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = { focused: false, value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  componentDidUpdate() {
    this.refs.input.focus();
  }

  clickToFocus() {
    this.setState({focused: true});
  }

  leaveToBlur() {

    let color = TinyColor(this.state.value);

    this.setState({focused: false, value: '#' + color.toHex().toUpperCase() });

    this.props.onUpdate(this.props.colorKey, '#' + color.toHex().toUpperCase());

    return false;
  }

  checkSubmit(event) {

    if (event.which === 13) {
      this.refs.input.blur();
    }

  }

  updateValue(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <div className={`HexInput ${this.state.focused ? 'isFocused' : ''}`} onClick={this.clickToFocus.bind(this)}>
        <span className="HexInput_plainText">{this.state.value}</span>
        <input type="text"
               className="HexInput_input"
               value={this.state.value}
               ref="input"
               onKeyPress={this.checkSubmit.bind(this)}
               onBlur={this.leaveToBlur.bind(this)}
               onChange={this.updateValue.bind(this)}
               tabindex="-1" />
      </div>
    )

  }

}

module.exports = HexInput;
