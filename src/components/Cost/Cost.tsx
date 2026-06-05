import React from 'react';
import styles from './Cost.module.scss';
import type { CostProps } from './types';
import { SectionTitle } from '../../shared';

const Cost = (props: CostProps) => {
  return (
    <div id={'cost'}>
      <SectionTitle title="Цены" />
      <p>Мб таблица</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        dolores eos est quo voluptatem. Accusantium consectetur dignissimos
        dolore dolorem eaque esse illum, libero minima mollitia natus nisi porro
        praesentium recusandae sunt totam vero vitae voluptas voluptates? Dolore
        error fuga omnis?
      </p>
    </div>
  );
};

export default Cost;
