import React, { Component } from 'react';
import CipherItem from './CipherItem'
import './CipherGrid.css'

class CipherGrid extends Component {
  render(){
    const { cipherGrid } = this.props
    let grid = cipherGrid.map((obj, idx) => (
      <CipherItem 
      key={idx} 
      name={obj.name}
      encoded={obj.encoded}
      updatePosition={this.props.updatePosition}
      position={this.props.position}
      />
    ))
    return(
      <div className="gridParent">
      <div>Source Text</div>
        {grid}
      </div>
    )
  }
}

export default CipherGrid