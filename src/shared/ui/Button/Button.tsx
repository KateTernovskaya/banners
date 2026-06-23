import React from 'react';
import styles from './Button.module.scss';
import type { ButtonProps } from './types';
import { Link } from 'react-scroll';

const Button = ({ isLink = false }: ButtonProps) => {
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
    <div>"Button"</div>
  );
};

export default Button;
