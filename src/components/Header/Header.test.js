import { render, screen } from "@testing-library/react";
import { Header } from './Header';

describe('Header component', () => {
    test('render correctly', () => {
        render(<Header />)
        const pageHeading = screen.getByRole('heading', {
            level: 1,
        })
        expect(pageHeading).toBeInTheDocument()
    })
})