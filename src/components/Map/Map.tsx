import React, { useEffect, useRef, useState } from 'react';
import styles from './Map.module.scss';
import { SectionTitle } from '../../shared';
import img1 from '../../shared/assets/images/brandmauer-1.jpg';

// Ваш API ключ
const API_KEY = '34f6d796-768a-4d03-9aaf-ac0a3f7336b3';

// Данные для меток с добавлением фото
const locations = [
  {
    id: 1,
    coords: [60.926721, 76.58313],
    name: '60 лет Октября, д. 54',
    format: '10*30',
    address: 'ул. 60 лет Октября, д. 54',
    photo: img1,
  },
  {
    id: 2,
    coords: [60.954581, 76.572053],
    name: 'Северная д. 11/1',
    format: '10*30',
    address: 'ул. Северная, д. 11/1',
    photo: img1,
  },
  {
    id: 3,
    coords: [60.935555, 76.592427],
    name: 'Чапаева, д.15/1',
    format: '10*30',
    address: 'ул. Чапаева, д.15/1',
    photo: img1,
  },
  {
    id: 4,
    coords: [60.950181, 76.609765],
    name: 'Северная, д.72',
    format: '10*30',
    address: 'ул. Северная, д.72',
    photo: img1,
  },
  {
    id: 5,
    coords: [60.937151, 76.586022],
    name: 'Ленина, д. 17/1',
    format: '10*30',
    address: 'ул. Ленина, д. 17/1',
    photo: img1,
  },
  {
    id: 6,
    coords: [60.950291, 76.608902],
    name: 'Северная, д. 70',
    format: '10*30',
    address: 'ул. Северная, д. 70',
    photo: img1,
  },
  {
    id: 7,
    coords: [60.935586, 76.605686],
    name: 'Мира, д. 76',
    format: '10*30',
    address: 'ул. Мира, д. 76',
    photo: img1,
  },
  {
    id: 8,
    coords: [60.931997, 76.603557],
    name: 'Ленина, д. 27',
    format: '10*30',
    address: 'ул. Ленина, д. 27',
    photo: img1,
  },
  {
    id: 9,
    coords: [60.931967, 76.570392],
    name: 'Нефтяников, д.2',
    format: '10*30',
    address: 'ул. Нефтяников, д.2',
    photo: img1,
  },
  {
    id: 10,
    coords: [60.893812, 76.657591],
    name: 'Декабристов, д.11',
    format: '13*14',
    address: 'ул. Декабристов, д.11',
    photo: img1,
  },
  {
    id: 11,
    coords: [60.930384, 76.621416],
    name: 'Героев Самотлора, д.18',
    format: '10*20',
    address: 'ул. Героев Самотлора, д.18',
    photo: img1,
  },
];

// SVG иконка
const LOCATION_SVG = `
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 930.000000 1280.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#2B6CB8" stroke="none">
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
`;

const ICON_DATA_URL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(LOCATION_SVG)}`;

declare global {
  interface Window {
    ymaps: any;
  }
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const createBalloonContent = (loc: any) => {
    return `
      <div class="${styles.balloon}">
        <div class="${styles.balloonHeader}">
          <div class="${styles.balloonHeaderInfo}">
            <div class="${styles.balloonAddress}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Адрес: ${loc.address}</span>
            </div>
            <div class="${styles.balloonFormat}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
              </svg>
              <span>Формат: ${loc.format}</span>
            </div>
          </div>
        </div>

        <div class="${styles.balloonImage}">
          <img src="${loc.photo}" alt="${loc.name}" />
        </div>

        <button class="${styles.balloonButton}">
          Связаться
        </button>
      </div>
    `;
  };

  useEffect(() => {
    if (window.ymaps) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`;
    script.async = true;

    script.onload = () => {
      window.ymaps.ready(initMap);
    };

    script.onerror = () => {
      console.error('Не удалось загрузить Яндекс Карты');
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    try {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [60.93, 76.59],
        zoom: 12,
        controls: ['zoomControl', 'fullscreenControl'],
      });

      map.behaviors.disable('scrollZoom');

      // Добавляем метки с кастомным балуном
      locations.forEach((loc) => {
        const balloonContent = createBalloonContent(loc);

        const placemark = new window.ymaps.Placemark(
          loc.coords,
          {
            balloonContent: balloonContent,
            hintContent: loc.name,
          },
          {
            iconLayout: 'default#image',
            iconImageHref: ICON_DATA_URL,
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
            openBalloonOnClick: true,
            balloonMaxWidth: 360,
            balloonPanelMaxMapArea: 0,
          }
        );
        map.geoObjects.add(placemark);
      });

      mapInstanceRef.current = map;
      setMapLoaded(true);
    } catch (error) {
      console.error('Ошибка при создании карты:', error);
    }
  };

  return (
    <div id={'map'}>
      <SectionTitle title="Локации" />
      <div className={styles.mapContainer}>
        <div
          ref={mapRef}
          className={styles.map}
          style={{ width: '100%', height: '100%' }}
        />
        {!mapLoaded && <div className={styles.loader}>Загрузка карты...</div>}
      </div>
    </div>
  );
};

export default Map;
