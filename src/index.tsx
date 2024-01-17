import ReactDOM from 'react-dom/client';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';

import { mockReviews } from './mock/reviews';
import { reducer } from './store/reducer';
import { createApi } from './services/api';
import { requireAuth } from './store/actions';
import { AuthStatus } from './constants';
import { ThunkAppDispatch } from './store/types/thunk';
import { checkAuthAction, fetchOffersAction } from './services/api-actions';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const api = createApi(
  () => store.dispatch(requireAuth(AuthStatus.NoAuth))
);

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api))
));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

root.render(
  <Provider store={store}>
    <App reviews={mockReviews} />
  </Provider>
);
