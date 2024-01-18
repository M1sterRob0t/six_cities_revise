import { AuthStatus } from '../constants';
import { TCity } from '../types/map';
import { TOffer } from '../types/offers';
import { ActionType } from './types/actions';

export const changeCurrentCity = (newCity: TCity) => ({
  type: ActionType.ChangeCurrentCity,
  payload: newCity,
} as const);

export const setOffers = (offers: TOffer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const requireAuth = (authStatus: AuthStatus) => ({
  type: ActionType.RequireAuth,
  payload: authStatus,
} as const);

export const startLoading = () => ({
  type: ActionType.StartLoading,
} as const);
