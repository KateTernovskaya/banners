import React from 'react';

export type ServicesCardProps = {
  name: string;
  svg: () => React.JSX.Element;
  description: string;
  onClick: () => void;
};
