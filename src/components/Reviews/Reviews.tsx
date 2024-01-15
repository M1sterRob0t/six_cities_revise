import { TReview } from '../../types/review';
import Comment from './Comment/Comment';
import ReviewForm from './ReviewForm';

interface IReviews {
  reviews: TReview[];
}

function Reviews({ reviews }: IReviews): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <Comment review={item} key={item.id} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
