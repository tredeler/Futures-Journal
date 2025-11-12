import React from "react";
import { FiHome, FiPlusCircle, FiList, FiBarChart2, FiBook } from "react-icons/fi";

const Navbar = ({ activeTab, setActiveTab, user }) => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <FiHome /> },
    { id: "log", label: "Log Trade", icon: <FiPlusCircle /> },
    { id: "history", label: "Trade History", icon: <FiList /> },
    { id: "strategy", label: "Strategy Analysis", icon: <FiBarChart2 /> },
    { id: "rules", label: "Trading Rules", icon: <FiBook /> },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 px-6 py-4 backdrop-blur-lg bg-white/4 border-b border-white/10 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
          FJ
        </div>
        <div>
          <div className="text-lg font-semibold tracking-wide text-cyan-300">Futures Journal</div>
          <div className="text-xs text-gray-300">{user ? `Signed in as ${user}` : "Journal mode"}</div>
        </div>
      </div>

      <nav className="flex-1 flex justify-center gap-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
              activeTab === t.id
                ? "bg-white/10 text-white shadow-md border border-cyan-400/20"
                : "text-gray-300 hover:bg-white/5"
            }`}
          >
            <span className="text-xl text-cyan-300">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button className="px-3 py-2 rounded-lg bg-white/6 hover:bg-white/8 text-sm">Settings</button>
      </div>
    </header>
  );
};

export default Navbar;
