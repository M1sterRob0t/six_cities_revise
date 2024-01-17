import { useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch } from 'redux';

import Map from '../UI/Map';
import PlacesList from '../PlacesList';
import Sorting from '../Sorting';
import Tabs from '../Tabs';
import { City, SortType, cityNames } from '../../constants';
import { changeCurrentCity } from '../../store/actions';

import type { TState } from '../../store/types/state';
import type { TActions } from '../../store/types/actions';
import type { TOffer } from '../../types/offers';
import type { TCity, TCityName, TPoint } from '../../types/map';
import Spinner from '../Spinner';

function getSortedOffers(offers: TOffer[], sortType: SortType): TOffer[] {
  const sortedOffers = offers.slice();

  switch (sortType) {
    case SortType.Popular:
      break;
    case SortType.PriceHigh:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case SortType.PriceLow:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case SortType.TopRated:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortedOffers;
}

const mapStateToProps = ({ city, offers, isLoading }: TState) => ({
  currentCity: city,
  currentOffers: offers.filter((offer) => offer.city.name === city.name),
  isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<TActions>) => ({
  onCityChange(newCity: TCity) {
    dispatch(changeCurrentCity(newCity));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Main({ currentOffers, currentCity, onCityChange, isLoading }: PropsFromRedux): JSX.Element {
  const [activePoint, setActivePoint] = useState<TPoint | null>(null);
  const [sortType, setSortType] = useState(SortType.Popular);

  const points: TPoint[] = currentOffers.map((offer) => ({ ...offer.location, id: offer.id }));
  const sortedOffers: TOffer[] = getSortedOffers(currentOffers, sortType);

  function onCardHover(offer: TOffer | null): void {
    setActivePoint(offer ? { ...offer.location, id: offer.id } : null);
  }

  function onTabChange(newCity: TCityName): void {
    onCityChange(City[newCity]);
  }

  function onSortTypeChange(newSortType: SortType): void {
    setSortType(newSortType);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs currentCity={currentCity.name} cities={cityNames} onChange={onTabChange} />
      <div className="cities">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentOffers.length} places to stay in {currentCity.name}
              </b>
              <Sorting currentSortType={sortType} onSortTypeChange={onSortTypeChange} />
              <PlacesList places={sortedOffers} onCardHover={onCardHover} />
            </section>
            <div className="cities__right-section">
              <Map
                city={currentCity}
                points={points}
                selectedPoint={activePoint}
                parentName="cities"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default connector(Main);
