import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TState } from './state';
import { TActions } from './actions';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, TState, AxiosInstance, TActions>;
export type ThunkAppDispatch = ThunkDispatch<TState, AxiosInstance, TActions>;
