import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';

import config from '../../config';
import { Question, Answer, Result } from '../../types';
import PsychoTestStep from './PsychoTestStep';
import PsychoTestResult from './PsychoTestResult';
import { shuffle } from '../../utils';

import './PsychoTest.scss';

export interface Test {
  id: number;
  name: string;
  questions: Question[];
  answers: Answer[];
  results: Result[];
}

const PsychoTest = () => {
  const [test, setTest] = useState<Test>();
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const getTests = async () => {
      const response = await axios.get(`${config.serverUrl}/tests`);
      setTest(response.data[0]);
    };

    getTests();
  }, []);

  if (!test) {
    return null;
  }

  const handleAnswerClick = (answer: Answer) => {
    if (step <= test.questions.length) {
      setAnswers([...answers, answer]);
      setStep(step + 1);
    }
  };

  const handleRetakeTestClick = () => {
    setStep(1);
  };

  return (
    <Stack className="psychoTest__container">
      <h1>{test.name}</h1>
      {step === test.questions.length + 1 && (
        <PsychoTestResult result={shuffle(test.results)[0]} onRetakeTest={handleRetakeTestClick} />
      )}
      {test && <PsychoTestStep test={test} step={step} onAnswerClick={handleAnswerClick} />}
    </Stack>
  );
};

export default PsychoTest;
