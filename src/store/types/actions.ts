import { TCity } from '../../types/map';
import { TOffer } from '../../types/offers';

export enum ActionType {
  ChangeCurrentCity = 'main/changeCurrentCity',
  SetOffers = 'main/setOffers',
}

export type TChangeCurrentCityAction = {
  type: ActionType.ChangeCurrentCity;
  payload: TCity;
}

export type TSetOffersAction = {
  type: ActionType.SetOffers;
  payload: TOffer[];
}

export type TActions = TChangeCurrentCityAction | TSetOffersAction;


