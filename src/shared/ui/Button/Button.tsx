import React from 'react';
import styles from './Button.module.scss';
import type { ButtonProps } from './types';
import { Link } from 'react-scroll';

const Button = ({
  isLink = false,
  onClick,
  type = 'button',
  disabled = false,
  text,
}: ButtonProps) => {
  return isLink ? (
    <Link
      className={styles.button_link}
      to={'contacts'}
      smooth={'easeInOutCubic'}
      duration={1000}
      spy={true}
      containerId="main"
    >
      Оставить заявку
    </Link>
  ) : (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
