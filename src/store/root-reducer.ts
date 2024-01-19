import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './reducers/user-reducer/user-reducer';
import { offersReducer } from './reducers/offers-reducer/offers-reducer';

export enum NameSpace {
  user = 'USER',
  main = 'MAIN',
}
export const rootReducer = combineReducers({
  [NameSpace.user]: userReducer,
  [NameSpace.main]: offersReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
