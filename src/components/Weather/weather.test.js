import { render, screen } from "@testing-library/react";
import i18next from "i18next";
import Weather from './Weather';

describe('Weather component', () => {
    i18next()
    test('render correctly', () => {
        render(<Weather />)
        const inputLabel = screen.getByLabelText('Search city:', {
            selector: 'input',
        })
        expect(inputLabel).toBeInTheDocument()

        const placeHolderText = screen.getByPlaceholderText('Search city...');
        expect(placeHolderText).toBeInTheDocument();
    })
})