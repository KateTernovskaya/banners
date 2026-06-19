import React from 'react';
import styles from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import img1 from '../../shared/assets/images/dekabristov11/dekabristov11-1.jpg';
import img2 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-2.jpg';
import img3 from '../../shared/assets/images/lenina27/lenina27-1.jpg';
import img4 from '../../shared/assets/images/mira76/mira76-1.jpg';
import img5 from '../../shared/assets/images/severnaya70/severnaya70-1.jpg';
import img6 from '../../shared/assets/images/severnaya11/severnaya11-1.jpg';
import img7 from '../../shared/assets/images/chapaeva15/chapaeva15-1.jpg';
import img8 from '../../shared/assets/images/severnaya72/severnaya72-1.jpg';
import img9 from '../../shared/assets/images/lenina17/lenina17-1.jpg';
import img10 from '../../shared/assets/images/geroev18/geroev18-1.jpg';

const images = [
  { id: 1, src: img1, alt: 'Брандмауэр 1' },
  { id: 2, src: img2, alt: 'Брандмауэр 2' },
  { id: 3, src: img3, alt: 'Брандмауэр 3' },
  { id: 4, src: img4, alt: 'Брандмауэр 4' },
  { id: 5, src: img5, alt: 'Брандмауэр 5' },
  { id: 6, src: img6, alt: 'Брандмауэр 6' },
  { id: 7, src: img7, alt: 'Брандмауэр 7' },
  { id: 8, src: img8, alt: 'Брандмауэр 8' },
  { id: 9, src: img9, alt: 'Брандмауэр 9' },
  { id: 10, src: img10, alt: 'Брандмауэр 10' },
];

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
