import React from 'react';
import styles from './Contacts.module.scss';
import { Icon, SectionTitle } from '../../shared';
import Form from './Form';

const Contacts = () => {
  return (
    <div id="contacts">
      <SectionTitle title="Контакты" />
      <Form />
      <div className={styles.social}>
        <a href="tel:+79222552731" className={styles.social_item}>
          <Icon iconId="phone" className={styles.icon_telegram} />
        </a>
        <a href="mailto:562731denis@gmail.com" className={styles.social_item}>
          <Icon iconId="gmail" className={styles.icon} />
        </a>
        <a
          href="https://t.me/DenisVasilkov"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social_item}
        >
          <Icon iconId="telegram" className={styles.icon_telegram} />
        </a>
        <a
          href="https://max.ru/u/f9LHodD0cOLbszFH8OUnMCOfyG_RVvPq6adZ8Mfzj2GqT-AWq3gvakDGxQo"
          className={styles.social_item}
        >
          <Icon iconId="max" className={styles.icon_telegram} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
