import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { Routers } from '../src/router';


const renderWithRouter = (conponents: any) => {
    // const history = createMemoryHistory();
    return {
        ...render(
            <BrowserRouter>
                {conponents}
            </BrowserRouter>
        )
    };
};

it('should render the home page', () => {

    const { container, getByTestId } = renderWithRouter(<Routers />);
    const navbar = getByTestId('navbar');
    const link = getByTestId('Hello');

    expect(container.innerHTML).toContain('0');
    expect(navbar).toContain('link');
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
