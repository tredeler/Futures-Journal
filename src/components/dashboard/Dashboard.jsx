import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-chartisan-bg text-chartisan-text px-8 py-6">
      <h1 className="text-3xl font-bold text-chartisan-accent mb-2">
        Trading Dashboard
      </h1>
      <p className="text-chartisan-textMuted mb-8">
        Your complete performance overview
      </p>

      {/* Metrics Row */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total P&L", value: "+19.00 pts", sub: "1 total trades" },
          { label: "Win Rate", value: "100.0%", sub: "1W / 0L" },
          { label: "Avg Win", value: "19.00 pts", sub: "Avg Loss: 0.00 pts" },
          { label: "Top Emotion", value: "neutral", sub: "Most common state" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="glass-card bg-chartisan-surface/80 border border-chartisan-border rounded-2xl p-6 shadow-goldGlow"
          >
            <h3 className="text-sm text-chartisan-textMuted">{item.label}</h3>
            <p className="text-2xl font-semibold text-chartisan-accent mt-2">
              {item.value}
            </p>
            <span className="text-xs text-chartisan-textMuted mt-1 block">
              {item.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Chart and Recent Trades */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 glass-card p-6 bg-chartisan-surface/90 border border-chartisan-border rounded-2xl shadow-goldGlow">
          <h3 className="text-chartisan-accent font-semibold mb-4">
            Cumulative P&L (Points)
          </h3>
          <div className="h-64 flex items-center justify-center text-chartisan-textMuted">
            [Equity Chart Placeholder]
          </div>
        </div>

        <div className="glass-card p-6 bg-chartisan-surface/90 border border-chartisan-border rounded-2xl shadow-goldGlow">
          <h3 className="text-chartisan-accent font-semibold mb-4">
            Recent Trades
          </h3>
          <div className="flex justify-between items-center bg-chartisan-bg p-3 rounded-lg">
            <div>
              <p className="text-chartisan-text font-medium">MES</p>
              <p className="text-xs text-chartisan-textMuted">
                Oct 17, 2025 09:02
              </p>
            </div>
            <p className="text-chartisan-accent font-semibold">+19 pts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
