import { render, screen } from "@testing-library/react";
import About from "./about";

test('renders about page', () => {

    render(<About />);
    
    //Check header text
    const headingElement = screen.getByRole('heading', {level: 1});
    expect(headingElement).toHaveTextContent(/About Us/i);
    

    //Check first paragraph text
    const firstParagraphTextMatch = (content, element) => {
        return content.includes('was born from a simple idea') && element.tagName === 'P';
    };

    const firstParagraphElement = screen.getByText(firstParagraphTextMatch);
    expect(firstParagraphElement).toBeInTheDocument();


    //Check second paragraph text
    const secondParagraphTextMatch = (content, element) => {
        return content.includes('Founded with a passion for timeless fashion') && element.tagName === 'P';
    };

    const secondParagaphElement = screen.getByText(secondParagraphTextMatch);
    expect(secondParagaphElement).toBeInTheDocument();


    //Check third paragraph text
    const thirdParagraphTextMatcher = (content, element) => {
        return content.includes('We’re inspired by clean lines') && element.tagName === 'P';
    };

    const thirdParagraphElement = screen.getByText(thirdParagraphTextMatcher);
    expect(thirdParagraphElement).toBeInTheDocument();


    //Check fourth paragraph text
    const fourthParagraphTextMatcher = (content, element) => {
        return content.includes('At Radiant Threads, we don’t just sell clothes') && element.tagName === 'P';
    };

    const fourthParagraphElement = screen.getByText(fourthParagraphTextMatcher);
    expect(fourthParagraphElement).toBeInTheDocument();


    //Check signoff text
    const signOffElement = screen.getByText(/Stay radiant. Stay you./i);
    expect(signOffElement).toBeInTheDocument();

});