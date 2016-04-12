'use strict';

const React = require('react');
const NavBar = require('../components/navbar');
const Hero = require('../components/hero');
const CardSet = require('../components/card-set');
const Palette = require('../components/palette');
const Footer = require('../components/footer');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { colors: {
      primary: '#929292',
      accent: '#676767',
      darkGray: '#333333',
      lightGray: '#F8F8F8',
      white: '#FFFFFF'
    }}
  }

  componentDidMount() {

    this.setState({ colors: {
        primary: '#' + (this.props.params.primary || '929292'),
        accent: '#' + (this.props.params.accent || '676767'),
        darkGray: '#' + (this.props.params.darkGray || '333333'),
        lightGray: '#' + (this.props.params.lightGray || 'F8F8F8'),
        white: '#' + (this.props.params.white || 'FFFFFF')
      }});

  }

  componentWillReceiveProps(nextProps) {

      this.setState({ colors: {
        primary: '#' + (nextProps.params.primary || '929292'),
        accent: '#' + (nextProps.params.accent || '676767'),
        darkGray: '#' + (nextProps.params.darkGray || '333333'),
        lightGray: '#' + (nextProps.params.lightGray || 'F8F8F8'),
        white: '#' + (nextProps.params.white || 'FFFFFF')
      }});
  }

  render() {

    document.getElementsByTagName('body')[0].style.backgroundColor = this.state.colors.lightGray;

    return (
      <div style={{color: this.state.colors.darkGray}}>
        <NavBar {...this.state.colors} />
        <Hero {...this.state.colors} />
        <div className="Container">
          <CardSet {...this.state.colors} />
          <Palette {...this.state.colors} />
          <Footer />
        </div>
      </div>
    );
  }

}

module.exports = App;
