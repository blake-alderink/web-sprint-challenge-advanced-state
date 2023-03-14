
import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange, postQuiz } from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    console.log(evt.target.value);
      props.inputChange(evt.target);
  }

  const onSubmit = evt => {
    console.log(props.newQuestion);
    evt.preventDefault();
    props.postQuiz({
      "question_text": props.newQuestion,
      "true_answer_text": props.newTrueAnswer,
      "false_answer_text": props.newFalseAnswer
    });
  }

const longEnough = (string) => {
  return string.trim().length >= 1;
}

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={longEnough(props.newFalseAnswer) && longEnough(props.newQuestion) && longEnough(props.newTrueAnswer) ? false : true}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer
}
}

export default connect(mapStateToProps, actionCreators)(Form)
