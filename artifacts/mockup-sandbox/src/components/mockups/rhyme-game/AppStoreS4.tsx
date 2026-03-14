function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 216, height: 460, borderRadius: 50, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 4, boxShadow: "0 30px 80px rgba(0,0,0,0.55)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 46, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 72, height: 20, borderRadius: 10, background: "#0D0D0D", zIndex: 10 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function DictionaryScreen() {
  const results = ["fuel", "dual", "renewal", "cruel", "duel", "newell", "accrual"];
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", padding: "36px 8px 8px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
        <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 10, color: "#fff" }}>Rhyme Dictionary</span>
      </div>
      {/* Search bar */}
      <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 10, padding: "5px 10px", display: "flex", alignItems: "center", gap: 5, marginBottom: 7 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/><path d="M16.5 16.5L21 21" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/></svg>
        <span style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 10, color: "#fff" }}>jewel</span>
      </div>
      {/* Results */}
      <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 10, overflow: "hidden" }}>
        {results.map((word, i) => (
          <div key={word}>
            {i > 0 && <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginLeft: 8 }} />}
            <div style={{ padding: "7px 10px", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 11, color: "#fff", flex: 1 }}>{word}</span>
              <div style={{ background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 5, padding: "2px 7px" }}>
                <span style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 7, color: "#fff" }}>Perfect</span>
              </div>
              <span style={{ fontFamily: "sans-serif", fontSize: 8, color: "rgba(255,255,255,0.4)" }}>2 syl</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppStoreS4() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 220, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.18) 0%, transparent 62%)" }} />

      {/* Top headline */}
      <div style={{ position: "absolute", top: 60, left: 28, right: 28 }}>
        <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 42, lineHeight: 1.1, color: "#fff" }}>
          Your Rap<br /><span style={{ color: "#FBBF24" }}>Toolkit</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 12, lineHeight: 1.5 }}>
          Rhyme dictionary. Word generator.<br />Everything to sharpen your flow.
        </div>
      </div>

      {/* Phone — center, slight tilt right */}
      <GoldPhone rotate={-5} x={90} y={310}>
        <DictionaryScreen />
      </GoldPhone>

      {/* Floating green "Perfect" badge */}
      <div style={{ position: "absolute", top: 540, right: 22, background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 14, padding: "8px 18px", boxShadow: "0 8px 24px rgba(16,185,129,0.5)" }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>Perfect ✓</span>
      </div>

      {/* Connecting glow */}
      <div style={{ position: "absolute", bottom: 80, right: -20, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)" }} />
    </div>
  );
}
