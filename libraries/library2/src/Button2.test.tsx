import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button2 } from './Button2';

test('renders button', () => {
  render(<Button2 primary={false} size="medium" backgroundColor="red" label="test" />);
  const button = screen.getByText('test');
  expect(button).toBeTruthy();
});
