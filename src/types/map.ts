import { City } from '../constants';

export type TCityName = keyof typeof City;
export type TCity = typeof City[keyof typeof City];

/* export type TCity = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: TCityName;
}; */

export type TPoint = {
  latitude: number;
  longitude: number;
  zoom: number;
  id: number;
};

export type TPoints = TPoint[];


