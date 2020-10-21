import React from 'react'
import Question from './Question';
import QuestionCount from './QuestionCount';
import Answers from './Answers'
function Choice(props) {

    function renderAnswerOptions(key) {
        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <Answers
                    key={key.content}
                    answerContent={key.content}
                    answerType={key.type}
                    answer={props.answer}
                    questionId={props.questionId}
                    onAnswerSelected={props.onAnswerSelected}

                />
            </div>
        );
    }
   return (

        <div className="lessoncard">
            <div className="card-header">
                <QuestionCount
                    counter={props.questionId}
                    total={props.questionTotal}
                /></div>

            <Question content={props.question} />
            
            <div className="row">

                <ul className="optiondiv">

                    {props.answerOptions.map(renderAnswerOptions)}

                </ul>

            </div>

        </div>
    );
}
export default Choice;
