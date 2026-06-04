import React from 'react';
import styles from './Header.module.scss';
import { animateScroll as scroll } from 'react-scroll';
import MobileMenu from '../MobileMenu';
import DesktopMenu from '../DesktopMenu';

const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {/*<Logo fill={'rgba(6,49,131,0.5)'} />*/}
          <a
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            НАЗВАНИЕ
          </a>
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </div>
      </div>
    </header>
  );
};
export default Header;
