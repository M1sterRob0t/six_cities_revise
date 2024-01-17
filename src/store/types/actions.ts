import { changeCurrentCity, requireAuth, requireLogout, setOffers } from '../actions';

export enum ActionType {
  ChangeCurrentCity = 'main/changeCurrentCity',
  SetOffers = 'main/setOffers',
  RequireAuth = 'user/requireAuth',
  RequireLogout = 'user/requireLogout',
}

export type TActions =
  | ReturnType<typeof changeCurrentCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof requireAuth>;
