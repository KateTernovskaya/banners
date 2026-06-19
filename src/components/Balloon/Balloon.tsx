import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Balloon.module.scss';
import type { BalloonProps } from './types';
import { Link } from 'react-scroll';

const Balloon = ({ format, address, photos, onClose }: BalloonProps) => {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const openFullscreen = (index: number) => setFullscreenIndex(index);
  const closeFullscreen = () => setFullscreenIndex(null);

  return (
    <div className={styles.container}>
      {/* Шапка */}
      <div className={styles.info}>
        <div className={styles.address_block}>
          <div className={styles.address}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 930.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#2B6CB8"
                stroke="none"
              >
                <path
                  d="M4335 12789 c-1496 -104 -2843 -915 -3635 -2190 -232 -373 -414 -787
        -529 -1204 -305 -1107 -197 -2278 305 -3295 191 -387 372 -660 676 -1020 34
        -41 753 -976 1596 -2077 918 -1199 1555 -2022 1588 -2052 186 -170 442 -170
        628 0 33 30 670 853 1588 2052 843 1101 1562 2036 1596 2077 304 360 485 633
        676 1020 566 1147 629 2502 174 3695 -353 923 -967 1689 -1798 2242 -825 549
        -1864 821 -2865 752z m559 -2254 c224 -29 398 -81 601 -180 553 -268 931 -756
        1062 -1374 25 -116 27 -145 28 -366 0 -267 -10 -345 -70 -555 -161 -561 -586
        -1032 -1130 -1253 -201 -82 -365 -120 -592 -139 -294 -25 -593 23 -878 139
        -544 221 -969 692 -1130 1253 -60 210 -70 288 -70 555 1 221 3 250 28 366 112
        527 406 965 842 1252 177 116 437 227 637 271 209 46 467 58 672 31z"
                />
              </g>
            </svg>
            <span>Адрес: {address}</span>
          </div>
          <button onClick={onClose} className={styles.button_close}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1700 3410 c-28 -28 -34 -63 -16 -96 8 -16 179 -193 380 -394 l366
-365 -381 -382 c-376 -376 -382 -382 -375 -415 8 -41 39 -68 80 -68 27 0 72
41 408 377 l378 378 378 -378 c335 -334 382 -377 409 -377 17 0 39 3 48 6 23
9 47 61 40 87 -4 12 -176 192 -383 400 l-377 377 379 379 c335 335 379 383
379 410 0 42 -37 81 -77 81 -27 0 -75 -44 -406 -375 -206 -206 -379 -375 -385
-375 -5 0 -179 169 -385 375 -338 338 -379 375 -408 375 -19 0 -40 -8 -52 -20z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className={styles.format}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M932 5104 c-468 -78 -840 -454 -917 -925 -23 -142 -23 -3096 0 -3238
78 -476 451 -849 930 -926 135 -22 3082 -22 3228 0 455 69 806 400 924 874 15
60 17 215 20 1606 3 1021 1 1570 -6 1630 -16 133 -46 237 -105 360 -161 336
-462 560 -829 620 -132 21 -3117 21 -3245 -1z m3198 -275 c178 -28 324 -104
456 -234 137 -135 214 -282 244 -467 14 -88 14 -3049 -1 -3138 -56 -353 -333
-634 -684 -695 -76 -13 -290 -15 -1585 -15 -1307 0 -1509 2 -1586 15 -349 61
-627 345 -683 695 -15 90 -15 3050 0 3140 29 178 104 324 234 456 131 132 269
207 440 239 91 17 3062 21 3165 4z"
              />
            </g>
          </svg>
          <span>Формат: {format}</span>
        </div>
      </div>

      {/* Карусель внутри балуна */}
      <div className={styles.image}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={photos.length > 1}
          speed={800}
          className={styles.carousel}
          simulateTouch={true}
          touchRatio={1}
          resistanceRatio={0.85}
        >
          {photos.map((image, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img
                src={image}
                alt={`${address} ${index + 1}`}
                className={styles.slide_image}
                onClick={() => openFullscreen(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        className={styles.button}
        to={'contacts'}
        smooth={'easeInOutCubic'}
        duration={1000}
        spy={true}
        containerId="main"
      >
        Связаться
      </Link>

      {/* Полноэкранный оверлей через портал */}
      {fullscreenIndex !== null &&
        createPortal(
          <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
            <div
              className={styles.fullscreenContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.fullscreenClose}
                onClick={closeFullscreen}
              >
                ✕
              </button>
              <Swiper
                initialSlide={fullscreenIndex}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                loop={photos.length > 1}
                className={styles.fullscreenSwiper}
              >
                {photos.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt=""
                      className={styles.fullscreenImage}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Balloon;
