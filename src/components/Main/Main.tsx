import { useState } from 'react';

import Map from '../UI/Map';
import PlacesList from '../PlacesList';
import Sorting from '../Sorting';
import Tabs from '../Tabs';
import { TOffer } from '../../types/offers';
import { TCity, TPoint } from '../../types/map';

interface IMain {
  offers: TOffer[];
}

function Main({offers}: IMain): JSX.Element {
  const city: TCity = offers[0].city;
  const points: TPoint[] = offers.map((offer) => ({...offer.location, id: offer.id}));
  const [activePoint, setActivePoint] = useState<TPoint | null>(null);

  function onCardHover(offer: TOffer | null): void {
    setActivePoint(offer ? {...offer.location, id: offer.id} : null);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <Sorting />
            <PlacesList places={offers} onCardHover={onCardHover} />
          </section>
          <div className="cities__right-section">
            <Map city={city} points={points} selectedPoint={activePoint} parentName='cities'/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
