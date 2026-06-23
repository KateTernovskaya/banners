import React from 'react';
import type { IconProps } from './types';
import styles from './Icon.module.scss';
import IconSvg from '../../assets/icons/icons-sprite.svg';

const Icon = ({ iconId, viewBox, width, height, className }: IconProps) => {
  return (
    <svg
      className={className || styles.icon}
      width={width ? `${width}px` : '24px'}
      height={height ? `${height}px` : '24px'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`${IconSvg}#${iconId}`} />
    </svg>
  );
};

export default Icon;
