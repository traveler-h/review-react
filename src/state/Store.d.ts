import { type } from 'os';

import store from '../store';

// Redux 应用的状态
export type RootState = ReturnType<typeof store.getState>;

// CountReducers action
export interface CountAction {
    type: string;
    data: number;
}

// CityReducers action
export interface CityAction {
    type: string;
    data: string;
}
