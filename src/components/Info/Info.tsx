import React from 'react';
import styles from './Info.module.scss';
import type { InfoProps } from './types';
import { SectionTitle } from '../../shared';

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
          <ul>
            <li>Брандмауэры и торцы зданий от 200 м²</li>
            <li>
              50 000+ контактов с аудиторией в сутки на проходных локациях
            </li>
            <li>Согласование с администрацией без вашего участия</li>
            <li>Дизайн и производство для экстремальных условий</li>
            <li>Гарантия сохранности на весь период</li>
          </ul>
        </div>
        <div></div>
      </div>

      <div>мб картинка</div>
    </div>
  );
};

export default Info;
