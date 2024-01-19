import Rating from '../../UI/Rating';
import BookmarkButton from '../../BookmarkButton';

import type { TOffer } from '../../../types/offers';
import { AppRoute } from '../../../constants';
import { Link } from 'react-router-dom';


interface IFavoriteCard {
  place: TOffer;
  onToggleFavorite: () => void;
}

function FavoriteCard({ place, onToggleFavorite }: IFavoriteCard): JSX.Element {
  const {price, title, type, rating, previewImage, isFavorite, id} = place;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} id={id} onToggleFavorite={onToggleFavorite}/>
        </div>
        <Rating className="place-card" rating={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
