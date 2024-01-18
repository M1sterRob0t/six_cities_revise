import { useEffect, useState } from 'react';
import { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comment from './Comment/Comment';
import ReviewForm from './ReviewForm';

import { AuthStatus } from '../../constants';
import { fetchReviews, postReview } from '../../services/api-requests';

import type { TReview, TReviewPost } from '../../types/review';
import type { TState } from '../../store/types/state';

const mapStateToProps = ({ authStatus }: TState) => ({
  authStatus,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Reviews({ authStatus }: PropsFromRedux): JSX.Element {
  const { id } = useParams<{ id: 'offerId' }>();
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

export default connector(Reviews);
