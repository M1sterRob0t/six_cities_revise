import { changeCurrentCity, requireAuth, requireLogout, setOffers, startLoading } from '../actions';

export enum ActionType {
  ChangeCurrentCity = 'main/changeCurrentCity',
  SetOffers = 'main/setOffers',
  RequireAuth = 'user/requireAuth',
  RequireLogout = 'user/requireLogout',
  SetOffer = 'property/setOffer',
  StartLoading = 'offers/startLoading',
  SetOffersNearby = 'offers/setOffersNearby',
}

export type TActions =
  | ReturnType<typeof changeCurrentCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof requireAuth>
  | ReturnType<typeof startLoading>;
