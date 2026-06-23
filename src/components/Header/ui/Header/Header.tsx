import React from 'react';
import styles from './Header.module.scss';
import { animateScroll as scroll } from 'react-scroll';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        {/*<Logo fill={'rgba(6,49,131,0.5)'} />*/}
        <a
          onClick={() => {
            scroll.scrollTo(0, {
              duration: 500,
              smooth: 'easeInOutCubic',
              containerId: 'main',
            });
          }}
        >
          НАЗВАНИЕ
        </a>
        <nav className={styles.menu_wrapper}>
          <Menu />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
