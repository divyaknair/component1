import React from 'react';
function Answers(props) {
  return (
   
							 
    <li className="answers">
      <input
        type="button"
        className="CustomButton"
        name="buttonGroup"
        
        id={props.answerType}
        value={props.answerContent}
        disabled={props.answer}
        onClick={props.onAnswerSelected}
      />
      
    </li>
    
  );
}

export default Answers;