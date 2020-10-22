import React from 'react';


function Question(props) {
  console.log("question is",props)
  return (
    
    <h6 className="questions">{props.content}</h6>
    
  );
}



export default Question;