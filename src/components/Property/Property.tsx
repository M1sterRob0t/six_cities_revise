import { TOffer } from '../../types/offers';
import { TReview } from '../../types/review';
import Reviews from '../Reviews';
import BookmarkButton from '../UI/BookmarkButton';
import Rating from '../UI/Rating';
import User from '../UI/User';

interface IProperty {
  place: TOffer;
  reviews: TReview[];
}

function Property({ place, reviews }: IProperty): JSX.Element {
  const { isPremium, host, isFavorite, title, goods, description, bedrooms, images, price, rating, type, maxAdults } = place;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.map((src) => (
            <div className="property__image-wrapper" key={src}>
              <img
                className="property__image"
                src={src}
                alt="Photo studio"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <BookmarkButton className={'property'} isFavorite={isFavorite} />
          </div>
          <div className="property__rating rating">
            <Rating className="property" rating={rating} />
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms}
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">€{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((item) => <li className="property__inside-item" key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <User user={host} parentName={'property'} />
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </div>
      </div>
      <section className="property__map map" />
    </section>
  );
}

export default Property;
