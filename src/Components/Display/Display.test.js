import { render, screen } from '@testing-library/react';
import Display from './Display';

test('renders display data', () => {
  render(<Display data={{fullName: "Test"}}/>);
  const displayElem = screen.getByTestId("display");
  expect(displayElem).toBeInTheDocument();
});