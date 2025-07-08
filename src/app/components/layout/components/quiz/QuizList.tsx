"use client";

import { quizzes } from "./QuizData";
import { Quiz } from "./types";

export default function QuizList({
  onSelect,
}: {
  onSelect: (quiz: Quiz) => void;
}) {
  const hasQuizzes = quizzes.length > 0;

  return (
    <div className="px-4 md:px-8 py-6 overflow-auto">
      {hasQuizzes ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => onSelect(quiz)}
              className="cursor-pointer max-h-52 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-200 p-6 flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSelect(quiz)}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {quiz.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {quiz.description}
              </p>
              <div className="text-xs text-gray-500 space-x-4">
                <span>🗂 {quiz.category}</span>
                <span>🎯 {quiz.difficulty}</span>
                <span>⏱ {quiz.timeLimit} min</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-24 text-lg">
          No quizzes scheduled yet.
        </div>
      )}
    </div>
  );
}
