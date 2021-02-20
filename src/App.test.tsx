import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './components/Select/Select';

test('renders learn react link', () => {
  render(<Select />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
