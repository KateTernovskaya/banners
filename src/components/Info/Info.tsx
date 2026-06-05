import React from 'react';
import styles from './Info.module.scss';
import type { InfoProps } from './types';

const Info = (props: InfoProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.text_wrapper}>
        <h1 className={styles.title}>
          Размещение наружной рекламы в Нижневартовске
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
          amet asperiores corporis, cumque dolorum eius eligendi enim ex
          excepturi fuga incidunt nam non odio perspiciatis quae qui quos
          repudiandae sapiente sed similique, sint temporibus ullam vitae
          voluptatibus? Atque, doloribus!
        </p>
      </div>

      <div>мб картинка</div>
    </div>
  );
};

export default Info;
