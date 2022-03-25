import React, { useRef } from 'react'
//引入action
import {
    increment,
    decrement,
    incrementAsync
} from '../store/actions/count'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//定义UI组件
function Count(props: any) {

    const selectNumber = useRef<any>(null)

    //加法
    const increment = () => {
        const { value } = selectNumber.current
        props.increment(value * 1)
    }
    //减法
    const decrement = () => {
        const { value } = selectNumber.current
        props.decrement(value * 1)
    }
    //奇数再加
    const incrementIfOdd = () => {
        const { value } = selectNumber.current
        if (props.count % 2 !== 0) {
            props.increment(value * 1)
        }
    }
    //异步加
    const incrementAsync = () => {
        const { value } = selectNumber.current
        props.incrementAsync(value * 1, 500)
    }
    return (
        <div>
            <h4>当前求和为：{props.count}</h4>
            <button onClick={decrement}>-</button>
            <select ref={selectNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={increment}>+</button><br/>
            <button onClick={incrementIfOdd}>当前求和为奇数再加</button>
            <button onClick={incrementAsync}>异步加</button>
        </div>
    )
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    (state: any) => ({
        count: state.count
    }),
    { increment, decrement, incrementAsync }
)(Count)

