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
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    name: 'Cologne',
  },
  Brussels: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: 'Brussels'
  },
  Amsterdam: {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    name: 'Amsterdam'
  },
  Hamburg: {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    name: 'Hamburg'
  },
  Dusseldorf: {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
    name: 'Dusseldorf',
  },
} as const;

export const cityNames = Object.values(City).map((city) => city.name);

export enum SortType {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum AuthStatus {
  Auth = 'Authorized',
  NoAuth = 'Unauthorized',
  Unknown = 'Unknown',
}

export enum ApiRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments/',
  Login = '/login',
  Logout = '/logout',
}


