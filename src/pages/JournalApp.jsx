import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/layout/Navbar";
import TradingRules from "@/components/rules/TradingRules";
import StrategyAnalysis from "@/components/strategy/StrategyAnalysis";
import LogTrade from "@/components/trades/LogTrade";
import TradeHistory from "@/components/trades/TradeHistory";
import { useState } from "react";

/**
 * JournalApp - main app after sign-in
 * props:
 *   preview (bool) - if true, render blurred preview
 *   user (string) - username to show
 */
const JournalApp = ({ preview, user }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  if (preview) {
    return (
      <div className="h-full w-full flex items-center justify-center opacity-70 text-gray-400 text-xl">
        Your Trading Journal Dashboard (preview)
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard user={user} />;
      case "log":
        return <LogTrade />;
      case "history":
        return <TradeHistory />;
      case "strategy":
        return <StrategyAnalysis />;
      case "rules":
        return <TradingRules />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col bg-gradient-to-br from-[#061026] via-[#071226] to-[#071026] text-gray-100">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
      <div className="flex-1 p-8 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default JournalApp;
