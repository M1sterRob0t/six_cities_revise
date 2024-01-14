
import { TReview } from '../../../types/review';
import Rating from '../../UI/Rating';
import User from '../../UI/User';

interface IComment {
  review: TReview;
}

function Comment({ review }: IComment): JSX.Element {
  const {rating, comment, date, user } = review;

  return (
    <li className="reviews__item">
      <User user={user} parentName='reviews' />
      <div className="reviews__info">
        <Rating className="reviews" rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {date}
        </time>
      </div>
    </li>
  );
}

export default Comment;
