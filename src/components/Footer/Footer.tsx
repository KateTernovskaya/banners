import React from 'react';
import styles from './Footer.module.scss';
import type { FooterProps } from './types';
import { Link } from 'react-scroll';

const Footer = (props: FooterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Рекламное агентство полного цикла — наружная реклама в ХМАО
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.accent}>Телефон:</span>
          <span>+7 945 567 67 66</span>
        </li>
        <li className={styles.item}>
          <span className={styles.accent}>Email:</span>
          <span>info@gmail.com</span>
        </li>
        <li className={styles.item}>
          <span className={styles.accent}>Адрес:</span>
          <span>г. Нижневартовск, ул. Нефтяников, д 2</span>
        </li>
        <li className={styles.item}>
          <span className={styles.accent}>Часы работы:</span>
          <span>09.00 - 18.00</span>
        </li>
        <li className={styles.item}>
          <Link
            className={styles.button}
            to={'contacts'}
            smooth={'easeInOutCubic'}
            duration={500}
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
