import { render, screen } from '@testing-library/react';

import { Test } from './PsychoTest';
import PsychoTestStep, { PsychoTestStepProps } from './PsychoTestStep';

const test: Test = {
  id: 1,
  name: 'Psychological Test',
  questions: [{ id: 1, name: 'Question 1' }],
  answers: [{ id: 1, questionId: 1, name: 'Answer 1' }],
  results: [{ id: 1, name: 'Result 1', description: 'Result 1 description' }],
};

const props: PsychoTestStepProps = {
  test,
  step: 1,
  onAnswerClick: jest.fn(),
};

it('loads and displays psychological test step', async () => {
  // ARRANGE
  render(<PsychoTestStep {...props} />);

  // ASSERT
  await screen.findByText(test.questions[0].name);
  await screen.findByText(`A - ${test.answers[0].name}`);
});
