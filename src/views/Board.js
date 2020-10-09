import React, { useReducer } from 'react';
import generateBoardState, { cellTemplate } from '../utils/boardGenerator';

const gameStateReducer = (state, action) => {};

export default function Board({ dimensions }) {
  const initialState = {
    boardState: generateBoardState(dimensions),
    currPlayer: 'black',
    selectedPiece: null,
  };

  const [gameState, dispatch] = useReducer(gameStateReducer, initialState);

  return <div></div>;
}
