import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './Components/DimensionInput.jsx';
import Board from './views/Board.jsx';
import ColorRadioInput from './Components/ColorRadioInput';
import ShapeRadioInput from './Components/ShapeRadioInput';
import LoadGameInput from './Components/LoadGameInput';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [dimensions, setDimensions] = useState<number | null>(null);
  const [pieceColors, setPieceColor] = useState<string>('red black');
  const [pieceShape, setPieceShape] = useState<string>('circle');
  const [loadedGameState, setLoadedGameState] = useState(null);

  const pieceColorArr = pieceColors.split(' ');

  return (
    <StyledApp>
      {dimensions !== null || loadedGameState !== null ? (
        <Board
          dimensions={dimensions || undefined}
          pieceColors={pieceColorArr}
          pieceShape={pieceShape}
          loadedGameState={loadedGameState}
        />
      ) : (
        <>
          <InputBox setDimensions={setDimensions} />
          <ColorRadioInput setPieceColor={setPieceColor} />
          <ShapeRadioInput setPieceShape={setPieceShape} />
          <p>OR</p>
          <LoadGameInput setLoadedGameState={setLoadedGameState} />
        </>
      )}
    </StyledApp>
  );
}

export default App;
