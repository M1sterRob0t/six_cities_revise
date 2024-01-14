import { TPlace } from '../../types/place';
import Card from '../Card';

interface IPlacesNearby {
  places: TPlace[];
}

function PlacesNearby({ places }: IPlacesNearby): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {places.map((place) => <Card place={place} key={place.id}/>)}
        </div>
      </section>
    </div>
  );
}

export default PlacesNearby;
