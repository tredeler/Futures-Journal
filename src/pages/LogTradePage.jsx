import React from 'react';
import { PlusCircle } from 'lucide-react';

const LogTradePage = () => (
  <div className="p-8">
    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-xl bg-chartisan-gold/10 flex items-center justify-center shadow-goldInner">
          <PlusCircle className="w-8 h-8 text-chartisan-gold" />
        </div>
        <div>
          <h1 className="text-chartisan-text font-serif text-4xl mb-2">Log Trade</h1>
          <p className="text-chartisan-textMuted text-lg font-light">Record your trading decisions with precision</p>
        </div>
      </div>
      
      <div className="bg-chartisan-surface border border-chartisan-border rounded-xl p-12 shadow-softGlow text-center">
        <p className="text-chartisan-textMuted text-xl mb-4">Trade logging form coming soon...</p>
        <p className="text-chartisan-textMuted text-sm">Multi-step form with validation and emotion tracking</p>
      </div>
    </div>
  </div>
);

export default LogTradePage;