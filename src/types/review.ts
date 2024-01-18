import { TUser, TServerUser } from './user';

export type TReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: TUser;
};

export type TServerReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: TServerUser;
};

export type TReviewPost = {
  comment: string;
  rating: number;
};
