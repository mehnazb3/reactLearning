import React from 'react'
const UserInput = (props) => {
  return (
    <input type='text' onChange={props.change} value={props.username} style={props.style} />
  )
};

const UserOutput = (props) => {
  return (
    <div className="body-section">
      <p>Hey {props.username},This is my first paragraph.</p>
      <p>This is my second paragraph. Thanks {props.username}</p>
    </div>
  )
};

export { UserInput, UserOutput};