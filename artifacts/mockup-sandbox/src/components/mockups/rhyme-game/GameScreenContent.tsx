// Shared game screen content for App Store marketing screenshots
// Gameplay: words appear on beats 2 & 4 (columns 1 and 3, 0-indexed)

type Cell = { w: string; c: string } | null;

const GAME_ROWS: Cell[][] = [
  [null, { w: "day",  c: "#F59E0B" }, null, { w: "play",  c: "#F59E0B" }],
  [null, { w: "way",  c: "#3B82F6" }, null, { w: "stay",  c: "#3B82F6" }],
  [null, { w: "flow", c: "#F59E0B" }, null, { w: "know",  c: "#F59E0B" }],
  [null, { w: "show", c: "#10B981" }, null, { w: "glow",  c: "#10B981" }],
  [null, { w: "heat", c: "#7C3AED" }, null, { w: "beat",  c: "#7C3AED" }],
];

const FONT = "'Fredoka One', 'Nunito', sans-serif";

// ─── Proper iOS Dynamic Island status bar ────────────────────────────────────
function IosStatusBar() {
  return (
    <div style={{ position: "relative", height: 54, flexShrink: 0 }}>
      {/* Dynamic Island pill — centered at top */}
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 86, height: 26, borderRadius: 13, background: "#000", zIndex: 20 }} />
      {/* Time — left, level with island */}
      <span style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.92)", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: -0.3, lineHeight: 1 }}>9:41</span>
      {/* Icons — right, level with island */}
      <div style={{ position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)", display: "flex", gap: 4, alignItems: "center" }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0"    y="8"   width="2.6" height="4"   rx="0.7" fill="rgba(255,255,255,0.9)"/>
          <rect x="4.5"  y="5.5" width="2.6" height="6.5" rx="0.7" fill="rgba(255,255,255,0.9)"/>
          <rect x="9"    y="3"   width="2.6" height="9"   rx="0.7" fill="rgba(255,255,255,0.9)"/>
          <rect x="13.4" y="0"   width="2.6" height="12"  rx="0.7" fill="rgba(255,255,255,0.9)"/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <circle cx="8" cy="11" r="1.5" fill="rgba(255,255,255,0.9)"/>
          <path d="M4.6 8.2C5.6 7.2 6.7 6.7 8 6.7s2.4.5 3.4 1.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M1.8 5.4C3.4 3.8 5.6 2.8 8 2.8s4.6 1 6.2 2.6" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.65"/>
        </svg>
        <svg width="25" height="13" viewBox="0 0 25 13" fill="none">
          <rect x="0.6" y="1.5" width="20" height="10" rx="2.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2"/>
          <rect x="2"   y="3"   width="13.5" height="7" rx="1.5" fill="rgba(255,255,255,0.9)"/>
          <path d="M22 5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.9)"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Single gold ball — sits over column 3 (beat 4), no trail ────────────────
// Column 3 center x ≈ 183px (8px pad + 3 cols × 50.75 + 22.875)
function GameBall() {
  return (
    <div style={{ position: "absolute", left: 171, top: 72, width: 24, height: 24, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 4px 14px rgba(245,158,11,0.75), inset 0 -3px 6px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.3)", zIndex: 10 }} />
  );
}

function GameGrid() {
  return (
    <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 5 }}>
      {GAME_ROWS.map((row, ri) => (
        <div key={ri} style={{ display: "flex", gap: 5 }}>
          {row.map((cell, ci) => (
            <div key={ci} style={{ flex: 1, height: 34, borderRadius: 7, background: cell ? cell.c : "rgba(255,255,255,0.08)", border: cell ? "none" : "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {cell && <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 9, color: "#fff" }}>{cell.w}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── For S1 and S2 — no logo, ball over col 3, no trail ─────────────────────
export function AccurateGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", display: "flex", flexDirection: "column" }}>
      <IosStatusBar />
      <div style={{ height: 14 }} />
      {/* Ball positioned over col 3 (beat 4) with absolute positioning */}
      <GameBall />
      <GameGrid />
    </div>
  );
}

// ─── For S5 — logo (no ball, smaller) + gameplay + music bar ─────────────────
export function LogoGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", display: "flex", flexDirection: "column" }}>
      <IosStatusBar />
      <div style={{ height: 8 }} />
      {/* Logo — Fredoka One, smaller to give grid more space */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 8 }}>
        <div style={{ background: "#EDE8D4", borderRadius: 7, padding: "3px 11px", marginBottom: -4, position: "relative", zIndex: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <span style={{ fontFamily: FONT, fontSize: 14, color: "#1A0E4E", lineHeight: 1, letterSpacing: 0.5 }}>THE</span>
        </div>
        <div style={{ background: "#1A0E4E", borderRadius: 7, padding: "4px 14px", position: "relative", zIndex: 3, boxShadow: "0 5px 16px rgba(0,0,0,0.35)" }}>
          <span style={{ fontFamily: FONT, fontSize: 19, color: "#EDE8D4", lineHeight: 1, letterSpacing: 0.5 }}>RHYME</span>
        </div>
        <div style={{ background: "#EDE8D4", borderRadius: 7, padding: "3px 12px", marginTop: -4, position: "relative", zIndex: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <span style={{ fontFamily: FONT, fontSize: 15, color: "#1A0E4E", lineHeight: 1, letterSpacing: 0.5 }}>GAME</span>
        </div>
      </div>
      <GameGrid />
      {/* Music bar */}
      <div style={{ marginTop: "auto", height: 50, background: "rgba(20,8,60,0.92)", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 8, padding: "0 10px 6px", flexShrink: 0 }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(106,37,217,0.5)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🎵</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 8, color: "#fff" }}>Sunday Book Club</div>
          <div style={{ fontFamily: "sans-serif", fontSize: 7, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
          <div style={{ height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 3 }}><div style={{ width: "40%", height: "100%", background: "#22c55e", borderRadius: 2 }} /></div>
        </div>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, flexShrink: 0 }}>⏸</div>
      </div>
    </div>
  );
}

// ─── Cross-screen sine wave: 3 LONG arcs across S2 → S3 → S4 ─────────────────
// Each arc spans exactly one slide width (390px = half-period).
// Bounce contacts land at combined x = 390, 780, 1170, 1560 (slide edges).
// S1 = 0-390, S2 = 390-780, S3 = 780-1170, S4 = 1170-1560

const HALF_PERIOD   = 390;   // one arc per slide
const PHASE_OFFSET  = 390;   // first contact at combined x=390 (S2 left edge)

export function bouncePath(xOffset: number, slideW = 390, svgH = 260): string {
  const base = svgH * 0.84;
  const amp  = svgH * 0.72;
  const steps = 120;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x  = (slideW * i) / steps;
    const xc = x + xOffset;
    const y  = base - amp * Math.abs(Math.sin((Math.PI * (xc - PHASE_OFFSET)) / HALF_PERIOD));
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M ${pts.join(' L ')}`;
}

export function bounceContacts(xOffset: number, slideW = 390, svgH = 260): { x: number; y: number }[] {
  const base = svgH * 0.84;
  const result: { x: number; y: number }[] = [];
  // Contacts at combined x = PHASE_OFFSET + n * HALF_PERIOD
  for (let n = 0; n <= 6; n++) {
    const xc = PHASE_OFFSET + n * HALF_PERIOD;
    const x  = xc - xOffset;
    if (x >= -1 && x <= slideW + 1) result.push({ x: Math.max(0, Math.min(slideW, x)), y: base });
  }
  return result;
}

export function ballPeakPosition(xOffset: number, slideW = 390, svgH = 260): { x: number; y: number } | null {
  const base = svgH * 0.84;
  const amp  = svgH * 0.72;
  // Peaks at combined x = PHASE_OFFSET + (2n+1)*HALF_PERIOD/2
  for (let n = 10; n >= 0; n--) {
    const xc = PHASE_OFFSET + (2 * n + 1) * (HALF_PERIOD / 2);
    const x  = xc - xOffset;
    if (x >= 0 && x <= slideW) return { x, y: base - amp };
  }
  return null;
}
