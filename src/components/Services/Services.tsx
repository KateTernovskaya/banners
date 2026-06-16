import React from 'react';
import styles from './Services.module.scss';
import type { ServicesProps } from './types';
import { SectionTitle } from '../../shared';

import {
  BuildingIcon,
  BillboardIcon,
  PrintIcon,
  MountingIcon,
} from '../../shared/assets/icons/Icons';
import ServicesCard from '../ServicesCard';

const data = [
  {
    name: 'Размещение на брандмауэрах',
    description:
      'Брандмауэры и торцы зданий от 200 м². 50 000+ контактов в сутки, дальность видимости до 500 м. Полное согласование под ключ, дизайн и монтаж в условиях Крайнего Севера.',
    svg: BuildingIcon,
  },
  {
    name: 'Размещение на билбордах 3×6',
    description:
      'Самая широкая адресная программа билбордов в Нижневартовске. Любая локация: центр, жилые массивы, въезды в город. Подготовка адресной программы бесплатно.',
    svg: BillboardIcon,
  },
  {
    name: 'Печать рекламной продукции',
    description:
      'Широкоформатная печать, цифровая полиграфия, офсет, типография. Полный цикл под ключ: от макета до доставки. Срочная печать от 2 часов. 500+ клиентов.',
    svg: PrintIcon,
  },
  {
    name: 'Монтажные работы',
    description:
      'Высотные работы с допусками до 100 м. Монтаж брандмауэров, билбордов, вывесок, крышных установок. Полный пакет разрешений. 12 месяцев гарантии. Работаем в ХМАО.',
    svg: MountingIcon,
  },
];

const Services = (props: ServicesProps) => {
  return (
    <div id={'services'}>
      <SectionTitle title="Услуги" />

      <div className={styles.wrapper}>
        {data.map((item) => (
          <ServicesCard
            key={item.name}
            name={item.name}
            description={item.description}
            svg={item.svg}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
