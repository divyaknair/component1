import React from 'react'


import Question from './Question';
import QuestionCount from './QuestionCount';
import Answers from './Answers'
//import PropTypes from 'prop-types';


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

    //   function renderQuestionOptions(key) {
    //     return (
    //       <Question
    //         key={key.content}
    //         answerContent={key.content}
    //         answerType={key.type}
    //         answer={props.answer}
    //         questionId={props.questionId}
    //         onAnswerSelected={props.onAnswerSelected}
    //       />
    //     );
    //   }

    return (
        <div className="lessoncard">
            <div className="card-header">
                <QuestionCount
                    counter={props.questionId}
                    total={props.questionTotal}
                /></div>

            <Question content={props.question} />

            {/* <ul className="optiondiv"> */}
            <div className="row">

                <ul className="optiondiv">

                    {props.answerOptions.map(renderAnswerOptions)}
                    
                </ul>

            </div>
        </div>
    );
}

//   Choice.propTypes = {
//     answer: PropTypes.string.isRequired,
//     answerOptions: PropTypes.array.isRequired,
//     counter: PropTypes.number.isRequired,
//     question: PropTypes.string.isRequired,
//     questionId: PropTypes.number.isRequired,
//     questionTotal: PropTypes.number.isRequired,
//     onAnswerSelected: PropTypes.func.isRequired
//   };

export default Choice;
