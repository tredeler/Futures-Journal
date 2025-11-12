import React, { useState } from 'react';
import { TrendingUp, BarChart3, Plus, Edit3, Eye, Target, BookOpen, Shield, Menu, X, ChevronRight, DollarSign, Activity } from 'lucide-react';

const ChartisanComplete = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const LandingPage = () => (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C0A062] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C0A062] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>
      
      <nav className="relative z-20 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C0A062]"></div>
            <span className="text-[#EAE7DF] text-xl tracking-[0.15em]" style={{ fontFamily: 'serif' }}>
              CHARTISAN
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-[#9E9788]">
            <button className="hover:text-[#C0A062] transition-colors tracking-wider">FEATURES</button>
            <button className="hover:text-[#C0A062] transition-colors tracking-wider">PHILOSOPHY</button>
            <button className="hover:text-[#C0A062] transition-colors tracking-wider">PRICING</button>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-2 border border-[#C0A062] text-[#C0A062] rounded-full hover:bg-[#C0A062] hover:text-[#0A0A0A] transition-all duration-300 tracking-wider"
            >
              ENTER
            </button>
          </div>

          <button 
            className="md:hidden text-[#C0A062]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-t border-[#24221F] p-6">
            <div className="flex flex-col gap-4 text-[#9E9788]">
              <button className="text-left hover:text-[#C0A062] transition-colors">FEATURES</button>
              <button className="text-left hover:text-[#C0A062] transition-colors">PHILOSOPHY</button>
              <button className="text-left hover:text-[#C0A062] transition-colors">PRICING</button>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="px-6 py-2 border border-[#C0A062] text-[#C0A062] rounded-full hover:bg-[#C0A062] hover:text-[#0A0A0A] transition-all duration-300 text-center"
              >
                ENTER
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 md:pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-[2px] bg-[#C0A062] mb-8"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#EAE7DF] leading-tight mb-6" style={{ fontFamily: 'serif' }}>
              Now it's new black<br />and old gold
            </h1>
            
            <p className="text-[#9E9788] text-lg md:text-xl mb-12 leading-relaxed max-w-lg">
              Craft your trading mastery with precision, elegance, and insight. A luxury journal for futures traders who value refinement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="px-8 py-4 bg-[#C0A062] text-[#0A0A0A] rounded-full hover:bg-[#A38C59] transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,160,98,0.4)] font-medium tracking-wide"
              >
                Begin Your Journey
              </button>
              <button className="px-8 py-4 border border-[#C0A062] text-[#C0A062] rounded-full hover:bg-[#C0A062] hover:text-[#0A0A0A] transition-all duration-300 tracking-wide">
                Explore Features
              </button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#C0A062] via-[#A38C59] to-[#7B653A] opacity-10 blur-[80px]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="relative">
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-[#C0A062] opacity-30"></div>
                </div>
                
                <div className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <TrendingUp className="w-24 h-24 md:w-32 md:h-32 text-[#C0A062]" strokeWidth={1} />
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-[1px] bg-[#C0A062]"></div>
                      <div className="w-4 h-6 border-2 border-[#C0A062] relative">
                        <div className="absolute inset-x-0 top-1/3 h-[1px] bg-[#C0A062]"></div>
                      </div>
                      <div className="w-16 h-[1px] bg-[#C0A062]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#EAE7DF] mb-4" style={{ fontFamily: 'serif' }}>
            Designed for Mastery
          </h2>
          <p className="text-[#9E9788] text-lg max-w-2xl mx-auto">
            Every feature crafted to elevate your trading discipline and performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Precision Analytics",
              description: "Track every metric that matters. Win rate, P&L curves, and emotion patterns — visualized with clarity."
            },
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: "Reflective Journaling",
              description: "Document your thought process, market reads, and lessons learned. Build a library of trading wisdom."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Rule-Based Discipline",
              description: "Define your trading system. Set rules, track adherence, and strengthen your edge with consistency."
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="relative bg-[#121212] rounded-2xl p-8 border border-[#24221F] hover:border-[#C0A062]/30 transition-all duration-500 group"
              style={{
                boxShadow: '0 0 30px rgba(192,160,98,0.05)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0A062]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="text-[#C0A062] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[#EAE7DF] text-xl mb-3" style={{ fontFamily: 'serif' }}>
                  {feature.title}
                </h3>
                <p className="text-[#9E9788] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-6 text-[#9E9788] text-sm">
        <button className="hover:text-[#C0A062] transition-colors">TW</button>
        <button className="hover:text-[#C0A062] transition-colors">IN</button>
        <button className="hover:text-[#C0A062] transition-colors">GH</button>
      </div>

      <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[#9E9788] text-xs tracking-[0.3em]">
        SCROLL DOWN
      </div>

      <div className="absolute inset-6 border border-[#24221F] rounded-3xl pointer-events-none hidden md:block"></div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="fixed top-0 right-0 w-[900px] h-[900px] bg-[#C0A062] opacity-[0.02] blur-[180px] rounded-full pointer-events-none"></div>
      
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-[#24221F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C0A062]"></div>
            <span className="text-[#EAE7DF] text-xl tracking-[0.15em]" style={{ fontFamily: 'serif' }}>
              CHARTISAN
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-[#9E9788]">
            <button className="hover:text-[#C0A062] transition-colors">Dashboard</button>
            <button className="hover:text-[#C0A062] transition-colors">Log Trade</button>
            <button className="hover:text-[#C0A062] transition-colors">History</button>
            <button className="hover:text-[#C0A062] transition-colors">Strategy</button>
            <button className="hover:text-[#C0A062] transition-colors">Rules</button>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('landing')}
              className="text-[#9E9788] hover:text-[#C0A062] transition-colors text-sm"
            >
              Exit
            </button>
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C0A062] to-[#7B653A] hover:shadow-[0_0_20px_rgba(192,160,98,0.3)] transition-all"></button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl text-[#EAE7DF] mb-2" style={{ fontFamily: 'serif' }}>
            Performance Overview
          </h1>
          <p className="text-[#9E9788] text-lg">Track your trading mastery</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total P&L', value: '+$24,580', change: '+12.4%', icon: <DollarSign className="w-5 h-5" />, positive: true },
            { label: 'Win Rate', value: '68.5%', change: '+3.2%', icon: <TrendingUp className="w-5 h-5" />, positive: true },
            { label: 'Avg Win', value: '$845', change: '+8.1%', icon: <BarChart3 className="w-5 h-5" />, positive: true },
            { label: 'Emotion Score', value: '8.2/10', change: '+0.5', icon: <Activity className="w-5 h-5" />, positive: true }
          ].map((stat, i) => (
            <div 
              key={i}
              className="relative bg-[#121212] rounded-2xl p-6 border border-[#24221F] hover:border-[#C0A062]/30 transition-all duration-300 group overflow-hidden"
              style={{
                boxShadow: '0 0 30px rgba(192,160,98,0.05)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0A062]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[#9E9788] text-sm tracking-wide">{stat.label}</p>
                  <div className="text-[#C0A062] opacity-50 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-[#EAE7DF] text-3xl lg:text-4xl font-light mb-2">{stat.value}</p>
                <p className={`text-xs ${stat.positive ? 'text-[#C0A062]' : 'text-[#9E9788]'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="relative bg-[#121212] rounded-2xl p-6 lg:p-8 border border-[#24221F] mb-12"
          style={{
            boxShadow: '0 0 30px rgba(192,160,98,0.05)'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-[#EAE7DF] text-2xl lg:text-3xl font-light mb-1" style={{ fontFamily: 'serif' }}>
                Cumulative P&L
              </h2>
              <p className="text-[#9E9788] text-sm">Last 90 days</p>
            </div>
            <div className="flex gap-2">
              {['1M', '3M', '1Y', 'ALL'].map((period, i) => (
                <button 
                  key={period}
                  className={`px-4 py-2 text-sm transition-all ${
                    i === 1 
                      ? 'text-[#C0A062] border-b-2 border-[#C0A062]' 
                      : 'text-[#9E9788] hover:text-[#C0A062]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-64 lg:h-80 flex items-end justify-between gap-1 lg:gap-2">
            {[42, 48, 45, 58, 52, 68, 65, 78, 72, 88, 82, 92, 88, 95].map((height, i) => (
              <div 
                key={i} 
                className="flex-1 bg-gradient-to-t from-[#C0A062] to-[#C0A062]/20 rounded-t hover:from-[#A38C59] hover:to-[#A38C59]/20 transition-all duration-300 cursor-pointer"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>

          <div className="flex justify-between mt-6 text-[#9E9788] text-xs">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
          </div>
        </div>

        <div 
          className="relative bg-[#121212] rounded-2xl p-6 lg:p-8 border border-[#24221F]"
          style={{
            boxShadow: '0 0 30px rgba(192,160,98,0.05)'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-[#EAE7DF] text-2xl lg:text-3xl font-light" style={{ fontFamily: 'serif' }}>
              Recent Trades
            </h2>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-[#C0A062] text-[#C0A062] rounded-full hover:bg-[#C0A062] hover:text-[#0A0A0A] transition-all duration-300 text-sm group w-fit">
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              Log Trade
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { symbol: 'ES', contract: 'E-mini S&P 500', date: 'Nov 11, 2025', time: '2:45 PM', pnl: '+$1,240', emotion: '9/10', positive: true },
              { symbol: 'NQ', contract: 'E-mini Nasdaq', date: 'Nov 10, 2025', time: '11:20 AM', pnl: '-$320', emotion: '7/10', positive: false },
              { symbol: 'ES', contract: 'E-mini S&P 500', date: 'Nov 9, 2025', time: '1:15 PM', pnl: '+$890', emotion: '8/10', positive: true },
              { symbol: 'YM', contract: 'E-mini Dow', date: 'Nov 8, 2025', time: '3:30 PM', pnl: '+$560', emotion: '7/10', positive: true }
            ].map((trade, i) => (
              <div 
                key={i}
                className="flex items-center justify-between p-4 lg:p-5 bg-[#181818] rounded-xl border border-[#24221F] hover:border-[#C0A062]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C0A062] to-[#7B653A] flex items-center justify-center text-[#0A0A0A] font-semibold text-sm flex-shrink-0">
                    {trade.symbol}
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <p className="text-[#EAE7DF] truncate">{trade.contract}</p>
                    <p className="text-[#9E9788] text-sm">{trade.date} • {trade.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 lg:gap-8">
                  <div className="text-right">
                    <p className={`text-lg font-medium ${trade.positive ? 'text-[#C0A062]' : 'text-[#9E9788]'}`}>
                      {trade.pnl}
                    </p>
                    <p className="text-[#9E9788] text-xs">Emotion: {trade.emotion}</p>
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-[#24221F] rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-[#9E9788] hover:text-[#C0A062]" />
                    </button>
                    <button className="p-2 hover:bg-[#24221F] rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4 text-[#9E9788] hover:text-[#C0A062]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="text-[#C0A062] hover:text-[#A38C59] transition-colors text-sm flex items-center gap-2 mx-auto group">
              View All Trades
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return currentView === 'landing' ? <LandingPage /> : <Dashboard />;
};

export default ChartisanComplete;