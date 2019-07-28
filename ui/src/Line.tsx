import React from 'react';

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
  return <div style={{ fontWeight: weight[thickness] }}>Line</div>;
};
