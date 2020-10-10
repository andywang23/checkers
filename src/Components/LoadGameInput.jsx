import React, { useRef } from 'react';

export default function LoadGameInput({ setLoadedBoardState }) {
  async function handleSubmit() {
    const input = inputRef.current?.value;

    const res = await fetch('/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: input }),
    });

    const parsedRes = await res.json();
    setLoadedBoardState(parsedRes);
  }

  const inputRef = useRef(undefined);

  return (
    <div>
      <label htmlFor="loadGameInput">Game ID to Load: </label>
      <input name="loadGameInput" ref={inputRef}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
