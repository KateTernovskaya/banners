import React from 'react';
import styles from './Services.module.scss';
import type { ServicesProps } from './types';
import { SectionTitle } from '../../shared';

const Services = (props: ServicesProps) => {
  return (
    <div id={'services'}>
      <SectionTitle title="Услуги" />

      <div className={styles.wrapper}>
        <div className={styles.service}>Услуга 1</div>
        <div className={styles.service}>Услуга 1</div>
        <div className={styles.service}>Услуга 1</div>
        <div className={styles.service}>Услуга 1</div>
      </div>
    </div>
  );
};

export default Services;
