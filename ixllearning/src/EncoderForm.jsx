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

  handleChange(e) {
    this.setState({[e.target.name]: this.state.word})
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
    console.log('MATT')
    console.log(this.props.cipherGrid)
    return (
      <div>
        <div>
          <CipherGrid 
            position={this.props.position} 
            cipherGrid={this.props.cipherGrid} 
            updatePosition={this.props.updatePosition}
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
          <label>
            <input 
              type="text"
              name="encoded"
              value={this.state.endcoded}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default EncoderForm