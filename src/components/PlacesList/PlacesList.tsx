import { TPlace } from '../../types/place';
import Card from '../Card';

interface IPlacesList {
  places: TPlace[];
}

function PlacesList({places}: IPlacesList): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((el) => <Card place={el} key={el.id}/>)}
    </div>
  );
}

export default PlacesList;
