import { createAction } from '@reduxjs/toolkit';

import { AuthStatus } from '../constants';
import { ActionType } from './types/actions';

import type { TCity } from '../types/map';
import type { TOffer } from '../types/offers';

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

export const changeCurrentCity = createAction(ActionType.ChangeCurrentCity, withPayloadType<TCity>());
export const setOffers = createAction(ActionType.SetOffers, withPayloadType<TOffer[]>());
export const requireAuth = createAction(ActionType.RequireAuth, withPayloadType<AuthStatus>());
export const requireLogout = createAction(ActionType.RequireLogout);
export const startLoading = createAction(ActionType.StartLoading);
