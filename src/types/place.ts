export type TPlace = {
  'bedrooms': number;
  'city': {
    'location': {
      'latitude': number;
      'longitude': number;
      'zoom': number;
    };
    'name': string;
  };
  'description': string;
  'goods': string[];
  'host': {
    'avatarUrl': string;
    'id': number;
    'is_pro': boolean;
    'name': string;
  };
  'id': number;
  'images': string[];
  'isFavorite': false;
  'isPremium': false;
  'location': {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  };
  'maxAdults': number;
  'previewImage': string;
  'price': number;
  'rating': number;
  'title': string;
  'type': string;
};
