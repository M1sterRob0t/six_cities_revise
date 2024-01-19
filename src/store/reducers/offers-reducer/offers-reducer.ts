import { createReducer } from '@reduxjs/toolkit';

import { City } from '../../../constants';
import { changeCurrentCity, startLoading, setOffers } from '../../actions';
import { TCity } from '../../../types/map';
import { TOffer } from '../../../types/offers';

type TOffersState = {
  city: TCity;
  offers: TOffer[];
  isDataLoading: boolean;
}

const initialState: TOffersState = {
  city: City.Amsterdam,
  offers: [],
  isDataLoading: false,
};

const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoading = false;
    })
    .addCase(startLoading, (state) => {
      state.isDataLoading = true;
    });
});

export { offersReducer };
