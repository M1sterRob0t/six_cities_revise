import { TPlace } from '../../types/place';
import FavoriteCard from '../FavoriteCard';

interface IFavoriteLocation {
  places: TPlace[];
  location: string;
}

function FavoriteLocation({ location, places }: IFavoriteLocation): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => <FavoriteCard place={place} key={place.id}/>)}
      </div>
    </li>
  );
}

export default FavoriteLocation;
