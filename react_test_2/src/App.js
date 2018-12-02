import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state = {
    text: ''
  }

  inputChangeHandler = (value) => {
    this.setState({text: value })
  }

  deleteCharHandler = (index) => {
    const inputText = this.state.text.split("")
    inputText.splice(index,1)
    this.setState({text: inputText.join('') })
  }

  render() {
    return (
      <div className="App">
        <h1>React is realy cool</h1>
        <input type='text' value={this.state.text} onChange={ (event) => { this.inputChangeHandler(event.target.value) } }/>
        <ValidationComponent inputLength={this.state.text.length}/>
        <p>Length of input text is {this.state.text.length}</p>
        { this.state.text.split('').map( (char,index) => {
          return <CharComponent char={char} key={index} click={this.deleteCharHandler.bind(this,index) } />
        })}
      </div>
    );
  }
}

export default App;
