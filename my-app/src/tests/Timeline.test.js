
import { render, screen } from "@testing-library/react";
import { Timeline } from '../components/Timeline';
import '@testing-library/jest-dom'

// //// Timeline should contain three emlements named before, now and after
// test('Timeline should contain three emlements named before, now and after', () => {
//     render(<Timeline />)
//     expect(screen.getByText(/before/i)).toBeInTheDocument()
//     expect(screen.getByText(/now/i)).toBeInTheDocument()
//     expect(screen.getByText(/after/i)).toBeInTheDocument()
// })

//// Timeline should contain all hours
test('Timeline should contain all hours', () => {
    render(<Timeline />)
    for (let i = 0; i < 24; i++) {
        let element = screen.getByText(`${i}:00`)
        expect(element).toBeInTheDocument();
    }

})