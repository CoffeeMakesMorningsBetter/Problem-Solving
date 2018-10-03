import React, { Component } from 'react';
import { checkValidInput } from './helper'

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    let checkInput = checkValidInput(this.state.input)
    if(checkInput) {
      this.props.addWord({word: this.state.input})
      this.setState({word: "", error: false})
    } else {
      this.setState({word: this.state.input, error: true})
    }
  }

  render() {
    return (
      <div>
        {this.state.error === true && <h2>Please use capital letters only with a min length of 3 and max length of 8</h2>}
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="input"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <input
            type="submit"
            value="Update"
            />
        </form>
      </div>

    )
  }
}

export default InputForm

