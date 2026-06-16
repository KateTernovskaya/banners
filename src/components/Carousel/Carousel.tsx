import React from 'react';
import styles from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import img1 from '../../shared/assets/images/brandmauer-1.jpg';
import img2 from '../../shared/assets/images/brandmauer-2.jpg';
import img3 from '../../shared/assets/images/brandmauer-3.jpg';
import img4 from '../../shared/assets/images/brandmauer-4.jpg';
import img5 from '../../shared/assets/images/brandmauer-5.jpg';

const images = [
  { id: 1, src: img1, alt: 'Брандмауэр 1' },
  { id: 2, src: img2, alt: 'Брандмауэр 2' },
  { id: 3, src: img3, alt: 'Брандмауэр 3' },
  { id: 4, src: img4, alt: 'Брандмауэр 4' },
  { id: 5, src: img5, alt: 'Брандмауэр 5' },
];

//Изменить фотки

const Carousel = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        className={styles.carousel}
        simulateTouch={true}
        touchRatio={1}
        resistanceRatio={0.85}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.slide_image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
