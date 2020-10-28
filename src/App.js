import React, { Component } from 'react'


//import './App.css';

import quizQuestions from './api/quizQuestions';
import Choice from './components/Choice';
export class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
     
      correctAns: '',
      disable: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
   
  // componentDidMount() {
  //   const AnswerOptionsList = quizQuestions.map((question) => question.answers);  
  //   //const QuestionList=quizQuestions.map((quizQuestion)=>quizQuestion.question);
    
  //  // console.log("correctAnsList",correctAnsList)
  //   console.log("AnswerOptionsList",AnswerOptionsList)
  //   this.setState({
  //     //question: QuestionList[0],
  //     answerOptions: AnswerOptionsList[0],
  //     correctAns:quizQuestions[0].correctAns
  //   });
  // }
  
  
  handleAnswerSelected(event) {
    const correctAnsList = quizQuestions.map((question) => question.correctAns);
    console.log("event.currentTarget.id",event.currentTarget.getAttribute("id"))
     const id=event.currentTarget.getAttribute("id")
     const num=event.currentTarget.getAttribute("name")
     //console.log("button name",num)
     const i=(id-1)/4
     const j=Math.floor(i);
     
     console.log("correct answer",correctAnsList[j])
      if(event.currentTarget.value=== correctAnsList[j])

      {
          
          console.log("correct answer")
          event.currentTarget.className ="CustomButton  correctans"
          //console.log("ref value",button.className)
          
          // const q=(j-1)*4
          // const buttonid=q+1
          // if(buttonid!=i )
          // {
            

          // }
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
        question={quizQuestions}
        disable={this.state.disable}
        onAnswerSelected={this.handleAnswerSelected}
        
      />
    
      </div>
    )
  }
}

export default App
