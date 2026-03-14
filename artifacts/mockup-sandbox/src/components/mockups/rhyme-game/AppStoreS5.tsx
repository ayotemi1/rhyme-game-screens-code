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

function SetupScreen() {
  const grid = [
    ["orange","","orange",""],
    ["orange","","orange",""],
    ["blue","","blue",""],
    ["blue","","blue",""],
  ];
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", padding: "36px 8px 8px" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
        <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 10, color: "#fff" }}>Setup</span>
      </div>
      {/* Pattern grid */}
      <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: 8, marginBottom: 7 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5 }}>
          {grid.map((row, ri) => row.map((cell, ci) => (
            <div key={`${ri}-${ci}`} style={{ aspectRatio: "1.4", borderRadius: 6, background: cell === "orange" ? "linear-gradient(135deg, #F59E0B, #D97706)" : cell === "blue" ? "linear-gradient(135deg, #3B82F6, #2563EB)" : "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {ci % 2 === 0 && cell && <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: "#fff" }}>{cell === "orange" ? ["P","T","S","S"][ri] : ""}{cell === "blue" ? ["","","S","S"][ri] : ""}</span>}
            </div>
          )))}
        </div>
      </div>
      {/* Settings rows */}
      {["Rhyme Pattern", "Fill Mode", "Word List"].map(label => (
        <div key={label} style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 9, padding: "7px 10px", marginBottom: 5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "sans-serif", fontSize: 8, color: "rgba(255,255,255,0.5)" }}>{label}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
      ))}
      {/* Play button */}
      <div style={{ background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 9, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 13, color: "#fff", letterSpacing: 2 }}>PLAY</span>
      </div>
    </div>
  );
}

export function AppStoreS5() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", bottom: 80, left: -50, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 200, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.15) 0%, transparent 62%)" }} />

      {/* Phone — left side, slight right tilt */}
      <GoldPhone rotate={8} x={-18} y={60}>
        <SetupScreen />
      </GoldPhone>

      {/* Headline — bottom right */}
      <div style={{ position: "absolute", bottom: 80, right: 28, left: 180 }}>
        <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 36, lineHeight: 1.1, color: "#fff", textAlign: "right" }}>
          Customize<br />Every<br /><span style={{ color: "#FBBF24" }}>Session</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 10, lineHeight: 1.5, textAlign: "right" }}>
          Set the pattern, difficulty,<br />and word list. Your game,<br />your rules.
        </div>
      </div>

      {/* Gold ball — right edge connecting to S6 */}
      <div style={{ position: "absolute", top: 410, right: -24, width: 72, height: 72, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 10px 40px rgba(245,158,11,0.7), inset 0 -10px 18px rgba(0,0,0,0.3)" }} />
    </div>
  );
}
