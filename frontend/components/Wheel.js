import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

function Wheel(props) {


const counterClick = () => {
  props.moveCounterClockwise();
}
const clockClick = () => {
  props.moveClockwise();
}

const isActive = (num) => {
  return props.st.wheel === num ? "cog active" : "cog"
}
const isActiveB = (num) => {
  return props.st.wheel === num ? "B" : ""
}


  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={isActive(0)} style={{ "--i": 0 }}>{isActiveB(0)}</div>
        <div className={isActive(1)} style={{ "--i": 1 }}>{isActiveB(1)}</div>
        <div className={isActive(2)} style={{ "--i": 2 }}>{isActiveB(2)}</div>
        <div className={isActive(3)} style={{ "--i": 3 }}>{isActiveB(3)}</div>
        <div className={isActive(4)} style={{ "--i": 4 }}>{isActiveB(4)}</div>
        <div className={isActive(5)} style={{ "--i": 5 }}>{isActiveB(5)}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClick}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockClick}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => {return {st}}, actionCreators)(Wheel);
