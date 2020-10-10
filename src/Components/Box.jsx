import React from 'react';
import styled from 'styled-components';
import actionTypes from '../utils/actions.js';

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
  border: ${(props) => (props.isSelected ? '3px solid yellow' : '3px solid gray')};
  background-color: ${(props) => props.background};
`;

function Box({ coords, boxState, dispatch }) {
  const { piece, pieceShape, isSelected, isAvailableMove } = boxState;

  const handleBoxClick = () => {
    /* two scenarios: 
    1. if box has a piece inside, then handle click will dispatch selectPiece action to gameState reducer
    2. if box is denoted as an available move (i.e. if user has already selected a box), then clicking a box will move the selected piece to this box
    */
    if (isAvailableMove) {
      //placeholder for now
    } else dispatch({ type: actionTypes.selectPiece, payload: { coords } });
  };

  return (
    <BoxDiv coords={coords} onClick={handleBoxClick}>
      {piece !== '-' ? (
        <Piece background={piece} pieceShape={pieceShape} isSelected={isSelected} />
      ) : null}
    </BoxDiv>
  );
}

export default Box;
