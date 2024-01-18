import { ApiRoute, AuthStatus } from '../constants';
import { requireAuth, setOffers, startLoading } from '../store/actions';
import { offersAdapter} from './adapters';
import { dropToken, saveToken } from './token';

import type { ThunkActionResult } from '../store/types/thunk';
import type { TAuthInfo } from '../types/auth-info';
import type { TServerOffer } from '../types/offers';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(startLoading());
    const { data } = await api.get<TServerOffer[]>(ApiRoute.Offers);
    const offers = offersAdapter(data);
    dispatch(setOffers(offers));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<TAuthInfo>(ApiRoute.Login);
    if (data) {
      dispatch(requireAuth(AuthStatus.Auth));
    }
  };

export const loginAction = ({email, password}: TAuthInfo): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: {token} } = await api.post<{token: string}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuth(AuthStatus.NoAuth));
  };

/* export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(startLoading());
    const { data } = await api.get<TServerOffer>(`${ApiRoute.Offers}/${id}`);
    const offer = offerAdapter(data);
    dispatch(setOffer(offer));
  }; */

/* export const fetchOffersNearby = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<TServerOffer[]>(`${ApiRoute.Offers}/${id}/nearby`);
    const offers = offersAdapter(data);
    dispatch(setOffersNearby(offers));
  }; */
