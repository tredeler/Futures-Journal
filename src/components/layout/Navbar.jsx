import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/app' },
    { name: 'Log Trade', path: '/app/log-trade' },
    { name: 'History', path: '/app/history' },
    { name: 'Strategy', path: '/app/strategy' },
    { name: 'Rules', path: '/app/rules' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-[#24221F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => navigate('/app')}
          className="flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-[#C0A062]"></div>
          <span className="text-[#EAE7DF] text-xl tracking-[0.15em]" style={{ fontFamily: 'serif' }}>
            CHARTISAN
          </span>
        </button>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#9E9788]">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`hover:text-[#C0A062] transition-colors ${
                location.pathname === item.path ? 'text-[#C0A062]' : ''
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        
        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="text-[#9E9788] hover:text-[#C0A062] transition-colors text-sm"
          >
            Exit
          </button>
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C0A062] to-[#7B653A] hover:shadow-[0_0_20px_rgba(192,160,98,0.3)] transition-all"></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar