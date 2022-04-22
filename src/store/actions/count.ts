/*
    该文件专门为Count组件生成action对象
*/
import { DECREMENT, INCREMENT } from '../constant';

// 同步action，就是指action的值为Object类型的一般对象
export const increment = (data: any) => ({type: INCREMENT, data: data});
export const decrement = (data: any) => ({type: DECREMENT, data: data});

// 异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const incrementAsync = (data: any, time: number | undefined) => {
    return (dispatch: (arg0: { type: string; data: any }) => void) => {
        setTimeout(() => {
            dispatch(increment(data));
        }, time);
    };
};
