import bigmicImg from '@assets/bigmic.png';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 9, left: "50%", transform: "translateX(-50%)", width: 86, height: 24, borderRadius: 12, background: "#000", zIndex: 20 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function StatsScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)", padding: "46px 10px 10px" }}>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 12, color: "#fff", letterSpacing: 0.5 }}>Stats &amp; Streaks</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 7 }}>
        {[
          { icon: "🎤", val: "889", label: "TOTAL BARS", hi: false },
          { icon: "🔥", val: "23",  label: "DAY STREAK", hi: true  },
          { icon: "⚡", val: "47",  label: "TODAY",      hi: false },
          { icon: "🏆", val: "#12", label: "RANK",       hi: false },
        ].map(({ icon, val, label, hi }) => (
          <div key={label} style={{ background: hi ? "rgba(251,191,36,0.18)" : "rgba(255,255,255,0.1)", border: `1px solid ${hi ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.15)"}`, borderRadius: 11, padding: "8px 8px 7px" }}>
            <div style={{ fontSize: 13 }}>{icon}</div>
            <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 18, color: hi ? "#FBBF24" : "#fff", lineHeight: 1.1 }}>{val}</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 7, color: hi ? "#FBBF24" : "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: 0.5, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 11, padding: "8px 10px" }}>
        <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 8, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>🎵 Top 3 Most Played</div>
        {[{ name: "Roses", plays: "4 plays" }, { name: "Trap Loop", plays: "3 plays" }, { name: "Sunday Book Club", plays: "2 plays" }].map(({ name, plays }, i) => (
          <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: i < 2 ? 6 : 0 }}>
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              <span style={{ fontSize: 9 }}>{["🥇","🥈","🥉"][i]}</span>
              <span style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 9, color: "#fff" }}>{name}</span>
            </div>
            <span style={{ fontFamily: "sans-serif", fontSize: 8, color: "#A78BFA", fontWeight: 700 }}>{plays}</span>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 52, background: "rgba(20,8,60,0.9)", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 8, padding: "0 10px 6px" }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(106,37,217,0.5)", flexShrink: 0, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>🎵</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 8, color: "#fff" }}>Roses</div>
          <div style={{ fontFamily: "sans-serif", fontSize: 7, color: "rgba(255,255,255,0.4)" }}>Bizzle Beats</div>
        </div>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>⏸</div>
      </div>
    </div>
  );
}

export function AppStoreS3() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -30, left: -30, width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />

      {/* Phone — upper-center, slight tilt */}
      <GoldPhone rotate={4} x={82} y={48}>
        <StatsScreen />
      </GoldPhone>

      {/* 🔥 STREAK BADGE — jumps out of phone, overlapping frame */}
      <div style={{
        position: "absolute", top: 202, right: 14, zIndex: 30,
        background: "linear-gradient(135deg, #FF6B35 0%, #FF4500 60%, #CC2A00 100%)",
        borderRadius: 22, padding: "14px 18px 12px",
        boxShadow: "0 16px 48px rgba(255,80,0,0.65), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
        transform: "rotate(6deg)", border: "2px solid rgba(255,200,100,0.4)"
      }}>
        <span style={{ fontSize: 28 }}>🔥</span>
        <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 44, color: "#fff", lineHeight: 1, letterSpacing: 1 }}>23</span>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 10, color: "rgba(255,255,255,0.85)", letterSpacing: 2, textTransform: "uppercase" }}>Day Streak</span>
      </div>

      {/* Bottom headline */}
      <div style={{ position: "absolute", bottom: 42, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 38, lineHeight: 1.08, color: "#fff" }}>
          Track Your<br />Progress <span style={{ color: "#FBBF24" }}>Daily</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 8, lineHeight: 1.5 }}>
          Build streaks. Level up. Day 1 to Freestyle Champion.
        </div>
      </div>
    </div>
  );
}
