import React from 'react';
import styles from './Info.module.scss';
import type { InfoProps } from './types';
import { SectionTitle } from '../../shared';
import Carousel from '../Carousel';
import { Link } from 'react-scroll';

const Info = (props: InfoProps) => {
  return (
    <div className={styles.container}>
      <SectionTitle
        title="Пока конкуренты тратят бюджет на баннеры, ваш бренд занимает целый
        фасад — и его видит весь город"
      />
      <div className={styles.wrapper}>
        <div className={styles.text_wrapper}>
          <p>
            Малые форматы теряются в городском шуме. Аудитория пролистывает
            диджитал. Телевидение дорого и размывает фокус.
          </p>
          <p>
            <b>Брандмауэр</b> — это единственный рекламный носитель, мимо
            которого физически невозможно пройти не заметив.
          </p>
          <ul className={styles.list}>
            <li>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="12" y2="14" />
                <line x1="16" y1="14" x2="16" y2="14" />
                <line x1="8" y1="18" x2="12" y2="18" />
                <line x1="16" y1="18" x2="16" y2="18" />
              </svg>
              Брандмауэры и торцы зданий от 200 м²
            </li>
            <li>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              50 000+ контактов с аудиторией в сутки на проходных локациях
            </li>
            <li>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Согласование с администрацией без вашего участия
            </li>
            <li>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Дизайн и производство для экстремальных условий
            </li>
            <li>
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Гарантия сохранности на весь период
            </li>
          </ul>
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
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Info;
