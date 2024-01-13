import { mockPlaces } from '../../mock';
import FavoriteLocation from '../FavoritesLocation';

function Favorites(): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <FavoriteLocation places={mockPlaces} location={mockPlaces[0].city.name}/>
      </ul>
    </section>
  );
}

export default Favorites;
