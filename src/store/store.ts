import { configureStore } from '@reduxjs/toolkit';
import { requireAuth } from './actions';
import { AuthStatus } from '../constants';
import { createApi } from '../services/api';
import { rootReducer } from './root-reducer';

const api = createApi(() => store.dispatch(requireAuth(AuthStatus.NoAuth)));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
