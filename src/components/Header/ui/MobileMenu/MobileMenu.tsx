import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import styles from './MobileMenu.module.scss';
import { Icon } from '../../../../shared';
import { createPortal } from 'react-dom';

const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const body = document.getElementById('main');
    if (!body) return;

    if (menuIsOpen) {
      body.style.overflow = 'hidden';
      body.style.scrollbarGutter = 'stable';
      return;
    }
    body.style.overflow = 'scroll';
  }, [menuIsOpen]);

  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return createPortal(
    <nav className={styles.mobile_menu}>
      <button onClick={onBurgerBtnClick} className={styles.button}>
        {menuIsOpen ? (
          <Icon className={styles.close_button} iconId="close" />
        ) : (
          <Icon iconId="burger" width={36} height={36} />
        )}
      </button>

      <div
        className={`${styles.mobile_popup} ${menuIsOpen ? styles.open : ''}`}
        onClick={closeMenu}
      >
        <Menu onClick={closeMenu} />
      </div>
    </nav>,
    document.body
  );
};

export default MobileMenu;
