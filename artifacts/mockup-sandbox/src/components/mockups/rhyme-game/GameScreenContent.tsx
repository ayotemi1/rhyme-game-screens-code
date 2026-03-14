// Shared game screen content for App Store marketing screenshots
// Gameplay: words appear on beats 2 & 4 (columns 1 and 3, 0-indexed)
// Odd rows = target words (gold), even rows = rhyme answers (blue/green)

type Cell = { w: string; c: string } | null;

const GAME_ROWS: Cell[][] = [
  [null, { w: "day",  c: "#F59E0B" }, null, { w: "play",  c: "#F59E0B" }],
  [null, { w: "way",  c: "#3B82F6" }, null, { w: "stay",  c: "#3B82F6" }],
  [null, { w: "flow", c: "#F59E0B" }, null, { w: "know",  c: "#F59E0B" }],
  [null, { w: "show", c: "#10B981" }, null, { w: "glow",  c: "#10B981" }],
  [null, { w: "heat", c: "#7C3AED" }, null, { w: "beat",  c: "#7C3AED" }],
];

function IosStatusBar() {
  return (
    <div style={{ position: "relative" }}>
      {/* Dynamic Island */}
      <div style={{ position: "absolute", top: 9, left: "50%", transform: "translateX(-50%)", width: 86, height: 24, borderRadius: 12, background: "#000", zIndex: 20 }} />
      {/* Bar */}
      <div style={{ height: 48, display: "flex", alignItems: "flex-end", padding: "0 15px 8px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.92)", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: -0.3 }}>9:41</span>
        <div style={{ display: "flex", gap: 4.5, alignItems: "center" }}>
          {/* Signal */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0"    y="8"   width="2.6" height="4"   rx="0.7" fill="rgba(255,255,255,0.9)"/>
            <rect x="4.5"  y="5.5" width="2.6" height="6.5" rx="0.7" fill="rgba(255,255,255,0.9)"/>
            <rect x="9"    y="3"   width="2.6" height="9"   rx="0.7" fill="rgba(255,255,255,0.9)"/>
            <rect x="13.4" y="0"   width="2.6" height="12"  rx="0.7" fill="rgba(255,255,255,0.9)"/>
          </svg>
          {/* WiFi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <circle cx="8" cy="11" r="1.5" fill="rgba(255,255,255,0.9)"/>
            <path d="M4.6 8.2C5.6 7.2 6.7 6.7 8 6.7s2.4.5 3.4 1.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M1.8 5.4C3.4 3.8 5.6 2.8 8 2.8s4.6 1 6.2 2.6" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.65"/>
          </svg>
          {/* Battery */}
          <svg width="25" height="13" viewBox="0 0 25 13" fill="none">
            <rect x="0.6" y="1.5" width="20" height="10" rx="2.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2"/>
            <rect x="2"   y="3"   width="13.5" height="7" rx="1.5" fill="rgba(255,255,255,0.9)"/>
            <path d="M22 5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.9)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function GameGrid() {
  return (
    <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 5 }}>
      {GAME_ROWS.map((row, ri) => (
        <div key={ri} style={{ display: "flex", gap: 5 }}>
          {row.map((cell, ci) => (
            <div key={ci} style={{ flex: 1, height: 34, borderRadius: 7, background: cell ? cell.c : "rgba(255,255,255,0.08)", border: cell ? "none" : "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {cell && <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 800, fontSize: 8.5, color: "#fff" }}>{cell.w}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// For S1 and S2 — no logo, shows bouncing ball
export function AccurateGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)" }}>
      <IosStatusBar />
      {/* Ball + motion trail on beat 2 area */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "2px 20px 8px", alignItems: "center", gap: 5 }}>
        <div style={{ width: 7,  height: 7,  borderRadius: "50%", background: "rgba(245,158,11,0.22)" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "rgba(245,158,11,0.44)" }} />
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E)", boxShadow: "0 3px 8px rgba(245,158,11,0.55)" }} />
      </div>
      <GameGrid />
    </div>
  );
}

// For S5 combined — shows logo (no ball above logo) + gameplay grid + music bar
export function LogoGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)" }}>
      <IosStatusBar />
      {/* Logo: THE / RHYME / GAME pills — no ball floating above */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, margin: "4px 0 10px" }}>
        <div style={{ background: "#EDE8D4", borderRadius: 9, padding: "3px 20px", marginBottom: -5, position: "relative", zIndex: 2 }}>
          <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 900, fontSize: 10, color: "#1A0E4E", letterSpacing: 0.5 }}>THE</span>
        </div>
        <div style={{ background: "#1A0E4E", borderRadius: 9, padding: "5px 26px", position: "relative", zIndex: 3 }}>
          <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 900, fontSize: 14, color: "#EDE8D4", letterSpacing: 0.5 }}>RHYME</span>
        </div>
        <div style={{ background: "#EDE8D4", borderRadius: 9, padding: "3px 20px", marginTop: -5, position: "relative", zIndex: 2 }}>
          <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 900, fontSize: 10, color: "#1A0E4E", letterSpacing: 0.5 }}>GAME</span>
        </div>
      </div>
      <GameGrid />
      {/* Music bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 50, background: "rgba(20,8,60,0.92)", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 8, padding: "0 10px 6px" }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(106,37,217,0.5)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🎵</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 8, color: "#fff" }}>Sunday Book Club</div>
          <div style={{ fontFamily: "sans-serif", fontSize: 7, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
          <div style={{ height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 3 }}><div style={{ width: "40%", height: "100%", background: "#22c55e", borderRadius: 2 }} /></div>
        </div>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>⏸</div>
      </div>
    </div>
  );
}
