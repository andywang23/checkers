import React, { useReducer } from 'react';
import generateBoardState, { fillPieces } from '../utils/boardGenerator';
import styled from 'styled-components';
import Box from '../Components/Box';
import RadioInput from '../Components/RadioInput';

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
      return;

    default:
      return state;
  }

  return state;
};

export default function Board({ dimensions, pieceColors }) {
  const initialState = {
    boardState: fillPieces(generateBoardState(dimensions), pieceColors),
    selectedPiece: null,
  };

  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  let blackBackground = true;

  return (
    <BoardDiv dimensions={dimensions}>
      {gameState.boardState.map((col, colIdx) =>
        col.map((row, rowIdx) => {
          blackBackground = !blackBackground;
          return (
            <Box
              key={`${colIdx}-${rowIdx}`}
              blackBackground={blackBackground}
              coords={[colIdx, rowIdx]}
              piece={gameState.boardState[colIdx][rowIdx].piece}
            />
          );
        })
      )}
    </BoardDiv>
  );
}
