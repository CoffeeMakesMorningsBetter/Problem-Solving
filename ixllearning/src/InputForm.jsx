import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.addWord({word: this.state.input})
    this.setState({input: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input
          type='submit'
          />
      </form>
    )
  }
}

export default InputForm

