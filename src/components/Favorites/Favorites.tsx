import { TPlace } from '../../types/place';
import FavoriteLocation from '../FavoritesLocation';

interface IFavorites {
  offers: TPlace[];
}
function Favorites({offers}: IFavorites): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <FavoriteLocation places={offers} location={offers[0].city.name}/>
      </ul>
    </section>
  );
}

export default Favorites;
