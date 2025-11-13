import React from 'react';
import { DollarSign, Target, TrendingUp, Award, BarChart3, ChevronRight } from 'lucide-react';

// ========================================
// PAGE HEADER COMPONENT
// ========================================
const PageHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h1 className="text-chartisan-text font-serif text-4xl mb-2 tracking-tight">{title}</h1>
    <p className="text-chartisan-textMuted text-lg font-light tracking-wide">{subtitle}</p>
  </div>
);

// ========================================
// METRIC CARD COMPONENT
// ========================================
const MetricCard = ({ icon: Icon, label, value, subtitle }) => (
  <div className="
    bg-chartisan-surface 
    border border-chartisan-border 
    rounded-xl 
    p-6 
    shadow-softGlow
    hover:shadow-goldEdge
    transition-all duration-300
    group
  ">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-lg bg-chartisan-gold/10 flex items-center justify-center shadow-goldInner group-hover:bg-chartisan-gold/20 transition-colors">
        <Icon className="w-6 h-6 text-chartisan-gold" />
      </div>
    </div>
    <p className="text-chartisan-textMuted text-sm uppercase tracking-widest mb-2">{label}</p>
    <p className="text-chartisan-text text-3xl font-light mb-1">{value}</p>
    {subtitle && <p className="text-chartisan-textMuted text-sm">{subtitle}</p>}
  </div>
);

// ========================================
// CHART PANEL COMPONENT
// ========================================
const ChartPanel = () => (
  <div className="bg-chartisan-surface border border-chartisan-border rounded-xl p-6 shadow-softGlow relative overflow-hidden">
    {/* Ambient gradient overlay */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-chartisan-gold/5 rounded-full blur-3xl pointer-events-none" />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-chartisan-text font-serif text-2xl mb-1">Cumulative P&L (Points)</h2>
          <p className="text-chartisan-textMuted text-sm">Performance trajectory over time</p>
        </div>
      </div>
      
      {/* Chart placeholder - ready for Recharts integration */}
      <div className="h-80 rounded-lg bg-chartisan-bg/50 border border-chartisan-border/50 flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-chartisan-gold/30 mx-auto mb-3" />
          <p className="text-chartisan-textMuted text-sm">Chart visualization ready</p>
          <p className="text-chartisan-textMuted text-xs mt-1">Integrate with Recharts or Chart.js</p>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// RECENT TRADES PANEL
// ========================================
const RecentTradesPanel = () => {
  const trades = [
    { symbol: 'MES', direction: 'LONG', date: 'Oct 17, 2025 09:02', pnl: 19.00, contracts: 1 },
    { symbol: 'ES', direction: 'SHORT', date: 'Oct 22, 2025 10:03', pnl: 8.75, contracts: 1 },
    { symbol: 'ES', direction: 'LONG', date: 'Oct 30, 2025 09:59', pnl: 4.50, contracts: 1 },
    { symbol: 'ES', direction: 'SHORT', date: 'Nov 6, 2025 09:04', pnl: -15.00, contracts: 1 },
    { symbol: 'ES', direction: 'SHORT', date: 'Nov 10, 2025 10:07', pnl: -19.50, contracts: 1 },
  ];

  return (
    <div className="bg-chartisan-surface border border-chartisan-border rounded-xl p-6 shadow-softGlow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-chartisan-text font-serif text-2xl">Recent Trades</h2>
        <button className="text-chartisan-gold text-sm hover:text-chartisan-goldSoft transition-colors flex items-center gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {trades.map((trade, index) => (
          <div 
            key={index} 
            className="
              flex items-center gap-4 p-4 rounded-lg 
              bg-chartisan-bg/50 border border-chartisan-border/50
              hover:border-chartisan-border hover:shadow-softGlow
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              trade.direction === 'LONG' 
                ? 'bg-chartisan-gold/10 text-chartisan-gold' 
                : 'bg-red-400/10 text-red-400'
            }`}>
              <TrendingUp className={`w-5 h-5 ${trade.direction === 'SHORT' ? 'rotate-180' : ''}`} />
            </div>

            {/* Trade Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-chartisan-text font-medium">{trade.symbol}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  trade.direction === 'LONG' 
                    ? 'bg-chartisan-gold/10 text-chartisan-gold' 
                    : 'bg-red-400/10 text-red-400'
                }`}>
                  {trade.direction}
                </span>
              </div>
              <p className="text-chartisan-textMuted text-xs">{trade.date}</p>
              <p className="text-chartisan-textMuted text-xs mt-0.5">{trade.contracts} contract</p>
            </div>

            {/* P&L */}
            <div className="text-right">
              <p className={`text-lg font-light ${
                trade.pnl > 0 ? 'text-chartisan-gold' : 'text-red-400'
              }`}>
                {trade.pnl > 0 ? '+' : ''}{trade.pnl.toFixed(2)} pts
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========================================
// MAIN DASHBOARD PAGE
// ========================================
const DashboardPage = () => {
  return (
    <div className="p-8">
      {/* Page Header */}
      <PageHeader 
        title="Trading Dashboard" 
        subtitle="Your complete performance overview" 
      />

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          icon={DollarSign} 
          label="Total P&L" 
          value="-2.25 pts" 
          subtitle="5 total trades"
        />
        <MetricCard 
          icon={Target} 
          label="Win Rate" 
          value="60.0%" 
          subtitle="3W / 2L"
        />
        <MetricCard 
          icon={TrendingUp} 
          label="Avg Win" 
          value="10.75 pts" 
          subtitle="Avg Loss: 17.25 pts"
        />
        <MetricCard 
          icon={Award} 
          label="Top Emotion" 
          value="neutral" 
          subtitle="Most common state"
        />
      </div>

      {/* Chart Section + Recent Trades */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartPanel />
        </div>
        <RecentTradesPanel />
      </div>
    </div>
  );
};

export default DashboardPage;