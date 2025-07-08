interface StatBarProps {
  label: string;
  value: number;
}

export default function StatBar({ label, value }: StatBarProps) {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-700 mb-1">
        <span>{label}</span>
        <span className="font-semibold">{value.toLocaleString()}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
