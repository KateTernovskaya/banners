import React from 'react';
import styles from './Map.module.scss';
import type { MapProps } from './types';
import { SectionTitle } from '../../shared';

const Map = (props: MapProps) => {
  return (
    <div id={'map'}>
      <SectionTitle title="Посмотреть на карте" />
      <div className={styles.map}>Карта</div>
    </div>
  );
};

export default Map;
