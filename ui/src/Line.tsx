import React from 'react';
import styled from 'styled-components';
// ${tw`bg-grey`};
// import tw from 'tailwind.macro';

const Container = styled.div`
  height: 200px;
  background-color: red;
`;

type LineThickness = 'thin' | 'base' | 'thick';
interface LineProps {
  thickness: LineThickness;
}

export const Line: React.FunctionComponent<LineProps> = ({ thickness }) => {
  const weight: { [k in LineThickness]: number } = {
    base: 400,
    thick: 900,
    thin: 500,
  };
  return <Container style={{ fontWeight: weight[thickness] }}>Line</Container>;
};
