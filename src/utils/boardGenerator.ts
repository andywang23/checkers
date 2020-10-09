export interface cellTemplate {
  piece: string;
  coords: number[];
  isSelected: boolean;
  isAvailableMove: boolean;
}
const cellTemplate = { piece: '-', isSelected: false, isAvailableMove: false, coords: [0, 0] };

export const generateBoardState = (dimensions: number): cellTemplate[][] => {
  //create matrix of equal number of rows and columns
  const board = [...Array(dimensions)].map((el) =>
    [...Array(dimensions)].map((cell) => {
      return { ...cellTemplate };
    })
  );
  return board;
};
