import { TOffer } from '../../types/offers';
import Card from '../UI/Card';

interface IPlacesNearby {
  places: TOffer[];
}

function PlacesNearby({ places }: IPlacesNearby): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((place) => <Card parentName='near-places' offer={place} key={place.id} />)}
      </div>
    </section>
  );
}

export default PlacesNearby;
