import React, { Component } from 'react'

import './App.css';

import quizQuestions from './api/quizQuestions';
import Choice from './components/Choice';
export class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      correctAns: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
   
  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => question.answers);  
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
      correctAns:quizQuestions[0].correctAns
    });
  }
  
  handleAnswerSelected(event) {
    //const target = event.target;
    // this.setUserAnswer(event.currentTarget.value);
    // if (this.state.questionId < quizQuestions.length) {
    //     setTimeout(() => this.setNextQuestion(), 300);
    //   } else {
    //     // do nothing for now
    //   }
    console.log("event.currentTarget.value",event.currentTarget.value)
    console.log("corerct ans",this.correctAns)

      if(event.currentTarget.value==="B. Light and thermal")
      {
          console.log("correct answer")
          event.currentTarget.className ="CustomButton  correctans"
      }
      else
      {
        event.currentTarget.className ="CustomButton  wrongans" 
      }
  
  }
  render() {
    return (
      <div>
      
     

      <Choice
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        correctAns={this.correctAns}
      />
    
      </div>
    )
  }
}

export default App
