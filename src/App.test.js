// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ScribRelay title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ScribRelay/i);
    expect(titleElement).toBeInTheDocument();
});
