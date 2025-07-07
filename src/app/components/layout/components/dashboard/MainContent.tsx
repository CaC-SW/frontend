"use client";

import { useState } from "react";

import ExpenseItem from "../../../ui/expenseItem";
import AvatarGroup from "../../../ui/avatarGroup";

const expenses = [
  {
    date: "Today",
    items: [
      {
        category: "Grocery",
        time: "5:12 pm",
        note: "Belanja di pasar",
        amount: -326800,
        color: "bg-blue-500",
        icon: "🛒",
      },
      {
        category: "Transportation",
        time: "5:12 pm",
        note: "Naik bus umum",
        amount: -15000,
        color: "bg-purple-500",
        icon: "🚍",
      },
      {
        category: "Housing",
        time: "5:12 pm",
        note: "Bayar Listrik",
        amount: -185750,
        color: "bg-orange-400",
        icon: "🏠",
      },
    ],
  },
  {
    date: "Monday, 23 March 2020",
    items: [
      {
        category: "Food and Drink",
        time: "5:12 pm",
        note: "Makan Steak",
        amount: -156000,
        color: "bg-red-500",
        icon: "🍔",
      },
      {
        category: "Entertainment",
        time: "5:12 pm",
        note: "Nonton Bioskop",
        amount: -35200,
        color: "bg-green-500",
        icon: "🎬",
      },
    ],
  },
];

export default function MainContent() {
  const [activePlatform, setActivePlatform] = useState<string | null>("github");

  return (
    <main className="flex-1 px-4 py-6 md:px-8 lg:px-10 rounded-3xl lg:rounded-r-none bg-white h-full transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Progress
          </h1>
          <p className="text-sm text-gray-400 mt-1">01 - 25 March, 2020</p>
        </div>
        <AvatarGroup
          setActiveMode={setActivePlatform}
          activeMode={activePlatform}
        />
      </div>

      {/* Placeholder Chart */}
      <div className="my-6 h-24 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg opacity-80">
        {activePlatform ? activePlatform : "No data to show"}
      </div>

      {/* Expenses */}
      <div className="space-y-6">
        {expenses.map((section) => (
          <div key={section.date}>
            <h2 className="text-sm font-medium text-gray-500 border-b border-gray-200 pb-1 mb-4">
              {section.date}
            </h2>
            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <ExpenseItem key={idx} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
