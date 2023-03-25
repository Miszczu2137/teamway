export type Question = {
  id: number;
  name: string;
};

export type Answer = {
  id: number;
  questionId: number;
  name: string;
};

export type Result = {
  id: number;
  name: string;
  description: string;
};