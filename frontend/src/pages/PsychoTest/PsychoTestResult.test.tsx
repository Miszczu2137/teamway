import { render, screen } from '@testing-library/react';

import { Result } from './../../types';
import PsychoTestResult, { PsychoTestResultProps } from './PsychoTestResult';

const result: Result = {
  id: 1,
  name: 'Psychological Test Result',
  description: 'Psychological Test Description',
};

const props: PsychoTestResultProps = {
  result,
  onRetakeTest: jest.fn(),
};

it('loads and displays psychological test result', async () => {
  // ARRANGE
  render(<PsychoTestResult {...props} />);

  // ASSERT
  await screen.findByText(result.name);
  await screen.findByText(result.description);
});
