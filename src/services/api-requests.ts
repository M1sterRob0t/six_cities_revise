import { offerAdapter, offersAdapter, reviewsAdapter } from './adapters';
import { ApiRoute } from '../constants';
import { createApi } from './api';
import { store } from '../store/store';
import { AuthStatus } from '../constants';
import { requireAuth } from '../store/actions';

import type { TReview, TReviewPost, TServerReview } from '../types/review';
import type { TOffer, TServerOffer } from '../types/offers';

const api = createApi(
  () => store.dispatch(requireAuth(AuthStatus.NoAuth))
);

export const fetchOffer = async (id: string): Promise<TOffer> => {
  const { data } = await api.get<TServerOffer>(`${ApiRoute.Offers}/${id}`);
  const offer = offerAdapter(data);
  return offer;
};

export const fetchReviews = async (id: string): Promise<TReview[]> => {
  const { data } = await api.get<TServerReview[]>(`${ApiRoute.Comments}/${id}`);
  const reviews = reviewsAdapter(data);
  return reviews;
};

export const fetchOffersNearby = async (id: string): Promise<TOffer[]> => {
  const { data } = await api.get<TServerOffer[]>(`${ApiRoute.Offers}/${id}/nearby`);
  const offers = offersAdapter(data);
  return offers;
};

export const postReview = async (id: string, review: TReviewPost): Promise<TReview[]> => {
  const { data } = await api.post<TServerReview[]>(`${ApiRoute.Comments}/${id}`, review);
  const reviews = reviewsAdapter(data);
  return reviews;
};


