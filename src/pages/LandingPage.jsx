import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-chartisan-bg relative overflow-hidden">
      {/* Ambient Background Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-chartisan-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-chartisan-gold/3 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-8 py-6 flex items-center justify-between border-b border-chartisan-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-chartisan-gold/10 flex items-center justify-center shadow-goldInner">
            <TrendingUp className="w-5 h-5 text-chartisan-gold" />
          </div>
          <span className="text-chartisan-text font-serif text-2xl tracking-tight">Chartisan</span>
        </div>
        <button
          onClick={() => navigate('/app')}
          className="px-6 py-2 border border-chartisan-gold text-chartisan-gold rounded-lg hover:bg-chartisan-gold hover:text-chartisan-bg transition-all duration-300 text-sm tracking-wide"
        >
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-block mb-6">
            <span className="text-chartisan-textMuted text-sm uppercase tracking-[0.3em] px-4 py-2 border border-chartisan-border rounded-full">
              Trading Journal
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-chartisan-text font-serif text-7xl leading-tight mb-6">
            Craft your trading
            <br />
            <span className="text-chartisan-gold">mastery</span>
          </h1>

          {/* Subheadline */}
          <p className="text-chartisan-textMuted text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            A refined journal for futures traders who demand precision, 
            clarity, and elegance in every trade decision.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => navigate('/app')}
              className="
                group px-8 py-4 
                bg-chartisan-gold text-chartisan-bg 
                rounded-lg font-medium
                shadow-goldEdge hover:shadow-softGlow
                transition-all duration-300
                flex items-center gap-2
              "
            >
              Enter Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-chartisan-border text-chartisan-text rounded-lg hover:border-chartisan-gold hover:text-chartisan-gold transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-chartisan-gold text-4xl font-serif mb-2">50ms</p>
              <p className="text-chartisan-textMuted text-sm uppercase tracking-widest">Load Time</p>
            </div>
            <div className="text-center">
              <p className="text-chartisan-gold text-4xl font-serif mb-2">∞</p>
              <p className="text-chartisan-textMuted text-sm uppercase tracking-widest">Trade Storage</p>
            </div>
            <div className="text-center">
              <p className="text-chartisan-gold text-4xl font-serif mb-2">100%</p>
              <p className="text-chartisan-textMuted text-sm uppercase tracking-widest">Private</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 container mx-auto px-8 py-6 border-t border-chartisan-border/50 text-center">
        <p className="text-chartisan-textMuted text-sm">
          © 2025 Chartisan. Craft your trading mastery.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;