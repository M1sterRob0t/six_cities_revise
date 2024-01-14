import { TOffer } from '../../types/offers';
import Card from '../UI/Card';

interface IPlacesList {
  places: TOffer[];
}

function PlacesList({places}: IPlacesList): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((el) => <Card parentName='cities' place={el} key={el.id}/>)}
    </div>
  );
}

export default PlacesList;
