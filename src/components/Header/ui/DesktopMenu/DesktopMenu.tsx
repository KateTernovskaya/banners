import React from 'react';
import styles from './DesktopMenu.module.scss';
import Menu from '../Menu';

const DesktopMenu = () => {
  return (
    <nav className={styles.container}>
      <Menu />
    </nav>
  );
};

export default DesktopMenu;
