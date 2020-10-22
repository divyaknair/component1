import React from 'react';
function Answers(props) {
  return (
   
							 
    <div className="col-md-6 col-sm-12 col-xs-12">
      <input
        type="button"
        className="CustomButton"
        name="buttonGroup"
        
        id={props.answerid }
        value={props.answerContent}
        disabled={props.answer}
        onClick={props.onAnswerSelected}
      />
      
      </div>
    
  );
}

export default Answers;