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
    const AnswerOptionsList = quizQuestions.map((question) => question.answers);  
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: AnswerOptionsList[0],
      correctAns:quizQuestions[0].correctAns
    });
  }
  
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      correctAns:quizQuestions[counter].correctAns,
      answer: ''
    });
  }

 
  handleAnswerSelected(event) {
    
    console.log("event.currentTarget.value",event.currentTarget.value)
    console.log("corerct ans",this.correctAns)
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      console.log("quiz finished")
    }

      //if(event.currentTarget.value==="B. Light and thermal")
      if(event.currentTarget.value=== this.correctAns)
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
        correctAns={this.state.correctAns}
      />
    
      </div>
    )
  }
}

export default App
