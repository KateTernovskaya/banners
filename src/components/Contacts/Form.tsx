import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contacts.module.scss';
import Button from '../../shared/ui/Button';

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>(
    'idle'
  );

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');

  const [phoneTouched, setPhoneTouched] = useState(false);

  const isValidPhone = (value: string): boolean => {
    const digits = value.replace(/\D/g, '');
    return (
      digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))
    );
  };

  const phoneError = phoneTouched && !isValidPhone(phone);

  const isButtonDisabled =
    name.trim().length < 2 ||
    !phone.trim() ||
    phoneError ||
    status === 'sending';

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!isValidPhone(phone)) {
      setPhoneTouched(true);
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(
        'service_2xom3mi',
        'template_haveg7p',
        formRef.current!,
        '03hbw1S-li1coN6Xv'
      )
      .then(
        () => {
          setStatus('ok');
          formRef.current?.reset();
          setName('');
          setPhone('');
          setQuestion('');
        },
        (error) => {
          setStatus('error');
          console.error('Ошибка EmailJS:', error.text);
        }
      );
  };

  return (
    <form ref={formRef} className={styles.container} onSubmit={sendEmail}>
      <div className={styles.field_block}>
        <div>
          <span>Имя</span>
          <span className={styles.requared}>*</span>
        </div>

        <input
          className={styles.field}
          type="text"
          name="user_name"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.field_block}>
        <div>
          <span>Телефон</span>
          <span className={styles.requared}>*</span>
        </div>
        <input
          className={styles.field}
          type="tel"
          name="user_phone"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => {
            const filtered = e.target.value.replace(/[^\d+\-() ]/g, '');
            setPhone(filtered);
          }}
          onBlur={() => setPhoneTouched(true)}
          required
        />
      </div>
      <div className={styles.field_block}>
        <span>Вопрос</span>
        <textarea
          className={styles.field}
          name="message"
          placeholder="Опишите ваш вопрос..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <input
        type={'hidden'}
        name={'date'}
        value={new Date().toLocaleDateString('ru-RU')}
      />
      <p
        className={
          status === 'ok'
            ? styles.sucsess
            : status === 'error'
              ? styles.error
              : styles.info
        }
      >
        {status === 'error' && 'Ошибка. Попробуйте позже.'}
        {phoneError && 'Номер телефона введен неверно.'}
        {status === 'ok' && 'Сообщение отправлено!'}
      </p>
      <Button
        type="submit"
        disabled={isButtonDisabled}
        text={status === 'sending' ? 'Отправка...' : 'Отправить'}
      />
    </form>
  );
};

export default Form;
