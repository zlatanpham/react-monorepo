import React from 'react';
import { render } from '@testing-library/react';
import { Line } from '../Line';
import 'jest-styled-components';

describe('<Line/>', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Line thickness="thick" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
