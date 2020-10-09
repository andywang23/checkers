import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './Components/InputBox.jsx';
import Board from './views/Board.js';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [dimensions, setDimensions] = useState<number>(0);

  return (
    <StyledApp>
      {dimensions === 0 ? (
        <InputBox setDimensions={setDimensions} />
      ) : (
        <Board dimensions={dimensions} />
      )}
    </StyledApp>
  );
}

export default App;
