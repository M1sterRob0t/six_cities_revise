export type TCity = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export type TPoint = {
  latitude: number;
  longitude: number;
  zoom: number;
  id: number;
};

export type TPoints = TPoint[];
