import React from 'react'
import { connect } from 'react-redux';
import { setMessage } from '../state/action-creators';

function Message(props) {
  return <div id="message">{props.st.infoMessage}</div>
}


// const mapStateToProps = st => {
//   return {st}
// }
// const mapStateToProps = state => {
//   return {message: state.infoMessage}
// }

export default connect(st => {return {st}}, {})(Message)


