import React, { Component } from 'react';

class CipherItem extends Component {
  render() {
    console.log("these are props", this.props)
    return (
      <div>
        <div>
          <button onClick={() => this.props.updatePosition({topValue: this.props.name, bottomValue: this.props.encoded})}>{this.props.name}</button>
        </div>
        <div>{this.props.encoded}</div>
      </div>
    )
  }
}

export default CipherItem
