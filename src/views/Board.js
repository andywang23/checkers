import React, { useReducer } from 'react';
import generateBoardState, { fillPieces } from '../utils/boardGenerator';
import styled from 'styled-components';
import Box from '../Components/Box';

const BoardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.dimensions}, auto);
  grid-template-rows: repeat(${(props) => props.dimensions}, auto);
  width: 800px;
  height: 800px;
`;

const actionTypes = {
  changeColor: 'changeColor',
};

const gameStateReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.changeColor:

    default:
      return state;
  }
};

export default function Board({ dimensions, pieceColors, pieceShape }) {
  const initialState = {
    boardState: fillPieces(generateBoardState(dimensions), pieceColors),
    selectedPiece: null,
  };

  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  return (
    <BoardDiv dimensions={dimensions}>
      {gameState.boardState.map((row, rowIdx) => {
        return row.map((col, colIdx) => {
          return (
            <Box
              key={`${rowIdx}-${colIdx}`}
              coords={[rowIdx, colIdx]}
              piece={gameState.boardState[rowIdx][colIdx].piece}
            />
          );
        });
      })}
    </BoardDiv>
  );
}
