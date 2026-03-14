import { RhymeGameLogo } from './RhymeGameLogo';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 216, height: 460, borderRadius: 50, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 4, boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(251,191,36,0.3)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 46, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 72, height: 20, borderRadius: 10, background: "#0D0D0D", zIndex: 10, border: "1px solid #1a1a1a" }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function GameScreen() {
  const rows = [
    [null, null, { w: "stay", c: "#a0a0a0" }, { w: "way", c: "#6A25D9" }],
    [null, null, { w: "snow", c: "#3B82F6" }, { w: "flow", c: "#3B82F6" }],
    [null, null, { w: "glow", c: "#3B82F6" }, { w: "know", c: "#3B82F6" }],
    [{ w: "eat", c: "#F59E0B" }, { w: "heat", c: "#F59E0B" }, { w: "beat", c: "#F59E0B" }, { w: "feat", c: "#F59E0B" }],
    [{ w: "meat", c: "#F59E0B" }, { w: "seat", c: "#F59E0B" }, { w: "neat", c: "#F59E0B" }, { w: "treat", c: "#F59E0B" }],
  ];
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)" }}>
      {/* Status */}
      <div style={{ height: 36, display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.8)", fontFamily: "sans-serif" }}>10:55</span>
      </div>
      {/* Ball */}
      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E)", boxShadow: "0 4px 14px rgba(245,158,11,0.6)", margin: "8px auto 10px", marginLeft: 120 }} />
      {/* Grid */}
      <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 4 }}>
        {rows.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 4 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ flex: 1, height: 34, borderRadius: 7, background: cell ? cell.c : "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {cell && <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 9, color: "#fff" }}>{cell.w}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppStoreS1() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      {/* Glow top */}
      <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(180,120,255,0.2) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Connecting glow right edge */}
      <div style={{ position: "absolute", top: 350, right: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.25) 0%, transparent 70%)" }} />

      {/* Logo */}
      <div style={{ position: "absolute", top: 54, left: "50%", transform: "translateX(-50%)" }}>
        <RhymeGameLogo size="small" />
      </div>

      {/* Headline */}
      <div style={{ position: "absolute", top: 220, left: 28, right: 28 }}>
        <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 42, lineHeight: 1.1, color: "#fff", letterSpacing: 0 }}>
          Learn to<br />Freestyle Rap<br /><span style={{ color: "#FBBF24" }}>in 5 Minutes</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 12, lineHeight: 1.5 }}>
          Master rhymes. Flow with the beat.<br />Build your bars from Day 1.
        </div>
      </div>

      {/* Phone — angled right, bleeding off right edge */}
      <GoldPhone rotate={-10} x={108} y={488}>
        <GameScreen />
      </GoldPhone>

      {/* Gold ball — connecting element at right edge */}
      <div style={{ position: "absolute", top: 500, right: -18, width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 10px 40px rgba(245,158,11,0.7), inset 0 -10px 18px rgba(0,0,0,0.3), inset 0 6px 10px rgba(255,255,255,0.25)" }} />
    </div>
  );
}
