import { TLocations } from './types';
import img1 from '../../shared/assets/images/brandmauer-1.jpg';
import neftyanikov1 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-1.jpg';
import neftyanikov2 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-2.jpg';
import neftyanikov3 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-3.jpg';
import neftyanikov4 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-4.jpg';
import neftyanikov5 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-5.jpg';

export const API_KEY = '34f6d796-768a-4d03-9aaf-ac0a3f7336b3';

export const locations: TLocations[] = [
  {
    id: 1,
    coords: [60.926721, 76.58313],
    format: '10*30',
    address: 'ул. 60 лет Октября, д. 54',
    photos: [img1],
  },
  {
    id: 2,
    coords: [60.954581, 76.572053],
    format: '10*30',
    address: 'ул. Северная, д. 11/1',
    photos: [img1],
  },
  {
    id: 3,
    coords: [60.935555, 76.592427],
    format: '10*30',
    address: 'ул. Чапаева, д.15/1',
    photos: [img1],
  },
  {
    id: 4,
    coords: [60.950181, 76.609765],
    format: '10*30',
    address: 'ул. Северная, д.72',
    photos: [img1],
  },
  {
    id: 5,
    coords: [60.937151, 76.586022],
    format: '10*30',
    address: 'ул. Ленина, д. 17/1',
    photos: [img1],
  },
  {
    id: 6,
    coords: [60.950291, 76.608902],
    format: '10*30',
    address: 'ул. Северная, д. 70',
    photos: [img1],
  },
  {
    id: 7,
    coords: [60.935586, 76.605686],
    format: '10*30',
    address: 'ул. Мира, д. 76',
    photos: [img1],
  },
  {
    id: 8,
    coords: [60.931997, 76.603557],
    format: '10*30',
    address: 'ул. Ленина, д. 27',
    photos: [img1],
  },
  {
    id: 9,
    coords: [60.931967, 76.570392],
    format: '10*30',
    address: 'ул. Нефтяников, д.2',
    photos: [
      neftyanikov1,
      neftyanikov2,
      neftyanikov3,
      neftyanikov4,
      neftyanikov5,
    ],
  },
  {
    id: 10,
    coords: [60.893812, 76.657591],
    format: '13*14',
    address: 'ул. Декабристов, д.11',
    photos: [img1],
  },
  {
    id: 11,
    coords: [60.930384, 76.621416],
    format: '10*20',
    address: 'ул. Героев Самотлора, д.18',
    photos: [img1],
  },
];
