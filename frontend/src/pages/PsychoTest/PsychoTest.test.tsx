import { render, screen } from '@testing-library/react';

import PsychoTest from './PsychoTest';

it('loads and displays psychological test', async () => {
  // ARRANGE
  render(<PsychoTest />);

  // ACT
  await screen.findByRole('heading');
  await screen.findAllByRole('button');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Psychological Test');
  expect(screen.getAllByRole('button').length).toBe(4);
});
