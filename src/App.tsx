import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './Components/InputBox.jsx';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [dimensions, setDimensions] = useState<number>(0);

  return (
    <StyledApp>{dimensions === 0 ? <InputBox setDimensions={setDimensions} /> : null}</StyledApp>
  );
}

export default App;
