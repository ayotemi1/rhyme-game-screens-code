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

function StatsScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", padding: "36px 8px 8px" }}>
      {/* Mini logo */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: -2 }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #F59E0B 40%, #D97706)", marginBottom: 3 }} />
          <div style={{ background: "#EDE8D4", borderRadius: 6, padding: "2px 10px" }}><span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 8, color: "#1A0E4E" }}>THE</span></div>
          <div style={{ background: "#1A0E4E", borderRadius: 6, padding: "2px 10px", marginTop: -2 }}><span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 10, color: "#EDE8D4" }}>RHYME</span></div>
          <div style={{ background: "#EDE8D4", borderRadius: 6, padding: "2px 10px", marginTop: -2 }}><span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 8, color: "#1A0E4E" }}>GAME</span></div>
        </div>
      </div>
      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginBottom: 5 }}>
        {[{ icon: "🎤", val: "889", label: "TOTAL BARS" }, { icon: "🔥", val: "23", label: "STREAK" }, { icon: "⚡", val: "47", label: "TODAY" }, { icon: "🏆", val: "#12", label: "RANK" }].map(({ icon, val, label }) => (
          <div key={label} style={{ background: "rgba(255,255,255,0.11)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 10, padding: "8px 6px" }}>
            <div style={{ fontSize: 12 }}>{icon}</div>
            <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 16, color: "#fff", lineHeight: 1 }}>{val}</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 6, color: "#FBBF24", fontWeight: 700, letterSpacing: 0.5, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "8px 8px 6px" }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 7, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: 1, marginBottom: 8 }}>THIS WEEK</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 40 }}>
          {[62,100,45,80,30,90,47].map((pct, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, height: "100%" }}>
              <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                <div style={{ width: "100%", height: `${pct}%`, borderRadius: 4, background: i === 6 ? "linear-gradient(to top, #FBBF24, #F59E0B)" : pct > 70 ? "linear-gradient(to top, #8B3CFF, #A78BFA)" : "rgba(255,255,255,0.18)", minHeight: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppStoreS3() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -40, left: -40, width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", bottom: -30, right: -30, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Phone — centered slightly right, straight */}
      <GoldPhone rotate={3} x={90} y={54}>
        <StatsScreen />
      </GoldPhone>

      {/* Bottom headline */}
      <div style={{ position: "absolute", bottom: 60, left: 28, right: 28 }}>
        <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 40, lineHeight: 1.1, color: "#fff" }}>
          Track Your<br />Progress <span style={{ color: "#FBBF24" }}>Daily</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 10, lineHeight: 1.5 }}>
          Build streaks. Level up.<br />Day 1 to Freestyle Champion.
        </div>
      </div>

      {/* Connecting glow right */}
      <div style={{ position: "absolute", top: 240, right: -20, width: 90, height: 90, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)" }} />
    </div>
  );
}
