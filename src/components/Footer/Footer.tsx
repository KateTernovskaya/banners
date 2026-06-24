import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-scroll';
import Logo from '../Logo';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={150} />
        <div className={styles.title}>
          Рекламное агентство полного цикла — наружная реклама в ХМАО
        </div>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.accent}>Телефон:</span>
          <a href="tel:+79222552731">+7 922 255 27 31</a>
        </li>
        <li className={styles.item}>
          <span className={styles.accent}>Email:</span>
          <a href="mailto:562731denis@gmail.com" className={styles.email}>
            562731denis@gmail.com
          </a>
        </li>
        <li className={styles.item}>
          <span className={styles.accent}>Часы работы:</span>
          <span>09.00ч - 18.00ч</span>
        </li>
        <li className={styles.item}>
          <Link
            className={styles.button}
            to={'contacts'}
            smooth={'easeInOutCubic'}
            duration={1000}
            spy={true}
            containerId="main"
          >
            Оставить заявку
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
