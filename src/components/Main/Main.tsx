import { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Map from '../UI/Map';
import PlacesList from '../PlacesList';
import Sorting from '../Sorting';
import Tabs from '../Tabs';
import CitiesContainer from './CitiesContainer';

import { City, SortType, cityNames } from '../../constants';
import { changeCurrentCity } from '../../store/actions';
import {
  getCity,
  getCurrentOffers,
  getLoadingStatus,
} from '../../store/reducers/offers-reducer/selectors';
import { AppDispatch } from '../../store/store';

import type { TOffer } from '../../types/offers';
import type { TCityName, TPoint } from '../../types/map';


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

function Main(): JSX.Element {
  const currentCity = useSelector(getCity);
  const currentOffers = useSelector(getCurrentOffers);
  const isDataLoading = useSelector(getLoadingStatus);

  const [activePoint, setActivePoint] = useState<TPoint | null>(null);
  const [sortType, setSortType] = useState(SortType.Popular);
  const dispatch = useDispatch<AppDispatch>();

  const points: TPoint[] = currentOffers.map((offer) => ({ ...offer.location, id: offer.id }));

  const sortedOffers: TOffer[] = useMemo(
    () => getSortedOffers(currentOffers, sortType),
    [currentOffers, sortType]
  );

  const onCardHover = useCallback((offer: TOffer | null): void => {
    setActivePoint(offer ? { ...offer.location, id: offer.id } : null);
  }, []);

  const onTabChange = useCallback(
    (newCity: TCityName): void => {
      dispatch(changeCurrentCity(City[newCity]));
    },
    [dispatch]
  );

  const onSortTypeChange = useCallback((newSortType: SortType): void => {
    setSortType(newSortType);
  }, []);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs currentCity={currentCity.name} cities={cityNames} onChange={onTabChange} />
      <div className="cities">
        <CitiesContainer isDataLoadding={isDataLoading} currentOffers={currentOffers}>
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
        </CitiesContainer>
      </div>
    </main>
  );
}

export default Main;
