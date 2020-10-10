import React from 'react';
import styled from 'styled-components';
import actionTypes from '../utils/actions.js';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => {
    const [row, col] = props.coords;
    //if we are in a box that is a possible move, then set background to blue
    if (props.isAvailableMove) {
      return 'lightblue';
    }
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
  const { pieceColor, pieceShape, isSelected, isAvailableMove } = boxState;

  const handleBoxClick = () => {
    /* two scenarios: 
    1. if box has a piece inside, then handle click will dispatch selectPiece, resetAvailableMoves, setAvailableMoves actions to gameState reducer
    2. if box is denoted as an available move (i.e. if user has already selected another box with a piece inside), then clicking a box will move the selected piece to this box
    */
    if (isAvailableMove) {
      dispatch({ type: actionTypes.movePiece, payload: { coords } });
      dispatch({ type: actionTypes.resetAvailableMove });
    } else if (pieceColor !== '-') {
      dispatch({ type: actionTypes.resetSelectedPiece });
      dispatch({ type: actionTypes.resetAvailableMove, pieceColor });
      //do not set available moves if we are deselecting the current piece
      if (!isSelected) {
        dispatch({ type: actionTypes.selectPiece, payload: { coords, pieceColor } });
        dispatch({ type: actionTypes.setAvailableMove, payload: { coords, pieceColor } });
      }
    }
  };

  return (
    <BoxDiv coords={coords} isAvailableMove={isAvailableMove} onClick={handleBoxClick}>
      {pieceColor !== '-' ? (
        <Piece background={pieceColor} pieceShape={pieceShape} isSelected={isSelected} />
      ) : null}
    </BoxDiv>
  );
}

export default Box;
