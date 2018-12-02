import React from 'react';

const CharComponent = (props) => {
  
  return <div className="right-section" onClick={props.click}>{props.char}</div>;

}

export default CharComponent;