import { ConnectedProps, connect } from 'react-redux';

import FavoriteLocation from './FavoritesLocation';

import type { TState } from '../../store/types/state';

const mapStateToProps = ({ offers, isDataLoading }: TState) => ({
  isDataLoading,
  favoriteOffers: offers.filter((offer) => offer.isFavorite),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Favorites({ favoriteOffers }: PropsFromRedux): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {!!favoriteOffers.length && <FavoriteLocation places={favoriteOffers} location={favoriteOffers[0].city.name} />}
      </ul>
    </section>
  );
}

export default connector(Favorites);
