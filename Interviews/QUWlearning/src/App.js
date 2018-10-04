import React, { Component } from 'react';
import { createPosition, createAlphabet } from './helper.js'
import LetterGrid from './LetterGrid'
import EncoderForm from './EncoderForm.jsx'
import InputForm from './InputForm'

const init = createAlphabet()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      increment: [],
      position: null,
      cipherGrid: init,
      topValue: "",
      bottomValue: ""
    }
    this.addWord = this.addWord.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.clearGame = this.clearGame.bind(this)
  }

  addWord(snake) {
    //let newState = {...this.state}
    let newState = Object.assign(this.state)
    newState.word = snake.word
    newState.position = 0
    newState.increment = createPosition(newState.word)
    newState.topValue = ""
    newState.bottomValue = ""
    newState.cipherGrid = createAlphabet(newState.increment[newState.position].value)
    // this.setState({...newState})
    this.setState(newState)
  }

  updatePosition(obj) {
    //let newState = {...this.state}
    let newState = Object.assign(this.state)
    newState.position =  newState.position < newState.increment.length-1 ? newState.position += 1: 0
    newState.cipherGrid = createAlphabet(newState.increment[newState.position].value)
    newState.topValue += obj.topValue
    newState.bottomValue += obj.bottomValue
    // this.setState({...newState})
    this.setState(newState)
  }

  clearGame() {
    this.setState({
      word: "",
      increment: [],
      position: null,
      cipherGrid: init,
      topValue: "",
      bottomValue: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h2>General Configuration</h2>
        <InputForm addWord={this.addWord} />
        {this.state.increment.length > 0 && <LetterGrid code={this.state.increment} position={this.state.position}/>}
        {this.state.position === null && <h2>Please add a word to the Keyword field to enable buttons</h2>}
        <h2>Encoding</h2>
        <EncoderForm 
        clearGame={this.clearGame} 
        cipherGrid={this.state.cipherGrid} 
        updatePosition={this.updatePosition}
        position={this.state.position}
        topValue={this.state.topValue}
        bottomValue={this.state.bottomValue}/>
      </div>
    );
  }
}

export default App;
