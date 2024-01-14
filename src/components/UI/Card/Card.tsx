import { Link } from 'react-router-dom';
import { TOffer } from '../../../types/offers';
import BookmarkButton from '../BookmarkButton';
import Rating from '../Rating';
import { AppRoute } from '../../../utils/constants';

interface ICard {
  offer: TOffer;
  parentName: string;
  onHover?: (offer: TOffer) => void;
}

function Card({ offer, parentName, onHover }: ICard): JSX.Element {
  const { isFavorite, isPremium, price, title, type, rating, id } = offer;

  return (
    <article className={`${parentName}__card place-card`} onMouseEnter={onHover ? () => onHover(offer) : undefined}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${parentName}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} />
        </div>
        <Rating className="place-card" rating={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}

export default Card;
