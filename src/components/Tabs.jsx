import { TABS } from "../data/mockData";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      {TABS.map((tab) => (
        <button
          key={tab}
          className={`tabBtn ${
            activeTab === tab ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}