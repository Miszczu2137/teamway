import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';

import config from './../../config';
import PsychoTest, { Test } from './PsychoTest';

const test: Test = {
  id: 1,
  name: 'Psychological Test',
  questions: [{ id: 1, name: 'Question 1' }],
  answers: [
    { id: 1, questionId: 1, name: 'Answer 1' },
    { id: 2, questionId: 1, name: 'Answer 2' },
    { id: 3, questionId: 1, name: 'Answer 3' },
    { id: 4, questionId: 1, name: 'Answer 4' },
  ],
  results: [{ id: 1, name: 'Result 1', description: 'Result 1 description' }],
};

const server = setupServer(
  rest.get(`${config.serverUrl}/tests`, (req, res, ctx) => {
    return res(ctx.json([test]));
  })
);

describe('Psychological Tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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
});
