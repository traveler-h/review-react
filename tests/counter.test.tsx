//counter.test.tsx
import * as React from 'react';
import Counter from '../src/components/Counter';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
afterEach(cleanup);
describe('Counter /', () => {
    it('the count should be 1 when you click the increase button once', async () => {
        // render
        const { getByTestId, getByText } = render(<Counter />);
        // act
        const counter = getByText('0');
        const increaseButton = getByTestId('increase-button');
        fireEvent.click(increaseButton);
        // assert
        expect(counter.textContent).toEqual('1');
        // 异步API测试
    });
    it('decrements the count through redux', () => {
        const { getByText, getByTestId } = render(<Counter />);
        const decreaseButton = getByTestId('decrease-btn');
        const counter = getByText('0');
        fireEvent.click(decreaseButton);
        expect(counter.textContent).toEqual('-1');

    });
    it('increment-asyn the count through redux', async () => {
        const { getByText, getByTestId } = render(<Counter />);
        const counter = getByText('0');
        const delayIncreaseButton = getByTestId('delay-increase-button');
        fireEvent.click(delayIncreaseButton);
        await waitFor(() => expect(counter).toHaveTextContent('1'));

    });
})

