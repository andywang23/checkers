import React from 'react';
import styled from 'styled-components';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;

  background-color: ${(props) => {
    const [row, col] = props.coords;
    //even-numbered rows will start with black boxes and alternate
    //odd-numbered cells will start with white boxes and alternate
    if (row % 2) {
      if (col % 2) return 'black';
    } else {
      if (!(col % 2)) return 'black';
    }
  }};
`;

const Piece = styled.div`
  width: 50%;
  height: 50%;
  border-radius: ${(props) => (props.pieceShape === 'circle' ? '100%' : '0%')};
  border: 1px solid gray;
  background-color: ${(props) => props.background};
`;

function Box({ coords, boxState }) {
  const { piece, pieceShape } = boxState;

  return (
    <BoxDiv coords={coords}>
      {piece !== '-' ? <Piece background={piece} pieceShape={pieceShape} /> : null}
    </BoxDiv>
  );
}

export default Box;
