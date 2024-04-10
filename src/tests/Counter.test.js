import React from 'react';
//importing necessary testing utilities
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
});

test('renders counter message', () => {
    const message = screen.getByText(/Counter/i);
    // ensuring that the message is present 
    expect(message).toBeInTheDocument();
});

test('initial count starts at 0', () => {
    const initialCountElement = screen.getByTestId('count');
    //ensuring that the starting count is 0
    expect(initialCountElement.textContent).toBe('0');
});

test('clicking + button increments the count', () => {
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    const countElement = screen.getByTestId('count');
    //ensuring that count increases by 1
    expect(countElement.textContent).toBe('1');
});

test('clicking - button decrements the count', () => {
    const subtractButton = screen.getByText('-');
    fireEvent.click(subtractButton);
    const countElement = screen.getByTestId('count');
    //ensuring that count decreases by 1
    expect(countElement.textContent).toBe('-1');
});
