import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { Routers } from '../src/router';
import { Provider } from 'react-redux';
import store from '../src/store';

const renderWithRouter = (conponents: any) => {
    // const history = createMemoryHistory();
    return {
        ...render(
            <Provider store={store}>
                <BrowserRouter>
                    {conponents}
                </BrowserRouter>
            </Provider>

        )
    };
};

it('should render the home page', () => {

    const { container, getByTestId } = renderWithRouter(<Routers />);
    const navbar = getByTestId('navbar');
    const homeLink = getByTestId('Home');
    fireEvent.click(homeLink);
    expect(container.innerHTML).toMatch(new RegExp('0'));
    expect(navbar).toContainElement(homeLink);
});

// it('should navigate to the about page', () => {
//     const { container, getByTestId } = renderWithRouter(<Routers />);

//     fireEvent.click(getByTestId('about-link'));

//     expect(container.innerHTML).toMatch('About page');
// });

// it('should navigate to the contact page with the params', () => {
//     const { container, getByTestId } = renderWithRouter(<Routers />);

//     fireEvent.click(getByTestId('contact-link'));

//     expect(container.innerHTML).toMatch('John Doe');
// });
