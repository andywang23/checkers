import React, { useRef, useState } from 'react';

export default function LoadGameInput({ setLoadedGameState }) {
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit() {
    const input = inputRef.current?.value;
    try {
      const res = await fetch(`/api/${input}`);

      const parsedRes = await res.json();
      if (parsedRes.err) setErrorMsg(parsedRes.err);
      setLoadedGameState(parsedRes);
    } catch {
      setErrorMsg('Could not connect to server');
    }
  }

  const inputRef = useRef(undefined);

  return (
    <div>
      <label htmlFor="loadGameInput">Game ID to Load: </label>
      <input name="loadGameInput" ref={inputRef}></input>
      <button onClick={handleSubmit}>Submit</button>
      <p>{errorMsg}</p>
    </div>
  );
}
