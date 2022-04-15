import React from 'react';
import { render, screen } from '@testing-library/react';
import EnigmaMachine from './EnigmaMachine';

test('renders learn react link', () => {
  render(<EnigmaMachine />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
