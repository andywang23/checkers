import React from 'react';
import styled from 'styled-components';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: ${(props) => (props.blackBackground ? 'black' : 'white')};
`;

const Piece = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  border: 1px solid gray;
  background-color: ${(props) => props.background};
`;

function Box({ blackBackground, coords, piece }) {
  return (
    <BoxDiv blackBackground={blackBackground}>
      {piece !== '-' ? <Piece background={piece} /> : null}
    </BoxDiv>
  );
}

export default Box;
