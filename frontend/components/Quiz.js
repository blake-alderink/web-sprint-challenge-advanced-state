import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'




function Quiz(props) {

  useEffect(() => {if (!props.st.quiz) props.fetchQuiz()}, [])

  const onSubmit = (evt) => {
    console.log(props.st.quiz.quiz_id);
    evt.preventDefault();
    props.postAnswer({
      "quiz_id": props.st.quiz.quiz_id,
      "answer_id": props.st.selectedAnswer.answer_id
    })
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.st.quiz ? (
          <>
            <h2>{props.st.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={props.st.selectedAnswer === props.st.quiz.answers[0] ? "answer selected" : "answer"}onClick={() => props.selectAnswer(props.st.quiz.answers[0])}>
                {props.st.quiz.answers[0].text}
                <button >
                {props.st.selectedAnswer === props.st.quiz.answers[0] ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={props.st.selectedAnswer === props.st.quiz.answers[1] ? "answer selected" : "answer"}onClick={() => props.selectAnswer(props.st.quiz.answers[1])}>
              {props.st.quiz.answers[1].text}
                <button >
                  {props.st.selectedAnswer === props.st.quiz.answers[1] ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={onSubmit} disabled={!props.st.selectedAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => {return {st}}, actionCreators)(Quiz);