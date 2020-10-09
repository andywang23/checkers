import React from 'react';
import styled from 'styled-components';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;

  &:nth-of-type(${(props) => (props.backgroundOffset ? 'odd' : 'even')}) {
    background-color: black;
  }
`;

const Piece = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  border: 1px solid gray;
  background-color: ${(props) => props.background};
`;

function Box({ blackBackgroundStart, coords, piece }) {
  return (
    <BoxDiv blackBackgroundStart={blackBackgroundStart}>
      {piece !== '-' ? <Piece background={piece} /> : null}
    </BoxDiv>
  );
}

export default Box;
