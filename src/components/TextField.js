import React from 'react';

const TextField = props => {
  return (
    <input
      name={props.name}
      type='text'
      value={props.content}
      placeholder={props.placeholder}
      onChange={props.handlerFunction}
    />
  );
}

export default TextField;
