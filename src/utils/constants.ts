export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Property = '/offer/:id',
  Favorites = '/favorites',
  NotFound = '/*',
}

export enum CityName {
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const City = {
  Cologne: {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
    name: 'Cologne',
  },
  Brussels: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Brussels',
  },
  Amsterdam: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  Hamburg: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  Dusseldorf: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
} as const;

export const cityNames = Object.values(City).map((city) => city.name);
