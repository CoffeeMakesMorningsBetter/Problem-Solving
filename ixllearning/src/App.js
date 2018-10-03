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
    let newState = {...this.state}
    newState.word = snake.word
    newState.position = 0
    newState.increment = createPosition(newState.word)
    newState.topValue = ""
    newState.bottomValue = ""
    newState.cipherGrid = createAlphabet(newState.increment[newState.position].value)
    this.setState({...newState})
  }

  updatePosition(obj) {
    console.log('this is the object passed back ', obj)
    let newState = {...this.state}
    newState.position =  newState.position < newState.increment.length-1 ? newState.position += 1: 0
    newState.cipherGrid = createAlphabet(newState.increment[newState.position].value)
    newState.topValue += obj.topValue
    newState.bottomValue += obj.bottomValue
    this.setState({...newState})
  }

  clearGame() {
    this.setState({
      word: "",
      increment: [],
      position: null,
      cipherGrid: init
    })
  }

  render() {
    console.log(this.state.cipherGrid)
    return (
      <div className="App">
        <InputForm addWord={this.addWord} />
        {this.state.increment.length > 0 && <LetterGrid code={this.state.increment}/>}
        <EncoderForm 
        clearGame={this.clearGame} 
        cipherGrid={this.state.cipherGrid} 
        updatePosition={this.updatePosition}
        position={this.state.position}/>
      </div>
    );
  }
}

export default App;
