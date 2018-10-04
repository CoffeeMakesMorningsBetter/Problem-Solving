import React, { Component } from 'react';
import './CipherItem.css'

class CipherItem extends Component {
  render() {
    const { position, updatePosition, name, encoded } = this.props
    return (
      <div className="gridItem">
        <div>
          <button disabled={position === null? true: false} onClick={() => updatePosition({topValue: name, bottomValue: encoded})}>{name}</button>
        </div>
        <div>{encoded}</div>
      </div>
    )
  }
}

export default CipherItem
