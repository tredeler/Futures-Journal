import React from "react";

const TradingRules = () => {
  return (
    <div className="glass-card p-6 max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Trading Rules</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Always set a stop loss before entering a trade.</li>
        <li>Only take trades that meet your checklist.</li>
        <li>Never risk more than 1% per trade.</li>
        <li>Review trades daily and record emotion & lessons.</li>
      </ul>
    </div>
  );
};

export default TradingRules;
