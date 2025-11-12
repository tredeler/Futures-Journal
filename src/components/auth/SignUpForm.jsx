import React, { useState } from "react";

export default function SignUpForm({ setScreen, username, setUsername }) {
  const [fade, setFade] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFade(true);
    setTimeout(() => setScreen("journal"), 700);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 animate-fadeIn ${fade ? "opacity-0 transition-opacity duration-700" : ""}`}
    >
      <h2 className="text-2xl font-semibold text-white">Welcome!</h2>
      <p className="text-gray-400 text-sm">Enter your name to get started.</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Your name"
      />
      <button
        type="submit"
        className="w-full py-2 bg-cyan-500/40 hover:bg-cyan-500/60 text-white rounded-xl border border-cyan-300/30 transition"
      >
        Continue
      </button>
    </form>
  );
}
