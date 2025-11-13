import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, History, BarChart3, BookOpen, User, TrendingUp } from 'lucide-react';
import DashboardPage from './DashboardPage';
import LogTradePage from './LogTradePage';
import TradeHistoryPage from './TradeHistoryPage';
import StrategyAnalysisPage from './StrategyAnalysisPage';
import TradingRulesPage from './TradingRulesPage';

// ========================================
// SIDEBAR COMPONENT
// ========================================
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/app/dashboard' },
    { id: 'log-trade', label: 'Log Trade', icon: PlusCircle, path: '/app/log-trade' },
    { id: 'history', label: 'Trade History', icon: History, path: '/app/history' },
    { id: 'strategy', label: 'Strategy Analysis', icon: BarChart3, path: '/app/strategy' },
    { id: 'rules', label: 'Trading Rules', icon: BookOpen, path: '/app/rules' },
  ];

  return (
    <aside className="w-64 bg-chartisan-surface border-r border-chartisan-border flex flex-col min-h-screen sticky top-0">
      {/* Logo / Brand */}
      <div className="p-6 border-b border-chartisan-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-chartisan-gold/10 flex items-center justify-center shadow-goldInner">
            <TrendingUp className="w-5 h-5 text-chartisan-gold" />
          </div>
          <div>
            <h1 className="text-chartisan-text font-serif text-xl tracking-tight">Chartisan</h1>
            <p className="text-chartisan-textMuted text-xs tracking-wide">Futures Journal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <p className="text-chartisan-textMuted text-xs uppercase tracking-widest mb-3 px-3">Navigation</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1
                transition-all duration-300
                ${isActive 
                  ? 'bg-chartisan-gold/10 text-chartisan-gold border-l-2 border-chartisan-gold' 
                  : 'text-chartisan-textMuted hover:text-chartisan-text hover:bg-chartisan-bg'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-light tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-chartisan-border">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-chartisan-bg transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-chartisan-gold/20 flex items-center justify-center">
            <User className="w-4 h-4 text-chartisan-gold" />
          </div>
          <div className="flex-1">
            <p className="text-chartisan-text text-sm">Trader</p>
            <p className="text-chartisan-textMuted text-xs">Track your journey</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

// ========================================
// MAIN JOURNAL APP CONTAINER
// ========================================
const JournalApp = () => {
  return (
    <div className="flex min-h-screen bg-chartisan-bg">
      {/* Sidebar - Persistent across all pages */}
      <Sidebar />

      {/* Main Content Area - Changes based on route */}
      <main className="flex-1 overflow-auto">
        <Routes>
          {/* Default route redirects to dashboard */}
          <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
          
          {/* App Pages */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/log-trade" element={<LogTradePage />} />
          <Route path="/history" element={<TradeHistoryPage />} />
          <Route path="/strategy" element={<StrategyAnalysisPage />} />
          <Route path="/rules" element={<TradingRulesPage />} />
          
          {/* Catch-all for unknown routes within /app */}
          <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default JournalApp;