import { v4 as uuid } from 'uuid';
import LondonIcon from '../assets/london_icon.png';
import ManchesterIcon from '../assets/manchester_icon.jpg';

export const cities = [
  {
    id: uuid(),
    cityName: 'London',
    location: {
      lat: 51.5074,
      lon: 0.1272,
    },
    img: LondonIcon,
  },

  {
    id: uuid(),
    cityName: 'Manchester',
    location: {
      lat: 53.4808,
      lon: 2.2426,
    },
    img: ManchesterIcon,
  },
];
