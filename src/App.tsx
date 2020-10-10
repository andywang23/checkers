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
  const [dimensions, setDimensions] = useState<number>(0);
  const [pieceColors, setPieceColor] = useState<string>('red black');
  const [pieceShape, setPieceShape] = useState('circle');
  const [loadedBoardState, setLoadedBoardState] = useState(null);

  const pieceColorArr = pieceColors.split(' ');

  return (
    <StyledApp>
      {dimensions === 0 || loadedBoardState === null ? (
        <>
          <InputBox setDimensions={setDimensions} />
          <ColorRadioInput setPieceColor={setPieceColor} />
          <ShapeRadioInput setPieceShape={setPieceShape} />
          <p>OR</p>
          <LoadGameInput setLoadedBoardState={setLoadedBoardState} />
        </>
      ) : (
        <Board
          dimensions={dimensions}
          pieceColors={pieceColorArr}
          pieceShape={pieceShape}
          loadedBoardState={loadedBoardState}
        />
      )}
    </StyledApp>
  );
}

export default App;
