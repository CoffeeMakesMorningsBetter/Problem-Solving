import React from 'react'
import './GridItem.css'

export const GridItem = ({letter, value, idx, position}) => (
  <div className={(idx === position ? "gridItem highlight": "gridItem nothightlight")}>
    <div>{letter}</div>
    <div>{value}</div>
  </div>
)