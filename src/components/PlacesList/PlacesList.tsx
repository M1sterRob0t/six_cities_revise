import { useState } from 'react';
import { TOffer } from '../../types/offers';
import Card from '../UI/Card';

interface IPlacesList {
  places: TOffer[];
}

function PlacesList({places}: IPlacesList): JSX.Element {
  const [, setActiveCard] = useState<null | TOffer>(null);

  function onCardHover(offer: TOffer) {
    setActiveCard(offer);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((el) => <Card parentName='cities' offer={el} key={el.id} onHover={onCardHover} />)}
    </div>
  );
}

export default PlacesList;
