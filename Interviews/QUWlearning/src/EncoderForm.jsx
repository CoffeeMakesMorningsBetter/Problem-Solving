import React, { Component } from 'react'
import CipherGrid from './CipherGrid'

class EncoderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      endcoded: ""
    }
    this.clear = this.clear.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    return {
      word: props.topValue,
      endcoded: props.bottomValue
    }
  }

  handleChange(e) {
    // including a dummy function so the console doesnt yell at me for not have onChange event
    let value = e.target.name
    this.setState({[e.target.name]: this.state[value]})
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
    const { position, cipherGrid, updatePosition } = this.props
    return (
      <div>
        <div>
          <CipherGrid 
            position={position} 
            cipherGrid={cipherGrid} 
            updatePosition={updatePosition}
          />
        </div>
        <form onSubmit={this.clear}>
          <label>
            <input 
            type="text"
            name="word"
            value={this.state.word}
            onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="clear"/>
          <label>Cipher Text</label>
            <input 
              type="text"
              name="endcoded"
              value={this.state.endcoded}
              onChange={this.handleChange}
            />
        </form>
      </div>
    )
  }
}

export default EncoderForm