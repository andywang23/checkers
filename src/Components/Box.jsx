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
  border-radius: 100%;
  border: 1px solid gray;
  background-color: ${(props) => props.background};
`;

function Box({ coords, piece }) {
  return <BoxDiv coords={coords}>{piece !== '-' ? <Piece background={piece} /> : null}</BoxDiv>;
}

export default Box;
