import React from 'react';

function ShapeRadioInput({ setPieceShape }) {
  return (
    <form>
      Select Piece Shapes:
      <input
        type="radio"
        value="circle"
        name="pieceShape"
        checked
        onClick={() => setPieceShape('circle')}
      />
      <label for="circle">Circle</label>
      <input
        type="radio"
        name="pieceShape"
        value="square"
        onClick={() => setPieceShape('square')}
      />
      <label for="square">Square</label>
    </form>
  );
}

export default ShapeRadioInput;