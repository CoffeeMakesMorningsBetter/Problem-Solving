import React, { Component } from 'react';
import CipherItem from './CipherItem'

class CipherGrid extends Component {
  render(){
    const { cipherGrid } = this.props
    console.log("inside GRID", cipherGrid)
    let grid = cipherGrid.map((obj, idx) => (
      <CipherItem 
      key={idx} 
      name={obj.name}
      encoded={obj.encoded}
      updatePosition={this.props.updatePosition}
      />
    ))
    return(
      <div>
        {grid}
      </div>
    )
  }
}

export default CipherGrid