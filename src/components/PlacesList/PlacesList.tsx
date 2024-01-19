import { memo } from 'react';
import { TOffer } from '../../types/offers';
import Card from '../UI/Card';

interface IPlacesList {
  places: TOffer[];
  onCardHover: (offer: TOffer | null) => void;
}

function PlacesList({ places, onCardHover }: IPlacesList): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <Card parentName="cities" offer={place} key={place.id} onHover={onCardHover} />
      ))}
    </div>
  );
}

export default memo(PlacesList);
