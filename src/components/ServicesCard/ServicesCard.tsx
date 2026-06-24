import React from 'react';
import styles from './ServicesCard.module.scss';
import type { ServicesCardProps } from './types';

const ServicesCard = ({
  svg,
  name,
  description,
  onClick,
}: ServicesCardProps) => {
  const Icon = svg;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Icon />
        <h3 className={styles.text}>{name}</h3>
      </div>

      <p>{description}</p>

      <button className={styles.button} onClick={onClick}>
        Подробнее
      </button>
    </div>
  );
};

export default ServicesCard;
