import React, { useReducer } from 'react';
import generateBoardState from '../utils/boardGenerator';
import styled from 'styled-components';
import Box from '../Components/Box';

const BoardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.dimensions}, auto);
  grid-template-rows: repeat(${(props) => props.dimensions}, auto);
  width: 800px;
  height: 800px;
`;

const gameStateReducer = (state, action) => {
  return state;
};

export default function Board({ dimensions }) {
  console.log(generateBoardState(dimensions));
  const initialState = {
    boardState: generateBoardState(dimensions),
    currPlayer: 'black',
    selectedPiece: null,
  };

  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  let blackBackground = true;

  return (
    <BoardDiv dimensions={dimensions}>
      {gameState.boardState.map((col, colIdx) =>
        col.map((row, rowIdx) => {
          blackBackground = !blackBackground;
          return <Box key={`${colIdx}-${rowIdx}`} blackBackground={blackBackground} />;
        })
      )}
    </BoardDiv>
  );
}
