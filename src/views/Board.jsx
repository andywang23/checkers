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
  width: 950px;
  height: 950px;
`;

const gameStateReducer = (state, action) => {
  let newBoard, row, col, oldRow, oldCol, pieceColor, pieceShape;
  const currPlayerColorIdx = state.currPlayerColorIdx;
  const pieceColors = state.pieceColors;
  if (state.selectedPieceCoords) [oldRow, oldCol] = state.selectedPieceCoords;
  if (action.payload && action.payload.coords) [row, col] = action.payload.coords;
  if (action.payload && action.payload.pieceColor) pieceColor = action.payload.pieceColor;

  switch (action.type) {
    case actionTypes.selectPiece:
      //if piece selected does not belong to current player, don't do anything
      if (pieceColors[currPlayerColorIdx] !== pieceColor) {
        return state;
      }
      newBoard = cloneDeep(state.boardState);
      newBoard[row][col].isSelected = !state.boardState[row][col].isSelected;

      return {
        ...state,
        boardState: newBoard,
        selectedPieceCoords: [row, col],
      };

    case actionTypes.setAvailableMove:
      //if piece selected does not belong to current player, don't do anything
      if (pieceColors[currPlayerColorIdx] !== pieceColor) {
        return state;
      }

      //responsible for highlighting cells we can move a piece to
      //action payload will include coord and piece color of current selected box
      //first determine if we are going from bottom to top or vice versa based on piece color
      //then calculate available move coords (check if coords exist and if there exists another piece already)
      newBoard = cloneDeep(state.boardState);

      const startingPosition = state.playerColorStartingPosition[pieceColor];

      const [leftDiagRow, leftDiagCol] =
        startingPosition === 'bottom' ? [row - 1, col - 1] : [row + 1, col - 1];

      const [rightDiagRow, rightDiagCol] =
        startingPosition === 'bottom' ? [row - 1, col + 1] : [row + 1, col + 1];

      console.log(newBoard[leftDiagRow][leftDiagCol].pieceColor);
      if (
        newBoard[leftDiagRow] &&
        newBoard[leftDiagRow][leftDiagCol] &&
        newBoard[leftDiagRow][leftDiagCol].pieceColor === '-'
      ) {
        newBoard[leftDiagRow][leftDiagCol].isAvailableMove = !state.boardState[leftDiagRow][
          leftDiagCol
        ].isAvailableMove;
      }

      if (
        newBoard[rightDiagRow] &&
        newBoard[rightDiagRow][rightDiagCol] &&
        newBoard[rightDiagRow][rightDiagCol].pieceColor === '-'
      ) {
        newBoard[rightDiagRow][rightDiagCol].isAvailableMove = !state.boardState[rightDiagRow][
          rightDiagCol
        ].isAvailableMove;
      }

      return {
        ...state,
        boardState: newBoard,
      };

    case actionTypes.resetSelectedPiece:
      //before we set new selected, we need to clear out old selected
      //todo: currently this takes O(n) time, should refactor so it's O(1)
      return {
        ...state,
        boardState: state.boardState.map((row) =>
          row.map((col) => {
            return {
              ...col,
              isSelected: false,
            };
          })
        ),
      };

    case actionTypes.resetAvailableMove:
      //before we set new available moves, we need to clear out all the old ones
      //todo: currently this takes O(n) time, should refactor so it's O(1)
      return {
        ...state,
        boardState: state.boardState.map((row) =>
          row.map((col) => {
            return {
              ...col,
              isAvailableMove: false,
            };
          })
        ),
      };

    case actionTypes.movePiece:
      //responsible for actually moving piece after selecting
      //payload will include where we want to move the currently selected piece to
      //pull current selected coords to empty that box and pull the piece color
      //switch player once move has succeeded
      newBoard = cloneDeep(state.boardState);

      pieceColor = state.boardState[oldRow][oldCol].pieceColor;
      pieceShape = state.boardState[oldRow][oldCol].pieceShape;

      newBoard[oldRow][oldCol].pieceShape = '-';
      newBoard[oldRow][oldCol].pieceColor = '-';
      newBoard[oldRow][oldCol].isSelected = false;
      newBoard[row][col].pieceColor = pieceColor;
      newBoard[row][col].pieceShape = pieceShape;

      return {
        ...state,
        boardState: newBoard,
        selectedPieceCoords: [],
        currPlayerColorIdx: currPlayerColorIdx === 0 ? 1 : 0,
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
    pieceColors,
    currPlayerColorIdx: 1,
  };
  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  return (
    <>
      <p>Current Player is: {gameState.pieceColors[gameState.currPlayerColorIdx].toUpperCase()}</p>
      <BoardDiv dimensions={dimensions}>
        {gameState.boardState.map((row, rowIdx) => (
          <Row
            key={rowIdx}
            dimensions={dimensions}
            rowIdx={rowIdx}
            rowArr={row}
            dispatch={dispatch}
          />
        ))}
      </BoardDiv>
    </>
  );
}
