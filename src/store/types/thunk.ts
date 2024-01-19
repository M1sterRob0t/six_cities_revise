import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TState } from './state';
import { Action } from '@reduxjs/toolkit';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, TState, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<TState, AxiosInstance, Action>;
