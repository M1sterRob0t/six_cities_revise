import { ApiRoute, AuthStatus } from '../constants';
import { requireAuth, setOffers } from '../store/actions';
import { ThunkActionResult } from '../store/types/thunk';
import { TAuthInfo } from '../types/auth-info';
import { TOffer, TServerOffer } from '../types/offers';
import { offersAdapter } from './adapters';
import { dropToken, saveToken } from './token';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<TServerOffer[]>(ApiRoute.Offers);
    const offers = offersAdapter(data);
    dispatch(setOffers(offers));
  };


export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<TOffer[]>(ApiRoute.Login)
      .then(() => {
        dispatch(requireAuth(AuthStatus.Auth));
      });
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
