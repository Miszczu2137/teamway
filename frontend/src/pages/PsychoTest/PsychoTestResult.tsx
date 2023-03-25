import React from 'react';
import Button from '@mui/material/Button';

import { Result } from '../../types';

import './PsychoTestResult.scss';

export interface PsychoTestResultProps {
  result: Result;
  onRetakeTest: () => void;
}

const PsychoTestResult = ({ result, onRetakeTest }: PsychoTestResultProps) => {
  return (
    <div className="psychoTestResult__container">
      <div className="psychoTestResult__name">{result?.name}</div>
      <div className="psychoTestResult__description">{result.description}</div>
      <Button onClick={onRetakeTest} variant="contained">
        Retake test
      </Button>
    </div>
  );
};

export default PsychoTestResult;
