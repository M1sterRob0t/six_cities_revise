import { useSelector } from 'react-redux';

import FavoriteLocation from './FavoritesLocation';
import { getOffers } from '../../store/reducers/offers-reducer/selectors';


function Favorites(): JSX.Element {
  const offers = useSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {!!favoriteOffers.length && <FavoriteLocation places={favoriteOffers} location={favoriteOffers[0].city.name} />}
      </ul>
    </section>
  );
}

export default Favorites;
