import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';
import { requireAuth } from './actions';
import { AuthStatus } from '../constants';
import { createApi } from '../services/api';

const api = createApi(
  () => store.dispatch(requireAuth(AuthStatus.NoAuth))
);

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api))
));
