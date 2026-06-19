import React from 'react';
import styles from './WhyWe.module.scss';
import type { WhyWeProps } from './types';
import { SectionTitle } from '../../shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import lenta from '../../shared/assets/images/brands/Логотип_торговой_сети_«Лента».svg.png';
import ozon from '../../shared/assets/images/brands/OZON_2019.svg.png';
import yam from '../../shared/assets/images/brands/Yandex_Market_cropp_logo.svg.png';
import sberM from '../../shared/assets/images/brands/Sbermarket_logo.png';
import svetofor from '../../shared/assets/images/brands/Svetofor-logo.png';
import maria from '../../shared/assets/images/brands/Maria-ra-logo.png';
import samokat from '../../shared/assets/images/brands/samokat-horizontal-logo.png';
import macdonalds from '../../shared/assets/images/brands/logo-macdonalds.png';
import rostics from '../../shared/assets/images/brands/rostics.png';
import bk from '../../shared/assets/images/brands/Burger_King_2020.png';
import dodo from '../../shared/assets/images/brands/Dodo_Logo.svg.png';
import shatura from '../../shared/assets/images/brands/logo-shatura.jpg';
import etagi from '../../shared/assets/images/brands/etagi.jpg';
import eldorado from '../../shared/assets/images/brands/eldorado.jpg';
import shokoladnica from '../../shared/assets/images/brands/shokoladnica.png';
import cinnabon from '../../shared/assets/images/brands/Cinnabon_logo.svg.png';
import mvideo from '../../shared/assets/images/brands/Mvideo_logo_2023.png';
import dns from '../../shared/assets/images/brands/dns-logo.png';
import samsung from '../../shared/assets/images/brands/Samsung_old_logo_before_year_2015.png';
import xiaomi from '../../shared/assets/images/brands/XiaomiLogoNew2.png';
import haier from '../../shared/assets/images/brands/Haier_logo.svg.png';
import zarina from '../../shared/assets/images/brands/zarina.png';
import conceptClub from '../../shared/assets/images/brands/conceptClub.jpg';
import gj from '../../shared/assets/images/brands/gloria_jeans-1.jpg';
import ostin from '../../shared/assets/images/brands/Logo_Ostin.png';
import lime from '../../shared/assets/images/brands/lime-logo.png';
import sportmaster from '../../shared/assets/images/brands/logo-sportmaster.png';
import magnitCosmetic from '../../shared/assets/images/brands/magnitCosmetic.jpg';
import podrujka from '../../shared/assets/images/brands/podrujka.png';
import letual from '../../shared/assets/images/brands/letual.png';
import apteka36 from '../../shared/assets/images/brands/apteka36.png';
import rigla from '../../shared/assets/images/brands/rigla-1024x358.png';
import sber from '../../shared/assets/images/brands/logo-sber.png';
import bank from '../../shared/assets/images/brands/out-t-bank.jpg';
import vtb from '../../shared/assets/images/brands/VTB_Logo_2018.svg.png';
import alfa from '../../shared/assets/images/brands/Logo_alfa-bank.svg.png';
import mts from '../../shared/assets/images/brands/MTS_logo_2015.svg.png';
import megaFon from '../../shared/assets/images/brands/MegaFon_logo_Russian.svg.png';
import beeline from '../../shared/assets/images/brands/Beeline_logo_2021.png';
import t2 from '../../shared/assets/images/brands/t2.jpg';
import go from '../../shared/assets/images/brands/Yandex_Go_logo_2024.svg.png';
import ormatec from '../../shared/assets/images/brands/ormatec.png';
import rayton from '../../shared/assets/images/brands/rayton.png';

const brands = [
  { id: 1, name: 'Лента', src: lenta },
  { id: 3, name: 'Озон', src: ozon },
  { id: 5, name: 'Яндекс Маркет', src: yam },
  { id: 6, name: 'СберМаркет', src: sberM },
  { id: 7, name: 'Светофор', src: svetofor },
  { id: 8, name: 'Мария-Ра', src: maria },
  { id: 9, name: 'Самокат', src: samokat },
  { id: 10, name: 'Вкусно — и точка', src: macdonalds },
  { id: 11, name: 'KFC (Ростикс)', src: rostics },
  { id: 12, name: 'Бургер Кинг', src: bk },
  { id: 13, name: 'Додо Пицца', src: dodo },
  { id: 14, name: 'Шоколадница', src: shokoladnica },
  { id: 15, name: 'Синнабон', src: cinnabon },
  { id: 17, name: 'М.Видео', src: mvideo },
  { id: 171, name: 'Эльдорадо', src: eldorado },
  { id: 18, name: 'DNS', src: dns },
  { id: 19, name: 'Samsung', src: samsung },
  { id: 20, name: 'Xiaomi', src: xiaomi },
  { id: 21, name: 'Haier', src: haier },
  { id: 22, name: 'Zarina', src: zarina },
  { id: 23, name: 'Concept Club', src: conceptClub },
  { id: 24, name: 'Gloria Jeans', src: gj },
  { id: 25, name: "О'STIN", src: ostin },
  { id: 26, name: 'Lime', src: lime },
  { id: 27, name: 'Спортмастер', src: sportmaster },
  { id: 28, name: 'Магнит Косметик', src: magnitCosmetic },
  { id: 29, name: 'Подружка', src: podrujka },
  { id: 30, name: "Л'Этуаль", src: letual },
  { id: 31, name: 'Аптека 36,6', src: apteka36 },
  { id: 32, name: 'Ригла', src: rigla },
  { id: 33, name: 'Сбер (СберБанк, СберПрайм)', src: sber },
  { id: 34, name: 'Тинькофф/Т-Банк', src: bank },
  { id: 35, name: 'ВТБ', src: vtb },
  { id: 36, name: 'Альфа-Банк', src: alfa },
  { id: 37, name: 'МТС', src: mts },
  { id: 38, name: 'Мегафон', src: megaFon },
  { id: 39, name: 'Билайн', src: beeline },
  { id: 40, name: 'Т2', src: t2 },
  { id: 41, name: 'Яндекс (Такси, Лавка, Плюс, Доставка)', src: go },
  { id: 42, name: 'Этажи', src: etagi },
  { id: 44, name: 'Шатура', src: shatura },
  { id: 45, name: 'Орматек', src: ormatec },
  { id: 47, name: 'Райтон', src: rayton },
];

const doubledBrands = [...brands, ...brands];

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
          spaceBetween={50}
          className={styles.clients_swiper}
        >
          {doubledBrands.map(({ name, src }, idx) => (
            <SwiperSlide key={idx} style={{ width: 'auto' }}>
              <img src={src} alt={name} className={styles.logoImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhyWe;
