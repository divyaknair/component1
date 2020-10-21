import React from 'react';
function QuestionCount(props) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span>
    </div>
  );
}

export default QuestionCount;