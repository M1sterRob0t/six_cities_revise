import { mockOffers } from '../mock/offers';
import { City } from '../utils/constants';
import type { TActions } from './types/actions';
import type { TState } from './types/state';
import { ActionType } from './types/actions';

const initialState: TState = {
  city: City.Amsterdam,
  offers: mockOffers,
};

function reducer(state: TState = initialState, action: TActions): TState {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return { ...state, city: action.payload };
    case ActionType.SetOffers:
      return { ...state, offers: action.payload };
    default:
      return state;
  }
}

export {reducer};
