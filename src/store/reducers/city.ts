import { CHANGE_CITY } from '../constant'
const initState: string = '北京'

export default function cityReducer(preState = initState, action: any) {
    const { type, data } = action;
    console.log(type, data)
    switch (type) {
        case CHANGE_CITY:
            return data
        default:
            return preState
    }

}
