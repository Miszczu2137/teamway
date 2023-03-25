import React from 'react';
import Button from '@mui/material/Button';

import { Answer } from '../../types';
import { Test } from './PsychoTest';
import './PsychoTestStep.scss';

export interface PsychoTestStepProps {
  test: Test;
  step: number;
  onAnswerClick: (answer: Answer) => void;
}

const PsychoTestStep = ({ test, step, onAnswerClick }: PsychoTestStepProps) => {
  const alphabet = ['A', 'B', 'C', 'D'];
  const question = test.questions.find((question) => question.id === step);
  const answers = test.answers.filter((answer) => answer.questionId === question?.id);

  return (
    <div className="psychoTestStep__container">
      <div className="psychoTestStep__question">{question?.name}</div>
      <div className="psychoTestStep__answers">
        {answers &&
          answers.map((answer, i) => (
            <Button key={answer.id} className="psychoTestStep__answer" onClick={() => onAnswerClick(answer)}>
              {alphabet[i]} - {answer.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default PsychoTestStep;
