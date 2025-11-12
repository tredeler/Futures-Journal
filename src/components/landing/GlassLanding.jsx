import React from "react";

export default function GlassLanding({ setScreen }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Futures Journal
      </h1>
      <p className="text-gray-300 text-lg">Reflect. Evolve. Journal your future self.</p>

      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={() => setScreen("signup")}
          className="px-5 py-2 bg-cyan-500/30 hover:bg-cyan-500/50 text-white rounded-xl backdrop-blur-sm border border-cyan-300/30 transition"
        >
          Sign Up
        </button>
        <button
          onClick={() => setScreen("learn")}
          className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/30 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
