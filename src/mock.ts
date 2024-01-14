import { TPlace } from './types/place';

function generateMockPlaces(amount: number): TPlace[] {
  const result: TPlace[] = [];

  let idCounter = 0;
  const mockPlace: TPlace = {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine',
      'Dishwasher'],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    'id': 1,
    'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-small-04.jpg', 'img/apartment-small-03.jpg', 'img/apartment-small-04.jpg'],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  };

  for (let i = 0; i < amount; i++) {
    const copiedObject = JSON.parse(JSON.stringify(mockPlace)) as TPlace;
    copiedObject.id = ++idCounter;
    result.push(copiedObject);
  }

  return result;
}

export const mockPlaces = generateMockPlaces(5);
