import React, { Component } from 'react';
import InputForm from './InputForm'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      position: null
    }
    this.addWord = this.addWord.bind(this)
  }

  addWord(snake) {
    let newState = {...this.state}
    newState.word = snake.word 
    newState.position = 0
    this.setState({...newState})
  }

  render() {
    return (
      <div className="App">
        <InputForm addWord={this.addWord} />
      </div>
    );
  }
}

export default App;
