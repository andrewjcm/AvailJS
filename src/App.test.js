import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app-form', () => {
  render(<App />);
  const formElem = screen.getByTestId("app-form");
  expect(formElem).toBeInTheDocument();
});
