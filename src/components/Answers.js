import React from 'react';
//import PropTypes from 'prop-types';

function Answers(props) {
  return (
   
							 
    <li className="answers">
      <input
        type="button"
        className="CustomButton"
        name="buttonGroup"
        
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onClick={props.onAnswerSelected}
      />
      
    </li>
    
  );
}

// Answers.propTypes = {
//   answerType: PropTypes.string.isRequired,
  
//   answer: PropTypes.string.isRequired,
//   onAnswerSelected: PropTypes.func.isRequired
// };

export default Answers;