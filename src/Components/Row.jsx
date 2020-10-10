import React from 'react';
import Box from './Box';

function Row({ rowIdx, rowArr, dispatch }) {
  return (
    <>
      {rowArr.map((box, colIdx) => (
        <Box
          key={`${rowIdx}-${colIdx}`}
          coords={[rowIdx, colIdx]}
          boxState={box}
          dispatch={dispatch}
        />
      ))}
    </>
  );
}

export default Row;
