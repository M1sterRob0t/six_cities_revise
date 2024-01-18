import { FormEvent, useState } from 'react';

import type { TReviewPost } from '../../../types/review';

const MAX_COMMENT_LENGTH = 300;
const MIN_COMMENT_LENGTH = 50;

interface IReviewForm {
  onSubmit: (review: TReviewPost) => Promise<boolean>;
}

function ReviewForm({ onSubmit }: IReviewForm): JSX.Element {
  const [comment, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  function onReviewSubmit(evt: FormEvent) {
    evt.preventDefault();
    (async function () {
      setIsDisabled(true);
      const isSuccess = await onSubmit({ comment, rating });

      if (isSuccess) {
        setText('');
        setRating(0);
      }

      setIsDisabled(false);
    })();
  }

  function onRatingChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setRating(+evt.target.value);
    checkIfDisabled(comment, +evt.target.value);
  }

  function onCommentChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(evt.target.value);
    checkIfDisabled(evt.target.value, rating);
  }

  function checkIfDisabled(text: string, rate: number): void {
    if (text.length >= MIN_COMMENT_LENGTH && text.length <= MAX_COMMENT_LENGTH && rate > 0) {
      setIsDisabled(false);
    }
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onReviewSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          onChange={onRatingChange}
          checked={5 === rating}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          onChange={onRatingChange}
          checked={4 === rating}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          onChange={onRatingChange}
          checked={3 === rating}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          onChange={onRatingChange}
          checked={2 === rating}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          onChange={onRatingChange}
          checked={1 === rating}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        maxLength={300}
        minLength={50}
        onChange={onCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
