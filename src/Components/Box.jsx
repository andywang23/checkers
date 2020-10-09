import React from 'react';
import styled from 'styled-components';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: ${(props) => (props.blackBackground ? 'black' : 'white')};
`;

const BlackPiece = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background-color: black;
`;

const RedPiece = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background-color: red;
`;

function Box({ blackBackground }) {
  return <BoxDiv blackBackground={blackBackground}></BoxDiv>;
}

export default Box;
