import { TOffer } from '../../../types/offers';
import FavoriteCard from '../FavoriteCard';

interface IFavoriteLocation {
  places: TOffer[];
  location: string;
  onToggleFavorite: () => void;
}

function FavoriteLocation({ location, places, onToggleFavorite }: IFavoriteLocation): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => <FavoriteCard place={place} key={place.id} onToggleFavorite={onToggleFavorite}/>)}
      </div>
    </li>
  );
}

export default FavoriteLocation;
