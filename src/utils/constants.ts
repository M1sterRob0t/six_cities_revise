export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Property = '/offer/:id',
  Favorites = '/favorites',
  NotFound = '/*',
}

export const City = {
  Amsterdam: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
};

