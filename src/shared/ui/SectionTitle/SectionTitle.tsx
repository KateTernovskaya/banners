import React from 'react';
import styles from './SectionTitle.module.scss';
import type { SectionTitleProps } from './types';

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default SectionTitle;
