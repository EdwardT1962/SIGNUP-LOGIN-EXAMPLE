import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './LoginPage'; // Adjust the path as needed

// Test rendering of the registration form
test('renders registration form', () => {
  render(<LoginPage />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

// Test input validation for email
test('shows error message for invalid email', () => {
  render(<LoginPage />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  // Assuming you show an error message with the text "Invalid email"
  expect(screen.getByText('Invalid email')).toBeInTheDocument();
});

// Test form submission with valid input
test('submits the form with valid input', () => {
  render(<LoginPage />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  // Add assertions based on what should happen after submission
  // For example, you might check for a success message or redirection
});
