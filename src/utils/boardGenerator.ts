export interface cellTemplate {
  pieceColor: string;
  pieceShape: string;
  coords: number[];
  isSelected: boolean;
  isAvailableMove: boolean;
}
const cellTemplate = {
  pieceColor: '-',
  pieceShape: '-',
  isSelected: false,
  isAvailableMove: false,
  coords: [0, 0],
};

const generateBoardState = (dimensions: number): cellTemplate[][] => {
  //create matrix of equal number of rows and columns
  const board = [...Array(dimensions)].map((el) =>
    [...Array(dimensions)].map((cell) => {
      return { ...cellTemplate };
    })
  );
  return board;
};

export const fillPieces = (
  board: cellTemplate[][],
  colorArr: string[],
  pieceShape: string
): cellTemplate[][] => {
  const [color1, color2] = colorArr;
  for (let i = 0; i < 2; i += 1) {
    const row = board[i];
    board[i] = row.map((cell) => {
      return { ...cell, pieceColor: color1, pieceShape };
    });
  }

  for (let i = board.length - 1; i >= board.length - 2; i -= 1) {
    const row = board[i];
    board[i] = row.map((cell) => {
      return { ...cell, pieceColor: color2, pieceShape };
    });
  }

  return board;
};

export default generateBoardState;
