import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
  render(<Button primary={false} size="medium" backgroundColor="red" label="test" />);
  const button = screen.getByText('test');
  expect(button).toBeTruthy();
});
