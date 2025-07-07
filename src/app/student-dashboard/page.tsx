"use client";

import { useState } from "react";
import SidebarWrapper from "../components/layout/SidebarWrapper";
import Dashboard from "../components/layout/components/dashboard/dashboard";

export default function Page() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <SidebarWrapper activeItem={activeItem} setActiveItem={setActiveItem} />
      {activeItem === "Dashboard" && (
        <div className="flex items-center w-full h-full">
          <Dashboard />
        </div>
      )}
    </div>
  );
}
