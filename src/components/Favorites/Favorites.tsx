import { useEffect, useState } from 'react';

import Spinner from '../Spinner';
import FavoriteLocation from './FavoritesLocation';

import { fetchFavorites } from '../../services/api-requests';

import type { TOffer } from '../../types/offers';

function Favorites(): JSX.Element {
  const [favoriteOffers, setFavoriteOffers] = useState<TOffer[]>([]);
  const [isLoading, setLoadingStatus] = useState(true);
  const [isNeedUpdate, setNeedUpdateStatus] = useState(false);

  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  useEffect(() => {
    fetchFavorites()
      .then((result) => {
        setFavoriteOffers(result);
      })
      .finally(() => {
        setLoadingStatus(false);
        setNeedUpdateStatus(false);
      });
  }, [isNeedUpdate]);

  function updateFavoriteOffers() {
    setNeedUpdateStatus(true);
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {isLoading && <Spinner />}
        {cities.map((city) => (
          <FavoriteLocation
            places={favoriteOffers.filter((offer) => offer.city.name === city)}
            location={city}
            onToggleFavorite={updateFavoriteOffers}
            key={city}
          />
        ))}
      </ul>
    </section>
  );
}

export default Favorites;
