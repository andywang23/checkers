import React, { useReducer } from 'react';
import boardGenerator, { cellTemplate } from '../utils/boardGenerator';

interface BoardProps {
  dimensions: number;
}

interface initialState {
  boardState: cellTemplate[][];
  currPlayer: string;
  selectedPiece: cellTemplate;
}

export default function Board<BoardProps>({ dimensions }) {
  const [gameState, dispatch] = useReducer(gameStateReducer, boardGenerator(dimensions));

  return <div></div>;
}
