import { TCity } from '../types/map';
import { TOffer } from '../types/offers';
import { ActionType, TChangeCurrentCityAction, TSetOffersAction } from './types/actions';

export const changeCurrentCity = (newCity: TCity): TChangeCurrentCityAction => ({
  type: ActionType.ChangeCurrentCity,
  payload: newCity,
});

export const setOffers = (offers: TOffer[]): TSetOffersAction => ({
  type: ActionType.SetOffers,
  payload: offers,
});
