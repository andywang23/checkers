import React from 'react';

function ColorRadioInput({ setPieceColor }) {
  return (
    <div>
      <form>
        <input
          type="radio"
          value="red-black"
          name="pieceColor"
          checked
          onClick={() => setPieceColor('red black')}
        />
        <label for="red-black">Red / Black</label>
        <input
          type="radio"
          name="pieceColor"
          value="blue-green"
          onClick={() => setPieceColor('blue green')}
        />
        <label for="blue-green">Blue / Green</label>
      </form>
    </div>
  );
}

export default ColorRadioInput;
