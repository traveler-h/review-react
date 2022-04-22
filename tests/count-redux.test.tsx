// count.test.tsx
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import Count from '../src/components/Count';
import store from '../src/store';
// import App from 'App';
describe('Count /', () => {
    const renderWithRedux = (_components: any) => {
        return {
            ...render(<Provider store={store}>
                <Count />
            </Provider>),
            store
        };
    };
    afterEach(cleanup);
    it('checks initial state is equal to 0', () => {
        const { getByTestId } = renderWithRedux(<Count />);
        expect(getByTestId('count')).toHaveTextContent('0');
    });
    it('increments the count through redux', () => {
        const { getByTestId } = renderWithRedux(<Count />);
        expect(getByTestId('count')).toHaveTextContent('0');
        fireEvent.click(getByTestId('increment'));
        expect(getByTestId('count')).toHaveTextContent('1');
    });

    it('decrements the count through redux', () => {
        const { getByTestId } = renderWithRedux(<Count />);
        expect(getByTestId('count')).toHaveTextContent('1');
        fireEvent.click(getByTestId('decrement'));
        expect(getByTestId('count')).toHaveTextContent('0');
    });
    it('increment-asyn the count through redux', async () => {
        const { getByTestId } = renderWithRedux(<Count />);
        fireEvent.click(getByTestId('increment-async'));
        await waitFor(() => expect(getByTestId('count')).toHaveTextContent('1'));
    });
});
