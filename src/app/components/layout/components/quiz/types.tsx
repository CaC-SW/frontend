// components/quiz/types.ts
export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  timeLimit: number;
  createdAt: string;
  readMoreURL: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface AnsweredQuestion {
  question: Question;
  selectedAnswer: number;
  isCorrect: boolean;
  explanation: string;
}
