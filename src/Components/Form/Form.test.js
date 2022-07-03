import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders form data', () => {
  render(<Form />);
  const formElem = screen.getByTestId("form");
  expect(formElem).toBeInTheDocument();
});