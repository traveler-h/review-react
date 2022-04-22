/*
    该文件用于汇总所有的reducer为一个总的reducer
*/
// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from 'redux';
// 持久化配置
import storage from 'redux-persist/lib/storage';

// 引入为City组件服务的reducer
import city from './city';
// 引入Count组件服务的reducer
import count from './count';
export const persistConfig = {
    key: 'city',
    storage: storage,
    // 白名单：需要持久化的reducer
    whitelist: ['city']
};

// 汇总所有的reducer变为一个总的reducer
export default combineReducers({
    city: city,
    count: count
});
