import React, { useState } from "react";

const LogTrade = () => {
  const [form, setForm] = useState({ symbol: "", entry: "", exit: "", pl: "", notes: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // For now, we just clear. Later we will push to localStorage or state.
    setForm({ symbol: "", entry: "", exit: "", pl: "", notes: "" });
    alert("Saved (dummy) — in later step we'll persist trades.");
  };

  return (
    <div className="glass-card max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Log a New Trade</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input name="symbol" value={form.symbol} onChange={onChange} placeholder="Symbol (e.g. ES)" className="input" />
          <select name="side" className="input">
            <option>LONG</option>
            <option>SHORT</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <input name="entry" value={form.entry} onChange={onChange} placeholder="Entry price" className="input" />
          <input name="exit" value={form.exit} onChange={onChange} placeholder="Exit price" className="input" />
          <input name="pl" value={form.pl} onChange={onChange} placeholder="P/L" className="input" />
        </div>
        <textarea name="notes" value={form.notes} onChange={onChange} placeholder="Notes / strategy" className="input" rows="3" />
        <button type="submit" className="w-full py-2 rounded-xl bg-cyan-500 text-gray-900 font-semibold">Save Trade</button>
      </form>
    </div>
  );
};

export default LogTrade;
