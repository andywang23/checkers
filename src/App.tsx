import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './Components/InputBox.jsx';
import Board from './views/Board.js';
import ColorRadioInput from './Components/ColorRadioInput';
import ShapeRadioInput from './Components/ShapeRadioInput';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [dimensions, setDimensions] = useState<number>(0);
  const [pieceColors, setPieceColor] = useState('red black');
  const [pieceShape, setPieceShape] = useState('circle');

  const pieceColorArr = pieceColors.split(' ');

  return (
    <StyledApp>
      {dimensions === 0 ? (
        <>
          <InputBox setDimensions={setDimensions} />
          <ColorRadioInput setPieceColor={setPieceColor} />
          <ShapeRadioInput setPieceShape={setPieceShape} />
        </>
      ) : (
        <Board dimensions={dimensions} pieceColors={pieceColorArr} pieceShape={pieceShape} />
      )}
    </StyledApp>
  );
}

export default App;
