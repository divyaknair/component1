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
      //question:[] ,
      answerOptions: [],
      answer: '',
      answersCount: {},
      correctAns: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
   
  componentDidMount() {
    const AnswerOptionsList = quizQuestions.map((question) => question.answers);  
    //const QuestionList=quizQuestions.map((quizQuestion)=>quizQuestion.question);
    
   // console.log("correctAnsList",correctAnsList)
    console.log("AnswerOptionsList",AnswerOptionsList)
    this.setState({
      //question: QuestionList[0],
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
      //question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      correctAns:quizQuestions[counter].correctAns,
      answer: ''
    });
  }

 
  handleAnswerSelected(event) {
    const correctAnsList = quizQuestions.map((question) => question.correctAns);
    console.log("event.currentTarget.id",event.currentTarget.getAttribute("id"))
    //console.log("event.currentTarget.name",event.currentTarget.getAttribute("name"))
    //console.log("corerct ans",correctAnsList[0])
    // if (this.state.questionId < quizQuestions.length) {
    //   setTimeout(() => this.setNextQuestion(), 300);
    // } else {
    //   console.log("quiz finished")
    // }
   
     const id=event.currentTarget.getAttribute("id")
     //const num=event.currentTarget.getAttribute("name")
     const i=(id-1)/4
     const j=Math.floor(i);
     
     console.log("correct answer",correctAnsList[j])
      //if(event.currentTarget.value==="B. Light and thermal")
     
      if(event.currentTarget.value=== correctAnsList[j])
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
        // answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={quizQuestions}
       
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        
      />
    
      </div>
    )
  }
}

export default App
