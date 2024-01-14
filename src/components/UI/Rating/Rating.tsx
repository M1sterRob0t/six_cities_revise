import { convertRatingToPersents } from '../../../utils/helpers';

interface IRating {
  rating: number;
  className?: string;
}

function Rating({ rating, className = 'place-card' }: IRating): JSX.Element {
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: convertRatingToPersents(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
