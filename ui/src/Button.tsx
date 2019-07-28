import React from 'react';

export const Button: React.FunctionComponent<any> = ({
  children,
  className,
}) => {
  return <button className={className + ' test hello'}>{children}</button>;
};
