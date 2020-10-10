import React, { useRef, useState } from 'react';

const InputBox = ({ setDimensions }) => {
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit() {
    const input = inputRef.current?.value;
    const dimensions = Number(input);
    if (isNaN(dimensions) || dimensions < 5) {
      return setErrorMsg('Please set a valid number (greater than 4)');
    }

    setDimensions(dimensions);
  }

  const inputRef = useRef(undefined);

  return (
    <div>
      <label htmlFor="dimInput">Set Board Dimensions: </label>
      <input name="dimInput" ref={inputRef}></input>
      <button onClick={handleSubmit}>Submit</button>
      <div>{errorMsg}</div>
    </div>
  );
};

export default InputBox;
