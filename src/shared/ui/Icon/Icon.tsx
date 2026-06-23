import React from 'react';
import type { IconProps } from './types';
import IconSvg from '../../assets/icons/icons-sprite.svg';

const Icon = ({ iconId, viewBox, width, height, fill }: IconProps) => {
  return (
    <svg
      width={width || '24px'}
      height={height || '24px'}
      viewBox={viewBox || '0 0 24 24'}
      fill={fill || 'rgb(6 49 131 / 50%)'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${IconSvg}#${iconId}`} />
    </svg>
  );
};

export default Icon;
