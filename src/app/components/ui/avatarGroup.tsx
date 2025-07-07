"use client";

import { IoLogoGithub } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

const avatars = {
  github: {
    profile: "https://github.com/",
    logo: IoLogoGithub,
  },
  leetcode: {
    profile: "https://leetcode.com/",
    logo: SiLeetcode,
  },
};

export default function AvatarGroup({ setActiveMode, activeMode }) {
  const handleAvatarClick = (platform: string) => {
    setActiveMode(platform);
  };

  return (
    <div className="flex items-center ">
      {Object.entries(avatars).map(([platform, data], idx) => (
        <button
          key={idx}
          onClick={() => handleAvatarClick(platform)}
          className={`w-10 h-10 rounded-full overflow-hidden cursor-pointer ${
            activeMode === platform ? "opacity-100" : "opacity-35"
          }`}
        >
          <data.logo className="h-full w-full" />
        </button>
      ))}
      <button className="w-8 h-8 rounded-full cursor-pointer bg-gray-100 text-gray-600 flex items-center justify-center text-xl font-bold border border-gray-300">
        +
      </button>
    </div>
  );
}
