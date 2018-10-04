import React, {Component} from 'react';
import { GridItem } from './GridItem'
import './LetterGrid.css'

class LetterGrid extends Component {
  render(){
    const { code, position } = this.props
    let gridItems = code.map((obj,idx) => <GridItem key={idx} idx={idx} letter={obj.letter} value={obj.value} position={position}/>)
    return(
      <div className="parent">{gridItems}</div>
    )
  }
}


export default LetterGrid