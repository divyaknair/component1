import React from 'react'
import Question from './Question';
import QuestionCount from './QuestionCount';
import Answers from './Answers'

function Choice(props) {

   

   const QuestionList = props.question.map((quizQuestion) => quizQuestion.question);
    const AnswerOptionsList = props.question.map((question) => question.answers);
    var zipped = [];
    for (var i = 0; i < QuestionList.length; i++) {
        zipped.push([QuestionList[i], AnswerOptionsList[i]]);
    }

    //const zipped = (QuestionList, AnswerOptionsList);
    console.log("AnswerOptionsList", AnswerOptionsList)

    function renderAnswerOptions(key,id) {
        
               
        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <Answers
                    key={id}
                    answerContent={key.content}
                    answerid={key.id}
                    answer={props.answer}
                    questionId={props.questionId}
                    onAnswerSelected={props.onAnswerSelected}

                />
           </div>
        );
    }
    return (

        <div >
            
            {
                zipped.map(([question, Answers], j) => (

                    <div className="lessoncard">
                         <div >
                            <QuestionCount
                                counter={1+j}
                                total={props.questionTotal}/>
                         </div>
                     <div className="card-block">
					       <div className="popuptxt">
                              <Question content={question} />



                        
                            
                              <div className="row">
                                 
                                     {Answers.map(renderAnswerOptions,j)}
                                </div>
                             </div>
                            </div>
                    </div>
                       

                   
                ))
            }

        </div>

    );
}
export default Choice;
