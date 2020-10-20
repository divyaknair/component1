import React from 'react';
//import PropTypes from 'prop-types';


function Question(props) {
  return (
    <div className="card-block">
					<div className="popuptxt">
    <h6 className="questions">{props.content}</h6>
    </div>
    </div>
  );
}

// Question.propTypes = {
//   content: PropTypes.string.isRequired
// };

export default Question;