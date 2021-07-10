import { v4 as uuid } from 'uuid';
import LondonLogo from '../assets/london_logo.jpg';
import BangkokLogo from '../assets/bangkok_logo.jpg';
import DubaiLogo from '../assets/dubai_logo.jpg';
import NYCLogo from '../assets/nyc_logo.jpg';
import ReykjavikLogo from '../assets/reykjavik_logo.jpg';
import SydneyLogo from '../assets/sydney_logo.jpg';

export const cities = [
  {
    id: uuid(),
    cityName: 'London, UK',
    location: {
      lat: 51.5074,
      lon: 0.1272,
    },
    img: LondonLogo,
  },
  {
    id: uuid(),
    cityName: 'New York City, USA',
    location: {
      lat: 40.7128,
      lon: -73.9352,
    },
    img: NYCLogo,
  },

  {
    id: uuid(),
    cityName: 'Bangkok, Thailand',
    location: {
      lat: 13.7563,
      lon: 100.5018,
    },
    img: BangkokLogo,
  },
  {
    id: uuid(),
    cityName: 'Dubai, UAE',
    location: {
      lat: 25.2048,
      lon: 55.2708,
    },
    img: DubaiLogo,
  },
  {
    id: uuid(),
    cityName: 'Sydney, Australia',
    location: {
      lat: -33.8562,
      lon: 151.2153,
    },
    img: SydneyLogo,
  },
  {
    id: uuid(),
    cityName: 'Reykjavik, Iceland',
    location: {
      lat: 64.1283,
      lon: -21.8278,
    },
    img: ReykjavikLogo,
  },
];
