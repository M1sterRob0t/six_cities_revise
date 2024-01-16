import ReactDOM from 'react-dom/client';
import App from './components/App';
import { mockOffers } from './mock/offers';
import { mockReviews } from './mock/reviews';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = createStore(reducer, composeWithDevTools());

root.render(
  <Provider store={store}>
    <App offers={mockOffers} reviews={mockReviews} />
  </Provider>
);
