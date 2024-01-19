import { NameSpace } from '../../root-reducer';
import { TState } from '../../types/state';
import { TOffer } from '../../../types/offers';
import { TCity } from '../../../types/map';

export const getOffers = (state: TState): TOffer[] => state[NameSpace.main].offers;
export const getLoadingStatus = (state: TState): boolean => state[NameSpace.main].isDataLoading;
export const getCity = (state: TState): TCity => state[NameSpace.main].city;

export const getCurrentOffers = (state: TState): TOffer[] => {
  const offers = state[NameSpace.main].offers;
  const currentCity = state[NameSpace.main].city;
  return offers.filter((offer) => offer.city.name === currentCity.name);
};
