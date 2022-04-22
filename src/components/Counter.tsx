//counter.tsx
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const delayCount = () => (
        setTimeout(() => {
            setCount(count + 1);
        }, 500)
    );
    return (
        <div>
            <div data-testid='count-announcement'>{count}</div>
            <button
                data-testid='increase-button'
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                increase count
            </button>
            <button
                data-testid='delay-increase-button'
                onClick={delayCount}
            >
                delay-increase count
            </button>
            <button data-testid='decrease-btn' onClick={() => {
                setCount(count - 1);
            }}>decrease count</button>
        </div>
    );
};
export default Counter;
