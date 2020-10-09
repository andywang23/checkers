interface cellTemplate {
  piece: '-' | 'red' | 'black';
  isSelected: boolean;
  isAvailableMove: boolean;
}
const cellTemplate = { piece: '-', isSelected: false, isAvailableMove: false };

export const generateBoardState = (dimensions: number) => {
  //create matrix of equal number of rows and columns

  const board = [...Array(dimensions)].map((el) =>
    [...Array(dimensions)].map((cell) => {
      return { ...cellTemplate };
    })
  );
  return board;
};

console.log(generateBoardState(4));
