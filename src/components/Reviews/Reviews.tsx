import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comment from './Comment/Comment';
import ReviewForm from './ReviewForm';

import { AuthStatus } from '../../constants';
import { fetchReviews, postReview } from '../../services/api-requests';
import { getUserAuthStatus } from '../../store/reducers/user-reducer/selectors';

import type { TReview, TReviewPost } from '../../types/review';


function Reviews(): JSX.Element {
  const { id } = useParams<{ id: 'offerId' }>();
  const authStatus = useSelector(getUserAuthStatus);
  const [reviews, setReviews] = useState<TReview[]>([]);

  useEffect(() => {
    fetchReviews(id).then((result) => setReviews(result));
  }, [id]);

  async function onReviewSubmit(review: TReviewPost) {
    try {
      const updatedReviews = await postReview(id, review);
      setReviews(updatedReviews);
      return true;
    } catch (err) {
      return false;
    }
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <Comment review={item} key={item.id} />
        ))}
      </ul>
      {authStatus === AuthStatus.Auth && <ReviewForm onSubmit={onReviewSubmit} />}
    </section>
  );
}

export default Reviews;
