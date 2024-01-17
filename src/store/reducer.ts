import { AuthStatus, City } from '../constants';
import type { TActions } from './types/actions';
import type { TState } from './types/state';
import { ActionType } from './types/actions';

const initialState: TState = {
  city: City.Amsterdam,
  offers: [],
  authStatus: AuthStatus.Unknown,
  isLoading: true,
};

function reducer(state: TState = initialState, action: TActions): TState {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return { ...state, city: action.payload };
    case ActionType.SetOffers:
      return { ...state, offers: action.payload, isLoading: false };
    case ActionType.RequireAuth:
      return { ...state, authStatus: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authStatus: AuthStatus.NoAuth };
    default:
      return state;
  }
}

export { reducer };
