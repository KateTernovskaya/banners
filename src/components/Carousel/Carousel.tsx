import React from 'react';
import styles from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { images } from './data';

import 'swiper/css';
import 'swiper/css/effect-fade';

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
