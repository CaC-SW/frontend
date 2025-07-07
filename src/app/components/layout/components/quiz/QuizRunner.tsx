"use client";

import { useEffect, useState } from "react";
import { Quiz, AnsweredQuestion } from "./types";

export default function QuizRunner({
  quiz,
  onFinish,
  onQuit,
}: {
  quiz: Quiz;
  onFinish: (answers: AnsweredQuestion[]) => void;
  onQuit: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit * 60);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(quiz.questions.length).fill(-1)
  );
  const [submitted, setSubmitted] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  useEffect(() => {
    if (submitted) return;
    if (timeLeft === 0) {
      handleSubmit();
      return;
    }
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, submitted]);

  const handleAnswer = (optionIdx: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const result: AnsweredQuestion[] = quiz.questions.map((q, i) => ({
      question: q,
      selectedAnswer: answers[i],
      isCorrect: answers[i] === q.correctAnswer,
      explanation: q.explanation,
    }));
    setSubmitted(true);
    onFinish(result);
  };

  const formatTime = (sec: number) =>
    `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

  // Quit confirmation overlay component
  const QuitConfirmation = () => (
    <div className="fixed inset-0 bg-[#0000004f] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg text-center">
        <h3 className="text-lg font-semibold mb-4">
          Are you sure you want to quit?
        </h3>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowQuitConfirm(false)}
            className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onQuit}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Timer and Quit button */}
      <div className="flex justify-between items-center mb-4 text-gray-600 text-sm">
        <span>
          Time Left: <strong>{formatTime(timeLeft)}</strong>
        </span>
        {!submitted && (
          <button
            onClick={() => setShowQuitConfirm(true)}
            className="text-red-600 hover:underline cursor-pointer"
          >
            Quit
          </button>
        )}
      </div>

      {/* Question and options */}
      <div className="flex-grow overflow-auto">
        {submitted ? (
          <div>
            <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
            <p className="text-gray-700 mb-6">
              You got{" "}
              {
                answers.filter(
                  (ans, i) => ans === quiz.questions[i].correctAnswer
                ).length
              }{" "}
              out of {quiz.questions.length} correct.
            </p>
            {/* Explanations for each question */}
            {quiz.questions.map((q, i) => (
              <div
                key={q.id}
                className="mb-4 p-4 rounded-lg border border-gray-200 bg-gray-50"
              >
                <p className="font-semibold mb-2">
                  Q{i + 1}: {q.question}
                </p>
                <p
                  className={`mb-2 ${
                    answers[i] === q.correctAnswer
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  Your answer:{" "}
                  {answers[i] === -1 ? "No answer" : q.options[answers[i]]}
                </p>
                {answers[i] !== q.correctAnswer && (
                  <p className="text-green-700">
                    Correct answer: {q.options[q.correctAnswer]}
                  </p>
                )}
                <p className="text-gray-600 italic mt-2">{q.explanation}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Q{currentIndex + 1}: {quiz.questions[currentIndex].question}
            </h2>
            <div className="space-y-3">
              {quiz.questions[currentIndex].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`block w-full text-left px-4 py-2 rounded-lg border transition
                    ${
                      answers[currentIndex] === idx
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      {!submitted && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
            className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          {currentIndex < quiz.questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((i) => i + 1)}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 cursor-pointer"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 cursor-pointer"
            >
              Submit Quiz
            </button>
          )}
        </div>
      )}

      {showQuitConfirm && <QuitConfirmation />}
    </div>
  );
}
