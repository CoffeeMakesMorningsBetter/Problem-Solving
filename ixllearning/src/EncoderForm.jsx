import React, { Component } from 'react'
import { createAlphaBet } from './helper'
import { LetterGrid } from './LetterGrid'

class EncoderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      endcoded: ""
    }
    this.clear = this.clear.bind(this)
  }

  clear(e) {
    e.preventDefault()
    this.props.clearGame()
    this.setState({
      word: "",
      endcoded: ""
    })
  }

  render() {
    return (
      <div>
        <div>

        </div>
        <form onSubmit={this.clear}>
          <label>
            <input 
            type="text"
            name="word"
            value={this.state.word}
            />
          </label>
          <input type="submit"/>
          <label>
            <input 
              type="text"
              name="encoded"
              value={this.state.endcoded}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default EncoderForm