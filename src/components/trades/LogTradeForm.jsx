import { useState } from "react";

export default function LogTradeForm({ onSubmit }) {
  const [form, setForm] = useState({
    symbol: "",
    direction: "LONG",
    entryPrice: "",
    exitPrice: "",
    contracts: 1,
    date: "",
    emotion: "",
    notes: "",
  });

  const emotions = ["confident", "neutral", "anxious", "fearful", "impulsive", "tired"];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const pnlPoints = Number(form.exitPrice) - Number(form.entryPrice);
    const signedPnl = form.direction === "SHORT" ? -pnlPoints : pnlPoints;

    onSubmit({
      ...form,
      id: Date.now(),
      pnlPoints: signedPnl,
    });
  }

  return (
    <div className="flex justify-center pt-10">
      <form
        onSubmit={handleSubmit}
        className="
          glass-card soft-glow 
          w-full max-w-2xl px-10 py-12 
          rounded-2xl border border-chartisan-border
          shadow-goldInner
        "
      >
        {/* HEADER */}
        <h2 className="lux-heading mb-2 text-gold/90 tracking-wide">
          Log New Trade
        </h2>
        <p className="lux-subtitle mb-6">Record your trading decisions with precision</p>
        <div className="gold-line mb-8"></div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 gap-6">

          {/* SYMBOL */}
          <div>
            <label className="form-label">Symbol</label>
            <input
              name="symbol"
              value={form.symbol}
              onChange={handleChange}
              className="input-field"
              placeholder="ES, NQ, CL..."
              required
            />
          </div>

          {/* DIRECTION */}
          <div>
            <label className="form-label">Direction</label>
            <select
              name="direction"
              value={form.direction}
              onChange={handleChange}
              className="input-field"
            >
              <option value="LONG">LONG</option>
              <option value="SHORT">SHORT</option>
            </select>
          </div>

          {/* ENTRY PRICE */}
          <div>
            <label className="form-label">Entry Price</label>
            <input
              name="entryPrice"
              type="number"
              step="0.25"
              value={form.entryPrice}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {/* EXIT PRICE */}
          <div>
            <label className="form-label">Exit Price</label>
            <input
              name="exitPrice"
              type="number"
              step="0.25"
              value={form.exitPrice}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {/* CONTRACTS */}
          <div>
            <label className="form-label">Contracts</label>
            <input
              name="contracts"
              type="number"
              min="1"
              value={form.contracts}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="form-label">Date / Time</label>
            <input
              name="date"
              type="datetime-local"
              value={form.date}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {/* EMOTION */}
          <div>
            <label className="form-label">Emotion</label>
            <select
              name="emotion"
              value={form.emotion}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select emotion...</option>
              {emotions.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>

          {/* NOTES */}
          <div>
            <label className="form-label">Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="input-field h-32 resize-none"
              placeholder="Thoughts, context, mistakes, learnings..."
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="
            btn-gold w-full mt-10 py-3 
            tracking-wide text-base
            hover:shadow-goldEdge
          "
        >
          Save Trade
        </button>
      </form>
    </div>
  );
}
