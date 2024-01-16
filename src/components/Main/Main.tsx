import { useState } from 'react';

import Map from '../UI/Map';
import PlacesList from '../PlacesList';
import Sorting from '../Sorting';
import Tabs from '../Tabs';
import { TOffer } from '../../types/offers';
import { TCity, TCityName, TPoint } from '../../types/map';
import { City, cityNames } from '../../utils/constants';

interface IMain {
  offers: TOffer[];
}

function Main({offers}: IMain): JSX.Element {
  const [activePoint, setActivePoint] = useState<TPoint | null>(null);
  const [currentCity, setCurrentCity] = useState<TCity>(City.Amsterdam);

  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const points: TPoint[] = currentOffers.map((offer) => ({...offer.location, id: offer.id}));

  function onCardHover(offer: TOffer | null): void {
    setActivePoint(offer ? {...offer.location, id: offer.id} : null);
  }

  function onTabChange(newCity: TCityName):void {
    setCurrentCity(City[newCity]);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs currentCity={currentCity.name} cities={cityNames} onChange={onTabChange} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
            <Sorting />
            <PlacesList places={currentOffers} onCardHover={onCardHover} />
          </section>
          <div className="cities__right-section">
            <Map city={currentCity} points={points} selectedPoint={activePoint} parentName='cities'/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
