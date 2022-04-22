/*
    1.该文件是用于创建一个为City组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

import { CityAction } from '../../state/Store';
import { CHANGE_CITY } from '../constant';
// 初始状态赋值
const initState = '北京';

// 城市
export default function cityReducer(preState = initState, action: CityAction) {
    const { type, data } = action;
    switch (type) {
        case CHANGE_CITY:
            return data;
        default:
            return preState;
    }

}
