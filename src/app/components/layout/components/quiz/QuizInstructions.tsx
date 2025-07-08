"use client";

import { Quiz as QuizType } from "./types";

export default function QuizInstructions({
  quiz,
  onStart,
  onBack,
}: {
  quiz: QuizType;
  onStart: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
        <p className="text-gray-700 mb-6">{quiz.description}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Category: {quiz.category}</li>
          <li>Difficulty: {quiz.difficulty}</li>
          <li>Time Limit: {quiz.timeLimit} minutes</li>
          <li>Total Questions: {quiz.questions.length}</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-lg border cursor-pointer border-gray-300 hover:bg-gray-100 transition"
        >
          Back to Quizzes
        </button>
        <button
          onClick={onStart}
          className="px-5 py-2 rounded-lg cursor-pointer bg-black text-white hover:bg-gray-900 transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
