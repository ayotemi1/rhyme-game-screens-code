// Shared game screen content for App Store marketing screenshots
// Reference: real gameplay has ball flying with comet trail above grid,
// music player dock at bottom, compact Dynamic Island status bar.

type Cell = { w: string; c: string } | null;

const GAME_ROWS: Cell[][] = [
  [null, { w: "day",  c: "#F59E0B" }, null, { w: "play",  c: "#F59E0B" }],
  [null, { w: "way",  c: "#3B82F6" }, null, { w: "stay",  c: "#3B82F6" }],
  [null, { w: "flow", c: "#F59E0B" }, null, { w: "know",  c: "#F59E0B" }],
  [null, { w: "show", c: "#10B981" }, null, { w: "glow",  c: "#10B981" }],
  [null, { w: "heat", c: "#7C3AED" }, null, { w: "beat",  c: "#7C3AED" }],
];

const FONT = "'Fredoka One', 'Nunito', sans-serif";

// ─── Compact Dynamic Island status bar ───────────────────────────────────────
// Sized proportionally for a 214px-wide phone inner screen.
// Real iPhone: island 126pt on 393pt screen = 32% → 214 * 0.32 = 68px wide
function IosStatusBar() {
  return (
    <div style={{ position: "relative", height: 38, flexShrink: 0 }}>
      {/* Dynamic Island pill */}
      <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 68, height: 18, borderRadius: 9, background: "#000", zIndex: 20 }} />
      {/* Time */}
      <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.92)", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: -0.2, lineHeight: 1 }}>9:41</span>
      {/* Icons */}
      <div style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", display: "flex", gap: 3, alignItems: "center" }}>
        {/* Signal bars */}
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <rect x="0"   y="6"   width="2" height="3"   rx="0.5" fill="rgba(255,255,255,0.9)"/>
          <rect x="3.3" y="4"   width="2" height="5"   rx="0.5" fill="rgba(255,255,255,0.9)"/>
          <rect x="6.7" y="2"   width="2" height="7"   rx="0.5" fill="rgba(255,255,255,0.9)"/>
          <rect x="10"  y="0"   width="2" height="9"   rx="0.5" fill="rgba(255,255,255,0.9)"/>
        </svg>
        {/* WiFi */}
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <circle cx="6" cy="8.5" r="1.2" fill="rgba(255,255,255,0.9)"/>
          <path d="M3.5 6.2C4.3 5.4 5.1 5 6 5s1.7.4 2.5 1.2" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M1.2 3.8C2.5 2.5 4.2 1.8 6 1.8s3.5.7 4.8 2" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
        {/* Battery */}
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
          <rect x="0.5" y="1"   width="15.5" height="8" rx="2" stroke="rgba(255,255,255,0.9)" strokeWidth="1"/>
          <rect x="1.8" y="2.3" width="10"   height="5.4" rx="1.2" fill="rgba(255,255,255,0.9)"/>
          <path d="M17 3.8v2.4a1.2 1.2 0 000-2.4z" fill="rgba(255,255,255,0.9)"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Ball with comet trail flying above the grid ──────────────────────────────
// Ball at column-2 area (~x=107 of 214px), tail extends left — matches reference
function CometBall() {
  const ballR  = 10;
  const tailW  = 42;
  const ballCX = tailW + ballR;          // center x in SVG
  const ballCY = ballR + 2;             // center y in SVG
  const totalW = tailW + ballR * 2 + 2;
  const totalH = ballR * 2 + 4;

  return (
    <svg
      style={{ position: "absolute", bottom: 8, left: 60 }}
      width={totalW}
      height={totalH}
      overflow="visible"
    >
      <defs>
        <radialGradient id="cgBall" cx="34%" cy="28%" r="58%">
          <stop offset="0%"   stopColor="#FFF8C0"/>
          <stop offset="18%"  stopColor="#FCD34D"/>
          <stop offset="48%"  stopColor="#F59E0B"/>
          <stop offset="78%"  stopColor="#D97706"/>
          <stop offset="100%" stopColor="#92400E"/>
        </radialGradient>
        <linearGradient id="cgTail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0"/>
          <stop offset="60%"  stopColor="#F59E0B" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.82"/>
        </linearGradient>
      </defs>
      {/* Comet tail — ellipse fading left */}
      <ellipse cx={tailW * 0.45} cy={ballCY + 1} rx={tailW * 0.55} ry={4.5} fill="url(#cgTail)"/>
      {/* Ball */}
      <circle cx={ballCX} cy={ballCY} r={ballR} fill="url(#cgBall)"
        filter="drop-shadow(0 3px 9px rgba(245,158,11,0.75))"/>
    </svg>
  );
}

// ─── Game grid ─────────────────────────────────────────────────────────────────
function GameGrid() {
  return (
    <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 4, flexShrink: 0 }}>
      {GAME_ROWS.map((row, ri) => (
        <div key={ri} style={{ display: "flex", gap: 4 }}>
          {row.map((cell, ci) => (
            <div key={ci} style={{
              flex: 1, height: 32, borderRadius: 7,
              background: cell ? cell.c : "rgba(255,255,255,0.08)",
              border: cell ? "none" : "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {cell && <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 8.5, color: "#fff" }}>{cell.w}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Music player dock — matches real gameplay reference ──────────────────────
function MusicPlayer() {
  return (
    <div style={{ flexShrink: 0, padding: "6px 7px 8px" }}>
      <div style={{
        background: "rgba(8,4,20,0.96)",
        borderRadius: 14,
        padding: "7px 8px 6px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          {/* Album art */}
          <div style={{ width: 34, height: 34, borderRadius: 7, background: "linear-gradient(145deg, #4A1A8A, #2A0A50)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>🎵</div>
          {/* Song info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 8, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Sunday Book Club</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 7, color: "rgba(255,255,255,0.42)", marginTop: 1 }}>DJ Maintain</div>
          </div>
          {/* Pause button */}
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="10" height="10" viewBox="0 0 10 10">
              <rect x="1.5" y="1.5" width="2.5" height="7" rx="1" fill="#1a0a30"/>
              <rect x="6"   y="1.5" width="2.5" height="7" rx="1" fill="#1a0a30"/>
            </svg>
          </div>
        </div>
        {/* Progress bar */}
        <div style={{ height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 7 }}>
          <div style={{ width: "38%", height: "100%", background: "#F59E0B", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}

// ─── For S1 and S2 ────────────────────────────────────────────────────────────
// Layout: compact status bar → spacer (comet ball floats here) → grid → music player
export function AccurateGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #7C3AED 0%, #6A25D9 40%, #5418bf 80%)", display: "flex", flexDirection: "column" }}>
      <IosStatusBar />
      {/* Spacer — comet ball floats in this area above the grid */}
      <div style={{ flex: 1, position: "relative", minHeight: 50 }}>
        <CometBall />
      </div>
      <GameGrid />
      <MusicPlayer />
    </div>
  );
}

// ─── For S5 — logo at top, grid pushed close to bottom player ─────────────────
export function LogoGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #7C3AED 0%, #6A25D9 40%, #5418bf 80%)", display: "flex", flexDirection: "column" }}>
      <IosStatusBar />
      <div style={{ height: 6 }} />
      {/* Fredoka One stacked pills — logo */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ background: "#EDE8D4", borderRadius: 7, padding: "3px 11px", marginBottom: -4, position: "relative", zIndex: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <span style={{ fontFamily: FONT, fontSize: 13, color: "#1A0E4E", lineHeight: 1, letterSpacing: 0.5 }}>THE</span>
        </div>
        <div style={{ background: "#1A0E4E", borderRadius: 7, padding: "4px 13px", position: "relative", zIndex: 3, boxShadow: "0 5px 16px rgba(0,0,0,0.35)" }}>
          <span style={{ fontFamily: FONT, fontSize: 18, color: "#EDE8D4", lineHeight: 1, letterSpacing: 0.5 }}>RHYME</span>
        </div>
        <div style={{ background: "#EDE8D4", borderRadius: 7, padding: "3px 11px", marginTop: -4, position: "relative", zIndex: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <span style={{ fontFamily: FONT, fontSize: 14, color: "#1A0E4E", lineHeight: 1, letterSpacing: 0.5 }}>GAME</span>
        </div>
      </div>
      {/* Spacer pushes grid to the bottom */}
      <div style={{ flex: 1 }} />
      <GameGrid />
      <MusicPlayer />
    </div>
  );
}

// ─── Cross-screen sine wave: 3 long arcs across S2 → S3 → S4 ─────────────────
const HALF_PERIOD  = 390;
const PHASE_OFFSET = 390;

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
  for (let n = 10; n >= 0; n--) {
    const xc = PHASE_OFFSET + (2 * n + 1) * (HALF_PERIOD / 2);
    const x  = xc - xOffset;
    if (x >= 0 && x <= slideW) return { x, y: base - amp };
  }
  return null;
}
