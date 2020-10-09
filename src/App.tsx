import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

function App(): StyledComponent<'div', any, {}, never> {
  return <StyledApp></StyledApp>;
}

export default App;
