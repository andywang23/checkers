import React, { useRef } from 'react';

const InputBox = ({ setDimensions }) => {
  function handleSubmit() {
    const input = inputRef.current?.value;
    setDimensions(Number(input));
  }

  const inputRef = useRef(undefined);

  return (
    <div>
      <label htmlFor="dimInput">Set Board Dimensions: </label>
      <input name="dimInput" ref={inputRef}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputBox;
