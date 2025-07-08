"use client";

import { useState } from "react";
import SidebarWrapper from "../components/layout/SidebarWrapper";
import Dashboard from "../components/layout/components/dashboard/dashboard";
import QuizList from "../components/layout/components/quiz/QuizList";
import Quiz from "../components/layout/components/quiz/quiz";
import { Quiz as QuizType } from "../components/layout/components/quiz/types";

export default function Page() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <SidebarWrapper activeItem={activeItem} setActiveItem={setActiveItem} />

      {activeItem === "Dashboard" && <Dashboard />}

      {activeItem === "Quiz" && !selectedQuiz && (
        <QuizList onSelect={(quiz) => setSelectedQuiz(quiz)} />
      )}
      <main className="flex-1 flex items-center p-6 overflow-auto">
        {activeItem === "Quiz" && selectedQuiz && (
          <Quiz quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
        )}
      </main>
    </div>
  );
}
