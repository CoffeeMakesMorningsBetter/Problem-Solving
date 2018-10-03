import React, { Component } from 'react';
import { createPosition, createAlphabet } from './helper.js'
import LetterGrid from './LetterGrid'
import EncoderForm from './EncoderForm.jsx'
import InputForm from './InputForm'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      increment: [],
      position: null,
      cipherGrid: []
    }
    this.addWord = this.addWord.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.clearGame = this.clearGame.bind(this)
  }

  addWord(snake) {
    let newState = {...this.state}
    newState.word = snake.word.toUpperCase()
    newState.position = 0
    newState.increment = createPosition(newState.word)
    this.setState({...newState})
  }

  updatePosition() {
    let newState = {...this.state}
    newState.position = newState.increment.length < newState.position ? newState.position += 1: 0
    newState.cipherGrid = createAlphabet(newState.position)
    this.setState({...newState})
  }

  clearGame() {
    this.setState({
      word: "",
      increment: [],
      position: null
    })
  }

  render() {

    return (
      <div className="App">
        <InputForm addWord={this.addWord} />
        {this.state.increment.length > 0 && <LetterGrid code={this.state.increment}/>}
        <EncoderForm clearGame={this.clearGame} cipherGrid={this.state.cipherGrid}/>
      </div>
    );
  }
}

export default App;
