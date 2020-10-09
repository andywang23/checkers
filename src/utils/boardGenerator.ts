export interface cellTemplate {
  piece: string;
  coords: number[];
  isSelected: boolean;
  isAvailableMove: boolean;
}
const cellTemplate = { piece: '-', isSelected: false, isAvailableMove: false, coords: [0, 0] };

const generateBoardState = (dimensions: number): cellTemplate[][] => {
  //create matrix of equal number of rows and columns
  const board = [...Array(dimensions)].map((el) =>
    [...Array(dimensions)].map((cell) => {
      return { ...cellTemplate };
    })
  );
  return board;
};

export const fillPieces = (board: cellTemplate[][]): cellTemplate[][] => {
  for (let i = 0; i < 2; i += 1) {
    const row = board[i];
    board[i] = row.map((cell) => {
      return { ...cell, piece: 'red' };
    });
  }

  for (let i = board.length - 1; i >= board.length - 2; i -= 1) {
    const row = board[i];
    board[i] = row.map((cell) => {
      return { ...cell, piece: 'black' };
    });
  }

  return board;
};

export default generateBoardState;
