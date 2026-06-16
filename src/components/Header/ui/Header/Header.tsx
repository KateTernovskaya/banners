import React from 'react';
import styles from './Header.module.scss';
import { animateScroll as scroll, Link } from 'react-scroll';
import Menu from '../Menu';

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
        {/*{width < breakpoint ? <MobileMenu /> : <DesktopMenu />}*/}
      </div>
    </header>
  );
};
export default Header;
