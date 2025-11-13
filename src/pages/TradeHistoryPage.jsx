import React from 'react';
import { History } from 'lucide-react';

const TradeHistoryPage = () => (
  <div className="p-8">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-16 h-16 rounded-xl bg-chartisan-gold/10 flex items-center justify-center shadow-goldInner">
        <History className="w-8 h-8 text-chartisan-gold" />
      </div>
      <div>
        <h1 className="text-chartisan-text font-serif text-4xl mb-2">Trade History</h1>
        <p className="text-chartisan-textMuted text-lg font-light">Complete archive of your trading journey</p>
      </div>
    </div>
    
    <div className="bg-chartisan-surface border border-chartisan-border rounded-xl p-12 shadow-softGlow text-center">
      <p className="text-chartisan-textMuted text-xl mb-4">Trade history table coming soon...</p>
      <p className="text-chartisan-textMuted text-sm">Sortable, filterable table with export functionality</p>
    </div>
  </div>
);

export default TradeHistoryPage;