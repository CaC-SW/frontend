import MainContent from "./MainContent";
import RightPanel from "./RightPanel";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full p-4">
      <div className="flex-1 h-full">
        <MainContent />
      </div>
      <div className="w-full lg:w-80">
        <RightPanel />
      </div>
    </div>
  );
}
