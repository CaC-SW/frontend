interface ExpenseProps {
  category: string;
  time: string;
  note: string;
  amount: number;
  color: string;
  icon: string;
}

export default function ExpenseItem({
  category,
  time,
  note,
  amount,
  color,
  icon,
}: ExpenseProps) {
  return (
    <div className="flex justify-between items-center">
      {/* Left: Icon + Details */}
      <div className="flex items-center space-x-4">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl ${color}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm">{category}</h3>
          <p className="text-xs text-gray-400">
            {time} • {note}
          </p>
        </div>
      </div>

      {/* Right: Amount */}
      <div className="font-semibold text-sm text-gray-800">
        {amount.toLocaleString()}
      </div>
    </div>
  );
}
