import { RhymeGameLogo } from './RhymeGameLogo';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6), 0 0 60px rgba(251,191,36,0.25)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)", width: 76, height: 22, borderRadius: 11, background: "#0D0D0D", zIndex: 10, border: "1px solid #1a1a1a" }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function GameScreen() {
  const tiles = [
    [null,   null,   { w: "stay", c: "rgba(255,255,255,0.1)" }, { w: "way",   c: "#6A25D9" }],
    [null,   null,   { w: "snow", c: "#3B82F6" },               { w: "flow",  c: "#3B82F6" }],
    [null,   null,   { w: "glow", c: "#3B82F6" },               { w: "know",  c: "#3B82F6" }],
    [{ w: "eat", c: "#F59E0B" }, { w: "heat", c: "#F59E0B" }, { w: "beat", c: "#F59E0B" }, { w: "feat", c: "#F59E0B" }],
    [{ w: "meat",c: "#F59E0B" }, { w: "seat", c: "#F59E0B" }, { w: "neat", c: "#F59E0B" }, { w: "treat",c: "#F59E0B" }],
  ];
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)" }}>
      <div style={{ height: 38, display: "flex", alignItems: "flex-end", padding: "0 14px 4px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>3:59</span>
        <div style={{ width: 40, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.15)", overflow: "hidden" }}><div style={{ width: "75%", height: "100%", background: "#22c55e" }} /></div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "4px 18px" }}>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E)", boxShadow: "0 3px 10px rgba(245,158,11,0.6)" }} />
      </div>
      <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 5 }}>
        {tiles.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 5 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ flex: 1, height: 36, borderRadius: 8, background: cell ? cell.c : "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {cell && <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 8.5, color: "#fff" }}>{cell.w}</span>}
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
      <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(180,120,255,0.18) 0%, transparent 65%)" }} />

      {/* Logo — proper, centered top */}
      <div style={{ position: "absolute", top: 52, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
        <RhymeGameLogo size="small" />
      </div>

      {/* Headline — left-aligned, below logo */}
      <div style={{ position: "absolute", top: 240, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 46, lineHeight: 1.05, color: "#fff", letterSpacing: 0 }}>
          Learn to<br />Freestyle Rap<br /><span style={{ color: "#FBBF24" }}>in 5 Minutes</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 14, lineHeight: 1.55 }}>
          Master rhymes. Flow with the beat.<br />Build your bars from Day 1.
        </div>
      </div>

      {/* Phone — angled, bottom-right, bleeding off edge */}
      <GoldPhone rotate={-12} x={90} y={500}>
        <GameScreen />
      </GoldPhone>

      {/* Gold ball — large, right edge (connecting to S2) */}
      <div style={{ position: "absolute", top: 514, right: -26, width: 86, height: 86, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 12px 48px rgba(245,158,11,0.75), inset 0 -10px 18px rgba(0,0,0,0.3), inset 0 6px 10px rgba(255,255,255,0.25)", zIndex: 15 }} />
    </div>
  );
}
