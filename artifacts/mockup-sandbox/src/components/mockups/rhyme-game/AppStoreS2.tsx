import bigmicImg from '@assets/bigmic.png';

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

function GameScreen2() {
  const tiles = [
    [null,                         null,                         { w: "fray", c: "rgba(255,255,255,0.1)" }, { w: "day",     c: "rgba(255,255,255,0.1)" }],
    [{ w: "snow",   c: "#3B82F6" }, { w: "flow",    c: "#3B82F6" }, { w: "glow",   c: "#3B82F6" },            { w: "know",    c: "#3B82F6" }],
    [{ w: "blow",   c: "#3B82F6" }, { w: "low",     c: "#3B82F6" }, { w: "show",   c: "#3B82F6" },            { w: "grow",    c: "#3B82F6" }],
    [{ w: "danger", c: "#F59E0B" }, { w: "anger",   c: "#F59E0B" }, { w: "ranger", c: "#F59E0B" },            { w: "iller",   c: "#10B981" }],
    [{ w: "stranger",c:"#F59E0B" }, { w: "chamber", c: "#F59E0B" }, { w: "manger", c: "#F59E0B" },            { w: "spiller", c: "#10B981" }],
  ];
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)" }}>
      <div style={{ height: 38, display: "flex", alignItems: "flex-end", padding: "0 14px 4px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>3:59</span>
        <div style={{ width: 40, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.15)", overflow: "hidden" }}><div style={{ width: "60%", height: "100%", background: "#22c55e" }} /></div>
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

export function AppStoreS2() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -40, right: -40, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Headline — top left */}
      <div style={{ position: "absolute", top: 56, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 46, lineHeight: 1.05, color: "#fff" }}>
          Follow the<br /><span style={{ color: "#FBBF24" }}>Bouncing</span><br />Beat
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 12, lineHeight: 1.55 }}>
          Follow the ball! It's like Duolingo<br />for rap. Practice anywhere.
        </div>
      </div>

      {/* Phone — left side, bleeding off left edge */}
      <GoldPhone rotate={9} x={-44} y={382}>
        <GameScreen2 />
      </GoldPhone>

      {/* Big Mic — right side, pointing at phone */}
      <img
        src={bigmicImg}
        alt="Big Mic mascot"
        style={{ position: "absolute", bottom: 0, right: -24, width: 260, height: "auto", zIndex: 20, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
      />

      {/* Subtle connecting glow left */}
      <div style={{ position: "absolute", top: 430, left: -30, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)", zIndex: 5 }} />
    </div>
  );
}
