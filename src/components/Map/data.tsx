import { TLocations } from './types';
import neftyanikov1 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-1.jpg';
import neftyanikov2 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-2.jpg';
import neftyanikov3 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-3.jpg';
import neftyanikov4 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-4.jpg';
import neftyanikov5 from '../../shared/assets/images/neftyanikov-2/neftyanikov-2-5.jpg';

import let60_1 from '../../shared/assets/images/60let/60let-1.jpg';
import let60_2 from '../../shared/assets/images/60let/60let-2.jpg';
import let60_3 from '../../shared/assets/images/60let/60let-3.jpg';

import severnaya11_1 from '../../shared/assets/images/severnaya11/severnaya11-1.jpg';
import severnaya11_2 from '../../shared/assets/images/severnaya11/severnaya11-2.jpg';

import chapaeva15_1 from '../../shared/assets/images/chapaeva15/chapaeva15-1.jpg';
import chapaeva15_2 from '../../shared/assets/images/chapaeva15/chapaeva15-2.jpg';

import severnaya72_1 from '../../shared/assets/images/severnaya72/severnaya72-1.jpg';
import severnaya72_2 from '../../shared/assets/images/severnaya72/severnaya72-2.jpg';
import severnaya72_3 from '../../shared/assets/images/severnaya72/severnaya72-3.jpg';

import lenina17_1 from '../../shared/assets/images/lenina17/lenina17-1.jpg';
import lenina17_2 from '../../shared/assets/images/lenina17/lenina17-2.jpg';
import lenina17_3 from '../../shared/assets/images/lenina17/lenina17-3.jpg';
import lenina17_4 from '../../shared/assets/images/lenina17/lenina17-4.jpg';
import lenina17_5 from '../../shared/assets/images/lenina17/lenina17-5.jpg';

import severnaya70_1 from '../../shared/assets/images/severnaya70/severnaya70-1.jpg';
import severnaya70_2 from '../../shared/assets/images/severnaya70/severnaya70-2.jpg';
import severnaya70_3 from '../../shared/assets/images/severnaya70/severnaya70-3.jpg';
import severnaya70_4 from '../../shared/assets/images/severnaya70/severnaya70-4.jpg';

import mira76_1 from '../../shared/assets/images/mira76/mira76-1.jpg';
import mira76_2 from '../../shared/assets/images/mira76/mira76-2.jpg';
import mira76_3 from '../../shared/assets/images/mira76/mira76-3.jpg';
import mira76_4 from '../../shared/assets/images/mira76/mira76-4.jpg';
import mira76_5 from '../../shared/assets/images/mira76/mira76-5.jpg';

import lenina27_1 from '../../shared/assets/images/lenina27/lenina27-1.jpg';
import lenina27_2 from '../../shared/assets/images/lenina27/lenina27-2.jpg';
import lenina27_3 from '../../shared/assets/images/lenina27/lenina27-3.jpg';

import dekabristov11_1 from '../../shared/assets/images/dekabristov11/dekabristov11-1.jpg';
import dekabristov11_2 from '../../shared/assets/images/dekabristov11/dekabristov11-2.jpg';
import dekabristov11_3 from '../../shared/assets/images/dekabristov11/dekabristov11-3.jpg';
import dekabristov11_4 from '../../shared/assets/images/dekabristov11/dekabristov11-4.jpg';

import geroev18_1 from '../../shared/assets/images/geroev18/geroev18-1.jpg';
import geroev18_2 from '../../shared/assets/images/geroev18/geroev18-2.jpg';
import geroev18_3 from '../../shared/assets/images/geroev18/geroev18-3.jpg';

export const API_KEY = '34f6d796-768a-4d03-9aaf-ac0a3f7336b3';

export const locations: TLocations[] = [
  {
    id: 1,
    coords: [60.926721, 76.58313],
    format: '10*30',
    address: 'ул. 60 лет Октября, д. 54',
    photos: [let60_1, let60_2, let60_3],
  },
  {
    id: 2,
    coords: [60.954581, 76.572053],
    format: '10*30',
    address: 'ул. Северная, д. 11/1',
    photos: [severnaya11_1, severnaya11_2],
  },
  {
    id: 3,
    coords: [60.935555, 76.592427],
    format: '10*30',
    address: 'ул. Чапаева, д.15/1',
    photos: [chapaeva15_1, chapaeva15_2],
  },
  {
    id: 4,
    coords: [60.950181, 76.609765],
    format: '10*30',
    address: 'ул. Северная, д.72',
    photos: [severnaya72_1, severnaya72_2, severnaya72_3],
  },
  {
    id: 5,
    coords: [60.937151, 76.586022],
    format: '10*30',
    address: 'ул. Ленина, д. 17/1',
    photos: [lenina17_1, lenina17_2, lenina17_3, lenina17_4, lenina17_5],
  },
  {
    id: 6,
    coords: [60.950291, 76.608902],
    format: '10*30',
    address: 'ул. Северная, д. 70',
    photos: [severnaya70_1, severnaya70_2, severnaya70_3, severnaya70_4],
  },
  {
    id: 7,
    coords: [60.935586, 76.605686],
    format: '10*30',
    address: 'ул. Мира, д. 76',
    photos: [mira76_1, mira76_3, mira76_2, mira76_4, mira76_5],
  },
  {
    id: 8,
    coords: [60.931997, 76.603557],
    format: '10*30',
    address: 'ул. Ленина, д. 27',
    photos: [lenina27_1, lenina27_2, lenina27_3],
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
    photos: [
      dekabristov11_1,
      dekabristov11_2,
      dekabristov11_3,
      dekabristov11_4,
    ],
  },
  {
    id: 11,
    coords: [60.930384, 76.621416],
    format: '10*20',
    address: 'ул. Героев Самотлора, д.18',
    photos: [geroev18_1, geroev18_1, geroev18_1],
  },
];
