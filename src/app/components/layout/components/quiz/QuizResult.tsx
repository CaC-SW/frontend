"use client";

import { Quiz as QuizType, AnsweredQuestion } from "./types";

export default function QuizResult({
  quiz,
  answers,
  onRetry,
  onBack,
}: {
  quiz: QuizType;
  answers: AnsweredQuestion[];
  onRetry: () => void;
  onBack: () => void;
}) {
  const correctCount = answers.filter((a) => a.isCorrect).length;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
        <button
          onClick={onBack}
          className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
        >
          Back to Quizzes
        </button>
      </div>
      <p className="mb-6 text-gray-700">
        You got {correctCount} out of {quiz.questions.length} correct.
      </p>
      <div className="overflow-y-auto flex-grow p-2 space-y-4 border border-gray-200 rounded-lg bg-gray-50">
        {answers.map(
          ({ question, selectedAnswer, isCorrect, explanation }, i) => (
            <div
              key={question.id}
              className="p-3 rounded-lg border border-gray-300 bg-white"
            >
              <p className="font-semibold mb-2">
                Q{i + 1}: {question.question}
              </p>
              <p className={isCorrect ? "text-green-700" : "text-red-700"}>
                Your answer:{" "}
                {selectedAnswer === -1
                  ? "No answer"
                  : question.options[selectedAnswer]}
              </p>
              {!isCorrect && (
                <p className="text-green-700">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
              )}
              <p className="text-gray-600 italic mt-1">{explanation}</p>
            </div>
          )
        )}
      </div>
      <div className="mt-4 flex justify-end space-x-4">
        <button
          onClick={onRetry}
          className="px-5 py-2 bg-black text-white rounded hover:bg-gray-900 cursor-pointer"
        >
          Retry Quiz
        </button>
        <button
          onClick={() => {
            window.open(
              quiz.readMoreURL || "https://www.w3schools.com/js/",
              "target_blank"
            );
          }}
          className="px-5 py-2 border rounded hover:bg-gray-100 cursor-pointer"
        >
          Read more
        </button>
      </div>
    </div>
  );
}
