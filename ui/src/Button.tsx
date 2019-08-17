import React from 'react';
import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

const Container = styled.div`
  background-color: red;
  padding: 20px;
`;

export const Button: React.FunctionComponent<any> = ({
  children,
  className,
}) => {
  return (
    <Container>
      <AntdButton type="primary" className={className}>
        {children}
      </AntdButton>
    </Container>
  );
};
