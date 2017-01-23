import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { RadioGroup, Radio } from 'react-mdl';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      selectedOption: 'one'
    };
  }
  
  componentDidMount() {
    this.setState({
      radioContent: <RadioGroup
        className="payment-options"
        onChange={event => this.setState({selectedOption: event.currentTarget.value})}
        name="selectedOption"
        value={this.state.selectedOption}>
        <Radio ripple value="one">One</Radio>
        <Radio ripple value="two">Two</Radio>
        <Radio ripple value="three">Three</Radio>
        <Radio ripple value="four">Four</Radio>
      </RadioGroup>
    });
  }
  
  render() {
    return (
      <div className="App">
        {this.state.radioContent}
        <h1>{this.state.selectedOption}</h1>
      </div>
    );
  }
}

export default App;
