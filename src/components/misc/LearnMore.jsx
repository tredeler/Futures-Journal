import React from "react";

export default function LearnMore({ setScreen }) {
  return (
    <div className="animate-fadeIn space-y-4">
      <h2 className="text-2xl font-semibold text-white">About Futures Journal</h2>
      <p className="text-gray-300 text-sm leading-relaxed">
        Futures Journal helps you reflect, set goals, and document your growth
        through time. Designed with simplicity, security, and calm in mind.
      </p>
      <button
        onClick={() => setScreen("landing")}
        className="mt-4 px-5 py-2 bg-white/10 hover:bg-white/20 rounded-xl border border-white/30 transition"
      >
        Back
      </button>
    </div>
  );
}
