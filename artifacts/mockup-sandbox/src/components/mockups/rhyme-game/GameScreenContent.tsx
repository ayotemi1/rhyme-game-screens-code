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
// Time is to the LEFT of the island, icons to the RIGHT — same vertical level
function IosStatusBar() {
  return (
    <div style={{ position: "relative", height: 54, flexShrink: 0 }}>
      {/* Dynamic Island pill — centered at top */}
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 86, height: 26, borderRadius: 13, background: "#000", zIndex: 20 }} />
      {/* Time — left, vertically centered with island */}
      <span style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.92)", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: -0.3, lineHeight: 1 }}>9:41</span>
      {/* Icons — right, vertically centered with island */}
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

// ─── Mini sine-wave ball trail (inside phone, across 4 columns) ────────────
// Ball bounces on each column like a sine wave — peaks between columns, troughs at each column
function MiniBallTrail() {
  // Phone inner width = 214px, padding = 8px each side → 198px game width
  // 4 cols with 3 gaps of 5px: col width = (198-15)/4 = 45.75 ≈ 46px
  // Column centers (from left=0 of the inner container):
  const cols = [23, 69, 115, 161]; // relative to 8px left pad → absolute x = col + 8
  const svgW = 214;
  const svgH = 28;
  const bottom = 23;  // y of ball touching column (near bottom of SVG)
  const peakY = 5;    // y of ball in the air (near top of SVG)

  // Generate the sine wave path across all 4 columns
  // period = 2 * col_spacing = 92px; ball touches at each column
  const period = 92;
  const steps = 120;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (svgW * i) / steps;
    // Shift so that col centers align with troughs (sin=0 → bottom)
    const y = bottom - (bottom - peakY) * Math.abs(Math.sin((Math.PI * (x - 8)) / (period / 2)));
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const pathD = `M ${pts.join(' L ')}`;

  // Ball (current position at col 3, rightmost bounce point)
  const ballX = 8 + cols[3];  // = 169
  const ballY = bottom;
  const ballR = 9;

  return (
    <div style={{ width: svgW, height: svgH, flexShrink: 0 }}>
      <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`}>
        <defs>
          <linearGradient id="trailGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.7"/>
          </linearGradient>
        </defs>
        {/* Sine wave trail */}
        <path d={pathD} stroke="url(#trailGrad)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Column bounce dots */}
        {cols.slice(0, 3).map((cx, i) => (
          <circle key={i} cx={cx + 8} cy={bottom} r="3" fill="rgba(251,191,36,0.3)"/>
        ))}
        {/* Current ball */}
        <defs>
          <radialGradient id="ballGrad" cx="35%" cy="30%" r="60%">
            <stop offset="0%"   stopColor="#FFF8C0"/>
            <stop offset="15%"  stopColor="#FCD34D"/>
            <stop offset="45%"  stopColor="#F59E0B"/>
            <stop offset="70%"  stopColor="#D97706"/>
            <stop offset="100%" stopColor="#92400E"/>
          </radialGradient>
        </defs>
        <circle cx={ballX} cy={ballY} r={ballR + 5} fill="rgba(245,158,11,0.18)"/>
        <circle cx={ballX} cy={ballY} r={ballR} fill="url(#ballGrad)" filter="drop-shadow(0 2px 6px rgba(245,158,11,0.7))"/>
      </svg>
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
              {cell && <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 9, color: "#fff" }}>{cell.w}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── For S1 and S2 — no logo, shows bouncing ball trail ──────────────────────
export function AccurateGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", display: "flex", flexDirection: "column" }}>
      <IosStatusBar />
      {/* Clear space below island before game content */}
      <div style={{ height: 14 }} />
      {/* Sine wave ball trail */}
      <MiniBallTrail />
      <div style={{ height: 10 }} />
      <GameGrid />
    </div>
  );
}

// ─── For S5 combined — logo (no ball) + gameplay + music bar ─────────────────
export function LogoGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", display: "flex", flexDirection: "column" }}>
      <IosStatusBar />
      {/* Clear space below island */}
      <div style={{ height: 10 }} />
      {/* Mini logo — THE / RHYME / GAME pills using Fredoka One, no ball above */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 }}>
        <div style={{ background: "#EDE8D4", borderRadius: 8, padding: "4px 14px", marginBottom: -5, position: "relative", zIndex: 2, boxShadow: "0 3px 10px rgba(0,0,0,0.22)" }}>
          <span style={{ fontFamily: FONT, fontSize: 18, color: "#1A0E4E", lineHeight: 1, letterSpacing: 0.5 }}>THE</span>
        </div>
        <div style={{ background: "#1A0E4E", borderRadius: 8, padding: "5px 18px", position: "relative", zIndex: 3, boxShadow: "0 6px 20px rgba(0,0,0,0.38)" }}>
          <span style={{ fontFamily: FONT, fontSize: 24, color: "#EDE8D4", lineHeight: 1, letterSpacing: 0.5 }}>RHYME</span>
        </div>
        <div style={{ background: "#EDE8D4", borderRadius: 8, padding: "4px 16px", marginTop: -5, position: "relative", zIndex: 2, boxShadow: "0 3px 10px rgba(0,0,0,0.22)" }}>
          <span style={{ fontFamily: FONT, fontSize: 19, color: "#1A0E4E", lineHeight: 1, letterSpacing: 0.5 }}>GAME</span>
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

// ─── Cross-screen sine wave helpers (used in S2, S3, S4 slides) ──────────────
// Ball bounces with period=180px across combined x space.
// S1 = 0-390, S2 = 390-780, S3 = 780-1170, S4 = 1170-1560
// Ball lands at combined x = n*180 (troughs), peaks at (2n+1)*90

export function bouncePath(xOffset: number, slideW = 390, svgH = 260): string {
  const base = svgH * 0.84;
  const amp  = svgH * 0.70;
  const period = 180;
  const steps  = 100;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x  = (slideW * i) / steps;
    const xc = x + xOffset;
    const y  = base - amp * Math.abs(Math.sin((Math.PI * xc) / period));
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M ${pts.join(' L ')}`;
}

export function bounceContacts(xOffset: number, slideW = 390, svgH = 260): { x: number; y: number }[] {
  const base   = svgH * 0.84;
  const period = 180;
  const result: { x: number; y: number }[] = [];
  for (let n = 0; n <= 12; n++) {
    const xc = n * period;
    const x  = xc - xOffset;
    if (x >= 0 && x <= slideW) result.push({ x, y: base });
  }
  return result;
}

export function ballPeakPosition(xOffset: number, slideW = 390, svgH = 260): { x: number; y: number } | null {
  const base   = svgH * 0.84;
  const amp    = svgH * 0.70;
  const period = 180;
  // Peaks at combined x = (2n+1)*90 — find rightmost one inside this slide
  for (let n = 20; n >= 0; n--) {
    const xc = (2 * n + 1) * (period / 2);
    const x  = xc - xOffset;
    if (x >= 0 && x <= slideW) return { x, y: base - amp };
  }
  return null;
}
