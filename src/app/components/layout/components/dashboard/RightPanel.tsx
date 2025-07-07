import StatBar from "../../../ui/statBar";
import TipCard from "../../../ui/tipCard";

const categories = [
  { label: "Data Structures", amount: 78 },
  { label: "Algorithms", amount: 65 },
  { label: "Design Patterns", amount: 49 },
  { label: "C++", amount: 70 },
  { label: "AI/ML", amount: 23 },
];

export default function RightPanel() {
  return (
    <aside className="w-full h-full md:w-80 p-4 md:p-6 bg-[#F9FAFC] hidden lg:block  rounded-r-3xl">
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* Title */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Let's analyse your skills!
            </h2>
          </div>

          {/* Stat Bars */}
          <div className="space-y-4">
            {categories.map((item, idx) => (
              <StatBar key={idx} label={item.label} value={item.amount} />
            ))}
          </div>
        </div>

        {/* Tip Card */}
        <TipCard />
      </div>
    </aside>
  );
}
