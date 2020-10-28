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

    function renderAnswerOptions(key) {


        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <Answers
                    answerContent={key.content}
                    answerid={key.id}
                    onAnswerSelected={props.onAnswerSelected}
                    disable={props.disable}

                />
            </div>
        );
    }
    return (

        <div >

            {
                zipped.map(([question, Answers], j) => (

                    <div className="card lessoncard">
                        <div className="card-header" >
                            <QuestionCount
                                counter={1 + j}
                            />
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <Question content={question} />

                                <div className="row">

                                    {Answers.map(renderAnswerOptions)}
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
