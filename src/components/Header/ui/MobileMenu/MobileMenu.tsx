import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import styles from './MobileMenu.module.scss';

const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;

    if (menuIsOpen) {
      body.style.overflow = 'hidden';
      return;
    }
    body.style.overflow = '';
  }, [menuIsOpen]);

  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <nav className={styles.mobileMenu}>
      <button
        className={`${styles.burgerButton} ${menuIsOpen ? styles.open : ''}`}
        onClick={onBurgerBtnClick}
      >
        <span></span>
      </button>

      <div
        className={`${styles.mobileMenuPopup} ${menuIsOpen ? styles.open : ''}`}
        onClick={closeMenu}
      >
        <Menu onClick={closeMenu} />
      </div>
    </nav>
  );
};

export default MobileMenu;
