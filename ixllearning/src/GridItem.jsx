import React from 'react'
import './GridItem.css'

export const GridItem = ({letter, value}) => (
  <div className="gridItem">
    <div>{letter}</div>
    <div>{value}</div>
  </div>
)