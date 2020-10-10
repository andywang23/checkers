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
  const [oldRow, oldCol] = state.selectedPieceCoords;
  if (action.payload && action.payload.coords) [row, col] = action.payload.coords;

  switch (action.type) {
    case actionTypes.selectPiece:
      newBoard = cloneDeep(state.boardState);
      //only one box can be selected at once
      //toggle isSelected on both the current selected box and the previous selected cell
      newBoard[row][col].isSelected = !state.boardState[row][col].isSelected;
      if (state.selectedPieceCoords.length > 0) {
        newBoard[oldRow][oldCol].isSelected = !state.boardState[oldRow][oldCol].isSelected;
      }

      return {
        ...state,
        boardState: newBoard,
        selectedPieceCoords: [row, col],
      };

    case actionTypes.setAvailableMove:
      //action payload will include coord and piece color of current selected box
      //first determine if we are going from bottom to top or vice versa based on piece color
      //then calculate available move coords
      newBoard = cloneDeep(state.boardState);
      const { piece } = action.payload.piece;
      const startingPosition = state.playerColorStartingPosition[piece];

      const [leftDiagRow, leftDiagCol] =
        piece === 'bottom' ? [row - 1, col - 1] : [row + 1, col - 1];

      const [rightDiagRow, rightDiagCol] =
        piece === 'bottom' ? [row - 1, col + 1] : [row + 1, col + 1];

      if (newBoard[leftDiagRow] && newBoard[leftDiagRow][leftDiagCol])
        newBoard[leftDiagRow][leftDiagCol].isAvailableMove = !state.boardState[leftDiagRow][
          leftDiagCol
        ].isAvailableMove;

      if (newBoard[rightDiagRow] && newBoard[rightDiagRow][rightDiagCol])
        newBoard[rightDiagRow][rightDiagCol].isAvailableMove = !state.boardState[rightDiagRow][
          rightDiagCol
        ].isAvailableMove;

      return {
        ...state,
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
    lastSelectedPieceCoords: [],
    playerColorStartingPosition: { [pieceColors[0]]: 'top', [pieceColors[1]]: 'bottom' },
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
