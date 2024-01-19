import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import { checkAuthAction, fetchOffersAction } from './services/api-actions';
import { store } from './store/store';

import type { ThunkAppDispatch } from './store/types/thunk';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
