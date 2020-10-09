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

const BlackPiece = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background-color: black;
  border: 1px solid white;
`;

const RedPiece = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background-color: red;
  border: 1px solid white;
`;

function Box({ blackBackground, coords, piece }) {
  let PieceComponent = null;
  if (piece !== '-') {
    PieceComponent = piece === 'black' ? <BlackPiece /> : <RedPiece />;
  }

  return <BoxDiv blackBackground={blackBackground}>{PieceComponent}</BoxDiv>;
}

export default Box;
