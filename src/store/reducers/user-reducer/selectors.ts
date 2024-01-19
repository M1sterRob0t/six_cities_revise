import { TState } from '../../types/state';
import { NameSpace } from '../../root-reducer';

export const getUserAuthStatus = (state: TState) => state[NameSpace.user].authStatus;
