import bigmicMicHold from '@assets/bigmic-michold.png';
import { bouncePath, bounceContacts, ballPeakPosition } from './GameScreenContent';

// S4 sine wave: xOffset = 1170 (S4 is the 4th slide)
const X_OFFSET = 1170;
const SVG_TOP  = 340;
const SVG_H    = 260;

function SineTrailS4() {
  const path     = bouncePath(X_OFFSET, 390, SVG_H);
  const contacts = bounceContacts(X_OFFSET, 390, SVG_H);
  const peak     = ballPeakPosition(X_OFFSET, 390, SVG_H); // ball head

  // Slide-level y of ball center
  const ballSlideY = peak ? SVG_TOP + peak.y : 0;
  const ballSlideX = peak ? peak.x : 0;
  const ballR = 30;

  return (
    <>
      <svg
        style={{ position: "absolute", top: SVG_TOP, left: 0, width: 390, height: SVG_H, zIndex: 2, pointerEvents: "none" }}
        viewBox={`0 0 390 ${SVG_H}`}
      >
        <defs>
          <linearGradient id="wg4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.80"/>
          </linearGradient>
        </defs>
        <path d={path} stroke="url(#wg4)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {contacts.map((pt, i) => (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r="16" fill="rgba(251,191,36,0.12)"/>
            <circle cx={pt.x} cy={pt.y} r="8"  fill="rgba(251,191,36,0.32)"/>
            <circle cx={pt.x} cy={pt.y} r="3.5" fill="rgba(251,191,36,0.70)"/>
          </g>
        ))}
      </svg>

      {/* Ball at the peak — the head of the bouncing trail */}
      {peak && (
        <div style={{
          position: "absolute",
          left: ballSlideX - ballR,
          top:  ballSlideY - ballR,
          width: ballR * 2,
          height: ballR * 2,
          borderRadius: "50%",
          background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)",
          boxShadow: "0 10px 40px rgba(245,158,11,0.85), 0 0 60px rgba(245,158,11,0.35), inset 0 -6px 12px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.28)",
          zIndex: 15,
        }} />
      )}
    </>
  );
}

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)", width: 76, height: 22, borderRadius: 11, background: "#0D0D0D", zIndex: 10 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function LiveGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #1a0c3e 0%, #0d0520 100%)" }}>
      <div style={{ height: 38, display: "flex", alignItems: "flex-end", padding: "0 14px 4px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>3:59</span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
          <span style={{ fontSize: 7, fontWeight: 700, color: "#22c55e", fontFamily: "sans-serif" }}>LIVE</span>
        </div>
      </div>
      <div style={{ margin: "6px 12px 0", borderRadius: 20, border: "2px solid rgba(255,255,255,0.12)", overflow: "hidden", height: 200, position: "relative", background: "linear-gradient(160deg, #2a1260 0%, #1a0a40 50%, #0d051a 100%)" }}>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 90, height: 160 }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(145deg, #8B5E3C, #6B4226)", margin: "0 auto 0", border: "2px solid rgba(255,255,255,0.1)" }} />
          <div style={{ width: 70, height: 80, borderRadius: "50% 50% 10px 10px", background: "linear-gradient(145deg, #4A3020, #2A1A10)", margin: "4px auto 0", border: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
        <div style={{ position: "absolute", top: 8, left: 10, background: "rgba(0,0,0,0.5)", borderRadius: 6, padding: "3px 7px", display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff4444" }} />
          <span style={{ fontFamily: "sans-serif", fontSize: 7, color: "#fff", fontWeight: 700 }}>REC 0:47</span>
        </div>
      </div>
      <div style={{ padding: "8px 10px 0", display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          [{ w: "bling", c: "#10B981" }, { w: "ring",  c: "#10B981" }, { w: "sing",  c: "rgba(255,255,255,0.08)" }, { w: "king",  c: "rgba(255,255,255,0.08)" }],
          [{ w: "fling", c: "#10B981" }, { w: "bring", c: "#10B981" }, { w: "swing", c: "rgba(255,255,255,0.08)" }, { w: "thing", c: "rgba(255,255,255,0.08)" }],
          [{ w: "spring",c: "#F59E0B" }, { w: "string",c: "#F59E0B" }, { w: "cling", c: "rgba(255,255,255,0.08)" }, { w: "sting", c: "rgba(255,255,255,0.08)" }],
        ].map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 5 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ flex: 1, height: 34, borderRadius: 7, background: cell.c, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 8, color: "#fff" }}>{cell.w}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 46, background: "rgba(0,0,0,0.7)", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 8, padding: "0 10px 4px" }}>
        <div style={{ width: 26, height: 26, borderRadius: 6, background: "rgba(106,37,217,0.4)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>🎵</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 8, color: "#fff" }}>Sunday Book Club</div>
          <div style={{ fontFamily: "sans-serif", fontSize: 7, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
        </div>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>⏸</div>
      </div>
    </div>
  );
}

export function AppStoreS4() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 220, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.18) 0%, transparent 62%)" }} />

      {/* Cross-screen sine wave trail + ball head */}
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

      {/* Phone */}
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
