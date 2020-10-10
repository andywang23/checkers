import React from 'react';

function ColorRadioInput({ setPieceColor }) {
  return (
    <form>
      Select Piece Colors:
      <input
        type="radio"
        value="red-black"
        name="pieceColor"
        defaultChecked
        onClick={() => setPieceColor('red black')}
      />
      <label htmlFor="red-black">Red / Black</label>
      <input
        type="radio"
        name="pieceColor"
        value="blue-green"
        onClick={() => setPieceColor('blue green')}
      />
      <label htmlFor="blue-green">Blue / Green</label>
    </form>
  );
}

export default ColorRadioInput;
