import Image from "next/image";

const navItems = [
  "Dashboard",
  "Job Postings",
  "SHL Practice",
  "Interview Prep",
  "Mock Test",
  "Contact CAC",
];

export default function Sidebar({ activeItem, setActiveItem }: any) {
  return (
    <div className="w-[288px] min-h-scree text-white px-[40px] py-[48px] flex flex-col relative font-sans">
      {/* User */}
      <div className="flex items-start flex-col space-x-[16px] mb-[64px]">
        <div className="relative w-[72px] h-[72px] my-5 rounded-2xl  overflow-hidden">
          <Image
            src="/profile.png"
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold">Username</p>
          <p className="text-base text-[#AFAFAF]">username@email.com</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-[24px]">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`text-left text-lg font-medium cursor-pointer ${
              activeItem === item ? "text-white" : "text-[#ffffff80]"
            }  `}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
