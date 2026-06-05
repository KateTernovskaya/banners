import React from 'react';
import styles from './Contacts.module.scss';
import type { ContactsProps } from './types';
import { SectionTitle } from '../../shared';

const Contacts = (props: ContactsProps) => {
  return (
    <div id={'contacts'}>
      <SectionTitle title="Контакты" />
      <div>
        Форма для того чтобы клиент мог заказать звонок, или просто связаться по
        почте
      </div>
      <div>
        Можно добавить ссылки для связи в мессенджера (макс, телега и т.д)
      </div>
    </div>
  );
};

export default Contacts;
