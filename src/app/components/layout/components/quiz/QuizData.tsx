// components/quiz/quizData.ts
import { Quiz } from "./types";

export const quizzes: Quiz[] = [
  {
    id: "1",
    title: "JavaScript Fundamentals",
    description:
      "Test your knowledge of JavaScript basics including variables, functions, and control structures.",
    category: "JavaScript",
    difficulty: "beginner",
    timeLimit: 0.5,
    createdAt: "2024-01-01T00:00:00Z",
    readMoreURL: "https://www.google.com/",
    questions: [
      {
        id: "1-1",
        question:
          "What is the correct way to declare a variable in JavaScript?",
        options: [
          "var myVariable;",
          "variable myVariable;",
          "v myVariable;",
          "declare myVariable;",
        ],
        correctAnswer: 0,
        explanation:
          'The "var" keyword is used to declare variables in JavaScript. Modern JavaScript also supports "let" and "const".',
      },
      {
        id: "1-2",
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Integer", "Undefined"],
        correctAnswer: 2,
        explanation:
          "JavaScript has Number type, not Integer. JavaScript numbers can be integers or floating-point.",
      },
    ],
  },
  {
    id: "2",
    title: "JavaScript Fundamentals II",
    description:
      "Test your knowledge of JavaScript basics including variables, functions, and control structures.",
    category: "JavaScript",
    difficulty: "beginner",
    timeLimit: 15,
    createdAt: "2024-01-01T00:00:00Z",
    readMoreURL: "https://www.w3schools.com/js/",
    questions: [
      {
        id: "1-1",
        question:
          "What is the correct way to declare a variable in JavaScript?",
        options: [
          "var myVariable;",
          "variable myVariable;",
          "v myVariable;",
          "declare myVariable;",
        ],
        correctAnswer: 0,
        explanation:
          'The "var" keyword is used to declare variables in JavaScript. Modern JavaScript also supports "let" and "const".',
      },
      {
        id: "1-2",
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Integer", "Undefined"],
        correctAnswer: 2,
        explanation:
          "JavaScript has Number type, not Integer. JavaScript numbers can be integers or floating-point.",
      },
    ],
  },
];
