import { changeCurrentCity, requireAuth, requireLogout, setOffer, setOffers, startLoading } from '../actions';

export enum ActionType {
  ChangeCurrentCity = 'main/changeCurrentCity',
  SetOffers = 'main/setOffers',
  RequireAuth = 'user/requireAuth',
  RequireLogout = 'user/requireLogout',
  SetOffer = 'property/setOffer',
  StartLoading = 'offers/startLoading',
}

export type TActions =
  | ReturnType<typeof changeCurrentCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof requireAuth>
  | ReturnType<typeof setOffer>
  | ReturnType<typeof startLoading>;
