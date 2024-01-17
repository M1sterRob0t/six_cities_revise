import { AuthStatus } from '../../constants';
import { TCity } from '../../types/map';
import { TOffer } from '../../types/offers';

export type TState = {
  city: TCity;
  offers: TOffer[];
  authStatus: AuthStatus;
  isDataLoading: boolean;
  offer: TOffer | null;
};
