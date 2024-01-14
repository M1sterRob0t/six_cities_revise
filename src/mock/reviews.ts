import { TReview } from '../types/review';

function generateMocReviews(amount: number): TReview[] {
  const result: TReview[] = [];

  let idCounter = 0;
  const mockReview: TReview = {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
    'date': String(new Date()),
    'id': 0,
    'rating': 3,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 4,
      'isPro': false,
      'name': 'Max',
    }
  };

  for (let i = 0; i < amount; i++) {
    const copiedObject = JSON.parse(JSON.stringify(mockReview)) as TReview;
    copiedObject.id = ++idCounter;
    result.push(copiedObject);
  }

  return result;
}

export const mockReviews = generateMocReviews(10);
