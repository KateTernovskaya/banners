import React from 'react';
import styles from './WhyWe.module.scss';
import type { WhyWeProps } from './types';
import { SectionTitle } from '../../shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
  'Сбер',
  'ВТБ',
  'Альфа-Банк',
  'Т-Банк',
  'МТС',
  'Мегафон',
  'Билайн',
  'Т2',
  'Яндекс',
  'Озон',
  'Wildberries',
  'Лента',
  'Магнит',
  'Додо Пицца',
  'KFC',
  'Бургер Кинг',
  'М.Видео',
  'DNS',
  'Спортмастер',
  'Gloria Jeans',
];

const WhyWe = (props: WhyWeProps) => {
  return (
    <div id="whyWe">
      <SectionTitle title="Экспертиза, на которой строят бизнес в Югре" />
      <div className={styles.container}>
        <p className={styles.info}>
          Мы не просто продаём место на стене — мы обеспечиваем доминирование
          вашего бренда в условиях Крайнего Севера. Каждая конструкция здесь —
          это формула выживаемости: мы не печатаем, мы проектируем
          долговечность.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Цифры говорят за нас. Контакт с аудиторией обходится в 8–12 раз
            дешевле, чем в региональном ТВ, а суточный охват одной локации — от
            50 000 человек. Ваш бюджет работает на попадание, а не на
            рассеивание.
          </li>
          <li className={styles.item}>
            <b>Юридическая чистота</b> — полный пакет разрешений до монтажа. Мы
            исключаем риск штрафов и демонтажа, и это закреплено в договоре.
          </li>
          <li className={styles.item}>
            <b>Инженерный подход </b>— расчёт ветровой нагрузки по СП
            20.13330.2017, крепёж, выдерживающий морозы до −60°C. Баннер
            площадью 200 м² не сорвёт даже зимний ураган.
          </li>
          <li className={styles.item}>
            <b>Тотальный контроль</b> — аварийный выезд за 24 часа и ежемесячный
            мониторинг. Вы платите за рекламу, а не за ремонт
          </li>
        </ul>
        <p className={styles.info}>
          У нас в городе нет места неэффективной рекламе. Поэтому с нами
          работают топ-игроки рынка: от ритейла до нефтесервиса. Их выбор —
          лучший тест-драйв нашей ответственности.
        </p>
        <h2 className={styles.title}>
          10 лет в рекламе. 0 демонтажей. 100% сроков. Нам доверяют лидеры
          рынка.
        </h2>
      </div>

      <div className={styles.slider_wrapper}>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          spaceBetween={40}
          className={styles.clients_swiper}
        >
          {brands.concat(brands).map((name, idx) => (
            <SwiperSlide key={idx} style={{ width: 'auto' }}>
              <span className={styles.clients_brand}>{name}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhyWe;
