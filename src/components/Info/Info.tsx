import React from 'react';
import styles from './Info.module.scss';
import type { InfoProps } from './types';
import { Icon, SectionTitle } from '../../shared';
import Carousel from '../Carousel';
import { Link } from 'react-scroll';
import Button from '../../shared/ui/Button';

const Info = (props: InfoProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <SectionTitle
          title="Пока конкуренты тратят бюджет на баннеры, ваш бренд занимает целый
        фасад — и его видит весь город"
        />
        <p>
          Малые форматы теряются в городском шуме. Аудитория пролистывает
          диджитал. Телевидение дорого и размывает фокус.
        </p>
        <p>
          <b>Брандмауэр</b> — это единственный рекламный носитель, мимо которого
          физически невозможно пройти не заметив.
        </p>
        <ul className={styles.list}>
          <li>
            <Icon iconId="building_mini" />
            Брандмауэры и торцы зданий от 200 м²
          </li>
          <li>
            <Icon iconId="people" />
            50 000+ контактов с аудиторией в сутки на проходных локациях
          </li>
          <li>
            <Icon iconId="fine" />
            Согласование с администрацией без вашего участия
          </li>
          <li>
            <Icon iconId="picture" />
            Дизайн и производство для экстремальных условий
          </li>
          <li>
            <Icon iconId="lock" />
            Гарантия сохранности на весь период
          </li>
        </ul>
        <Button isLink />
      </div>
      <Carousel />
    </div>
  );
};

export default Info;
