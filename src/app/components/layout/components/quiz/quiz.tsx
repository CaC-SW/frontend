"use client";

import { useState } from "react";
import { Quiz as QuizType, AnsweredQuestion } from "./types";
import QuizInstructions from "./QuizInstructions";
import QuizRunner from "./QuizRunner";
import QuizResult from "./QuizResult";

export default function Quiz({
  quiz,
  onBack,
}: {
  quiz: QuizType;
  onBack: () => void;
}) {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]);

  const handleFinish = (result: AnsweredQuestion[]) => {
    setAnswers(result);
    setFinished(true);
  };

  const handleRetry = () => {
    setAnswers([]);
    setFinished(false);
    setStarted(false);
  };

  // Wrapper container with fixed max width and height for consistent size
  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col h-[67%]">
      {!started && (
        <QuizInstructions
          quiz={quiz}
          onStart={() => setStarted(true)}
          onBack={onBack}
        />
      )}
      {started && !finished && (
        <QuizRunner quiz={quiz} onFinish={handleFinish} onQuit={onBack} />
      )}
      {finished && (
        <QuizResult
          quiz={quiz}
          answers={answers}
          onRetry={handleRetry}
          onBack={onBack}
        />
      )}
    </div>
  );
}
