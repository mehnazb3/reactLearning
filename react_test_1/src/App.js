import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserInput, UserOutput} from './Common/Common.js';

class App extends Component {
  state = {
    user: [
      { name: "Martin"},
      { name: "Max"},
      { name: "Mark"},
      { name: "Mark"}
    ]
  }
  changeUserNameHandler = (event) => {
    this.setState({
      user: [
        { name: event.target.value },
        { name: "Max"},
        { name: "Mark"},
        { name: "Mark"}
      ]
    })
  }

  render() {
    const style = {
      padding: '10px',
      border: '1px solid #7529ea',
      color: '#7529ea'
    };
    return (
      <div className="content">
        <h1>Welcome Mehnaz</h1>
        <UserInput change={this.changeUserNameHandler} username={this.state.user[0].name} style={style} />
        <UserOutput username={this.state.user[0].name}/>
        <UserOutput username={this.state.user[1].name}/>
        <UserOutput username={this.state.user[2].name}/>
        <UserOutput username={this.state.user[3].name}/>
      </div>
    );
  }
}

export default App;
