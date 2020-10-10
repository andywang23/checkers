import React, { useReducer } from 'react';
import generateBoardState, { fillPieces } from '../utils/boardGenerator';
import styled from 'styled-components';
import Row from '../Components/Row';
import { cloneDeep } from 'lodash';
import actionTypes from '../utils/actions.js';

const BoardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.dimensions}, auto);
  grid-template-rows: repeat(${(props) => props.dimensions}, auto);
  width: 800px;
  height: 800px;
`;

const gameStateReducer = (state, action) => {
  let newBoard, row, col;
  if (action.payload && action.payload.coords) [row, col] = action.payload.coords;

  switch (action.type) {
    case actionTypes.selectPiece:
      newBoard = cloneDeep(state.boardState);
      if (newBoard[row] && newBoard[row][col]) {
        newBoard[row][col].isSelected = !state.boardState[row][col].isSelected;
      }

      return {
        ...state,
        selectedPieceCoords: [row, col],
        boardState: newBoard,
      };

    default:
      return state;
  }
};

export default function Board({ dimensions, pieceColors, pieceShape }) {
  const initialState = {
    boardState: fillPieces(generateBoardState(dimensions), pieceColors, pieceShape),
    selectedPieceCoords: [],
  };
  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  return (
    <BoardDiv dimensions={dimensions}>
      {gameState.boardState.map((row, rowIdx) => (
        <Row dimensions={dimensions} rowIdx={rowIdx} rowArr={row} dispatch={dispatch} />
      ))}
    </BoardDiv>
  );
}
