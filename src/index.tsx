import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { mockOffers } from './mock/offers';
import { mockReviews } from './mock/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <App offers={mockOffers} reviews={mockReviews} />
);
