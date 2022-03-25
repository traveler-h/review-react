import { type } from 'os';
import store from '../store'

// Redux 应用的状态
export type RootState = ReturnType<typeof store.getState>

// CountReducers action
export type CountAction ={
    type: string
    data: number
}

// CityReducers action
export type CityAction = {
    type: string
    data: string
}
