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

function GameScreen2() {
  const rows = [
    [{ w: "fray", c: "rgba(255,255,255,0.1)" }, { w: "pray", c: "rgba(255,255,255,0.1)" }, { w: "sway", c: "rgba(255,255,255,0.1)" }, { w: "day", c: "rgba(255,255,255,0.1)" }],
    [{ w: "snow", c: "#3B82F6" }, { w: "flow", c: "#3B82F6" }, { w: "glow", c: "#3B82F6" }, { w: "know", c: "#3B82F6" }],
    [{ w: "blow", c: "#3B82F6" }, { w: "low",  c: "#3B82F6" }, { w: "show", c: "#3B82F6" }, { w: "grow", c: "#3B82F6" }],
    [{ w: "danger",  c: "#F59E0B" }, { w: "anger",   c: "#F59E0B" }, { w: "ranger",  c: "#F59E0B" }, { w: "iller",  c: "#10B981" }],
    [{ w: "stranger",c: "#F59E0B" }, { w: "chamber", c: "#F59E0B" }, { w: "manger",  c: "#F59E0B" }, { w: "spiller",c: "#10B981" }],
  ];
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)" }}>
      <div style={{ height: 36, display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.8)", fontFamily: "sans-serif" }}>10:55</span>
      </div>
      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E)", boxShadow: "0 4px 14px rgba(245,158,11,0.6)", margin: "6px 10px 10px auto", marginRight: 16 }} />
      <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 4 }}>
        {rows.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 4 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ flex: 1, height: 34, borderRadius: 7, background: cell.c, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 8, color: "#fff" }}>{cell.w}</span>
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
      <div style={{ position: "absolute", top: -40, right: -40, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", bottom: 200, left: -60, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Gold ball entering from left — connects to S1 */}
      <div style={{ position: "absolute", top: 310, left: -22, width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 10px 40px rgba(245,158,11,0.7), inset 0 -10px 18px rgba(0,0,0,0.3)" }} />

      {/* Headline — top left */}
      <div style={{ position: "absolute", top: 60, left: 28, right: 28 }}>
        <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 40, lineHeight: 1.1, color: "#fff" }}>
          Follow the<br /><span style={{ color: "#FBBF24" }}>Bouncing</span><br />Beat
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 12, lineHeight: 1.5 }}>
          Follow the ball! It's like<br />Duolingo for rap. Practice anywhere.
        </div>
      </div>

      {/* Phone — left-aligned, bleeding off left, rotated */}
      <GoldPhone rotate={8} x={-30} y={380}>
        <GameScreen2 />
      </GoldPhone>

      {/* Connecting glow left edge */}
      <div style={{ position: "absolute", top: 380, left: -30, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)" }} />

      {/* Right side glow connecting to S3 */}
      <div style={{ position: "absolute", bottom: 100, right: -20, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)" }} />
    </div>
  );
}
