import React, { useRef } from 'react';
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
import styled from 'styled-components';

// 引入action
import {
    decrement,
    increment,
    incrementAsync
} from '../store/actions/count';

// 定义UI组件
function Count(props: any) {

    const selectNumber = useRef<any>(null);

    // 加法
    const increment = () => {
        const { value } = selectNumber.current;
        props.increment(value * 1);
    };
    // 减法
    const decrement = () => {
        const { value } = selectNumber.current;
        props.decrement(value * 1);
    };
    // 奇数再加
    const incrementIfOdd = () => {
        const { value } = selectNumber.current;
        if (props.count % 2 !== 0) {
            props.increment(value * 1);
        }
    };
    // 异步加
    const incrementAsync = () => {
        const { value } = selectNumber.current;
        props.incrementAsync(value * 1, 500);
    };
    const StyleButton = styled.button`
        width: auto;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 13px;
        margin: 10px;
        background: #fff;
        border: 1px solid;
        min-width: 50px;
    `;
    const StyleSelect = styled.select`
        width: 100px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        font-weight: 500;
    `;

    return (
        <div>
            <h4 >当前求和为：<span data-testid="count">{props.count}</span></h4>
            <StyleButton data-testid="decrement" onClick={decrement}>-</StyleButton>
            <StyleSelect data-testid="select-number"  ref={selectNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </StyleSelect>
            <StyleButton data-testid="increment" onClick={increment}>+</StyleButton>
            <StyleButton data-testid="increment-if-odd" onClick={incrementIfOdd}>当前求和为奇数再加</StyleButton>
            <StyleButton data-testid="increment-async" onClick={incrementAsync}>异步加</StyleButton>
        </div>
    );
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    (state: any) => ({
        count: state.count
    }),
    { increment: increment, decrement: decrement, incrementAsync: incrementAsync }
)(Count);
