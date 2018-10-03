import React, {Component} from 'react';
import { GridItem } from './GridItem'
import './LetterGrid.css'

class LetterGrid extends Component {
  render(){
    console.log(this.props.code)
    let gridItems = this.props.code.map((obj,idx) => <GridItem key={idx} {...obj}/>)
    return(
      <div className="parent">{gridItems}</div>
    )
  }
}


export default LetterGrid