import React from 'react';
import Box from './Box';

function Row({ rowIdx, rowArr }) {
  return (
    <>
      {rowArr.map((box, colIdx) => (
        <Box key={`${rowIdx}-${colIdx}`} coords={[rowIdx, colIdx]} boxState={box} />
      ))}
    </>
  );
}

export default Row;
