import { render, screen } from "@testing-library/react";
import ThankYou from './thankyou';
import { BrowserRouter } from "react-router";


const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe('ThankYou Component', () => {
    test('renders thank you message', () => {
        renderWithRouter(<ThankYou />);
        expect(screen.getByText('Thank You!')).toBeInTheDocument();
        expect(screen.getByText(/RadiantThreads/i)).toBeInTheDocument();
        expect(screen.getByText('We hope you enjoy your new clothes!')).toBeInTheDocument();
    });

    test('renders the "Back to Store" button with correct link', () => {
        renderWithRouter(<ThankYou />);
        const button = screen.getByText('Back To Store');
        expect(button).toBeInTheDocument();

        const link = button.closest('a');
        expect(link).toHaveAttribute('href', '/shop');
    });
});