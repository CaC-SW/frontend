"use client";

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { useState } from "react";

interface SidebarWrapperProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function SidebarWrapper({
  activeItem,
  setActiveItem,
}: SidebarWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar on large screens */}
      <div className="hidden lg:block">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>

      {/* Mobile Drawer Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
      >
        <IoMenuOutline className="text-2xl text-black" />
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Slide-in Sidebar */}
          <div className="relative z-10 bg-[#101010] h-full w-[288px]">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl"
              >
                <IoCloseOutline />
              </button>
            </div>
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
          </div>
        </div>
      )}
    </>
  );
}
