import React from 'react';
import { Button as AntdButton } from 'antd';

export const Button: React.FunctionComponent<any> = ({
  children,
  className,
}) => {
  return (
    <AntdButton type="primary" className={className}>
      {children}
    </AntdButton>
  );
};
