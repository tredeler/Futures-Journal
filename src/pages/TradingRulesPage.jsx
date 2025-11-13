import React from 'react';
import { BookOpen } from 'lucide-react';

const TradingRulesPage = () => (
  <div className="p-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-16 h-16 rounded-xl bg-chartisan-gold/10 flex items-center justify-center shadow-goldInner">
        <BookOpen className="w-8 h-8 text-chartisan-gold" />
      </div>
      <div>
        <h1 className="text-chartisan-text font-serif text-4xl mb-2">Trading Rules</h1>
        <p className="text-chartisan-textMuted text-lg font-light">Your playbook for consistent execution</p>
      </div>
    </div>
    
    <div className="bg-chartisan-surface border border-chartisan-border rounded-xl p-12 shadow-softGlow text-center">
      <p className="text-chartisan-textMuted text-xl mb-4">Rules checklist coming soon...</p>
      <p className="text-chartisan-textMuted text-sm">Pre-trade and post-trade rules with tracking</p>
    </div>
  </div>
);

export default TradingRulesPage;