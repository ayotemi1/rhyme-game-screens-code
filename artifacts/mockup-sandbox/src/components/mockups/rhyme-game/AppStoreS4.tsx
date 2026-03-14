import bigmicMicHold from '@assets/bigmic-michold.png';
import gameplayPhoto from '@assets/gameplay-photo.png';

const X_OFFSET = 1170;
const SVG_TOP  = 340;
const SVG_H    = 260;

// Half-arc: enters from left contact, curves UP to ball peak — line terminates at ball.
// No right-side continuation; the ball is the visual endpoint of the arc.
function SineTrailS4() {
  const base   = SVG_H - 14;          // 246  — y at contact points (bottom of arc)
  const amp    = SVG_H * 0.85;        // 221  — arc height
  const HP     = 390;                 // half-period
  const PO     = 390;                 // phase offset
  const peakX  = 195;                 // x on slide where sin = 1 (arc peak)
  const peakY  = base - amp;          // y at peak (~25)
  const ballR  = 30;

  // Sample the sine arc from x=0 → peakX only (half arc, ascending)
  const steps = 32;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x  = (peakX / steps) * i;
    const xc = x + X_OFFSET;
    const y  = base - amp * Math.abs(Math.sin((Math.PI * (xc - PO)) / HP));
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const d = pts.join(" ");

  return (
    <>
      <svg
        style={{ position: "absolute", top: SVG_TOP, left: 0, width: 390, height: SVG_H, zIndex: 2, pointerEvents: "none" }}
        viewBox={`0 0 390 ${SVG_H}`}
      >
        <defs>
          <linearGradient id="wg4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0.28"/>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        {/* Half-arc — left contact to ball peak only */}
        <path d={d} stroke="url(#wg4)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Left entry contact dot */}
        <g>
          <circle cx={0} cy={base} r="16" fill="rgba(251,191,36,0.12)"/>
          <circle cx={0} cy={base} r="8"  fill="rgba(251,191,36,0.32)"/>
          <circle cx={0} cy={base} r="3.5" fill="rgba(251,191,36,0.72)"/>
        </g>
      </svg>

      {/* Ball — sits at the arc peak above the phone image */}
      <div style={{
        position: "absolute",
        left: peakX - ballR,
        top:  SVG_TOP + peakY - ballR,
        width: ballR * 2,
        height: ballR * 2,
        borderRadius: "50%",
        background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)",
        boxShadow: "0 10px 40px rgba(245,158,11,0.85), 0 0 60px rgba(245,158,11,0.35), inset 0 -6px 12px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.28)",
        zIndex: 30,
      }} />
    </>
  );
}

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Full-screen camera view with real gameplay photo + grid floating on top
function LiveGameScreen() {
  const FONT = "'Fredoka One', 'Nunito', sans-serif";
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* Real gameplay photo — fills entire screen */}
      <img
        src={gameplayPhoto}
        alt="Gameplay camera view"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
      />

      {/* Status bar — overlay on photo */}
      <div style={{ position: "relative", zIndex: 10, height: 38, display: "flex", alignItems: "flex-end", padding: "0 14px 4px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", fontFamily: "sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>3:59</span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
          <span style={{ fontSize: 7, fontWeight: 700, color: "#22c55e", fontFamily: "sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>LIVE</span>
        </div>
      </div>

      {/* Soft gradient at bottom for grid readability */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 220, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.45))", zIndex: 5 }} />

      {/* Game grid — hovers over the camera view at the bottom */}
      <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, padding: "0 8px", zIndex: 10, display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          [null, { w: "bling", c: "#10B981" }, null, { w: "ring",  c: "#10B981" }],
          [null, { w: "sing",  c: "rgba(120,90,200,0.7)" }, null, { w: "king",  c: "rgba(120,90,200,0.7)" }],
          [null, { w: "fling", c: "#F59E0B" }, null, { w: "thing", c: "#F59E0B" }],
          [null, null, null, null],
        ].map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 5 }}>
            {row.map((cell: { w: string; c: string } | null, ci) => (
              <div key={ci} style={{
                flex: 1, height: 32, borderRadius: 8,
                background: cell ? cell.c : "rgba(60,40,110,0.55)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {cell && <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 8.5, color: "#fff" }}>{cell.w}</span>}
              </div>
            ))}
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

      {/* Cross-screen sine wave trail */}
      <SineTrailS4 />

      {/* Headline */}
      <div style={{ position: "absolute", top: 56, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 44, lineHeight: 1.05, color: "#fff" }}>
          Share Your<br /><span style={{ color: "#FBBF24" }}>Journey</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 12, lineHeight: 1.55 }}>
          Post your bars. Challenge friends.<br />Join 10,000+ rappers.
        </div>
      </div>

      {/* Phone with real gameplay photo */}
      <GoldPhone rotate={-6} x={82} y={316}>
        <LiveGameScreen />
      </GoldPhone>

      {/* Big Mic — MicHold pose */}
      <img
        src={bigmicMicHold}
        alt="Big Mic mascot holding mic"
        style={{ position: "absolute", bottom: 0, right: -22, width: 240, height: "auto", zIndex: 25, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
      />

      {/* Floating badge */}
      <div style={{ position: "absolute", top: 326, left: 18, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(16px)", borderRadius: 16, padding: "10px 16px", zIndex: 30, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FBBF24", lineHeight: 1 }}>10K+</div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>Rappers</div>
      </div>
    </div>
  );
}
