import React from 'react';

const ValidationComponent = (props) => {
  let validation_text = null
  if (props.inputLength < 5)
    validation_text = "Input is too short"
  else if (props.inputLength > 10)
    validation_text = "Input is enough long"
  return <span className="error">{validation_text}</span>;

}

export default ValidationComponent;