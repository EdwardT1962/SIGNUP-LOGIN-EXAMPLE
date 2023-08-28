
import App from './App'; // Make sure the path is correct

import { render, screen } from '@testing-library/react';


test('renders main header', () => {
  render(<App />);
  const headerElements = screen.getAllByTestId('main-header');
  headerElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});
