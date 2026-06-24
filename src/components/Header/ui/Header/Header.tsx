import React from 'react';
import styles from './Header.module.scss';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import Logo from '../../../Logo';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Logo width={100} />
        <nav className={styles.menu_wrapper}>
          <Menu />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
