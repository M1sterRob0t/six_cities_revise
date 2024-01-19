import { createReducer } from '@reduxjs/toolkit';

import { AuthStatus } from '../../../constants';
import { requireAuth, requireLogout } from '../../actions';


type TUserReducer = {
  authStatus: AuthStatus;
}
const initialState: TUserReducer = {
  authStatus: AuthStatus.Unknown,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    });
});

export { userReducer };
