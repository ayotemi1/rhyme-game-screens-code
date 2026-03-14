import { RhymeGameLogo } from './RhymeGameLogo';

export function JewelStats() {
  const weekActivity = [62, 100, 45, 80, 30, 90, 47];
  const weekLabels = ["M", "T", "W", "T", "F", "S", "S"];

  const beats = [
    { rank: 1, medal: "🥇", title: "Sunday Book Club", artist: "DJ Maintain", plays: 7, color: "#F59E0B" },
    { rank: 2, medal: "🥈", title: "Roses", artist: "Bizzle Beats", plays: 6, color: "#9CA3AF" },
    { rank: 3, medal: "🥉", title: "Trap Loop", artist: "The Rhyme Game", plays: 4, color: "#CD7C2F" },
  ];

  const overviewStats = [
    { label: "Total Bars", value: "889", sub: "all time", icon: "🎤" },
    { label: "Day Streak", value: "3", sub: "days 🔥", icon: "🔥" },
    { label: "Bars Today", value: "47", sub: "today", icon: "⚡" },
    { label: "Best Streak", value: "3", sub: "days 🏆", icon: "🏆" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#3d1490",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24, fontFamily: "'Nunito', sans-serif",
    }}>
      <div style={{
        width: 390, height: 844, borderRadius: 52,
        overflow: "hidden", position: "relative", flexShrink: 0,
        boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)",
      }}>

        {/* Background */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)" }} />
        <div style={{ position: "absolute", top: -80, right: -60, width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 80, left: -80, width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 280, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.16) 0%, transparent 62%)", pointerEvents: "none" }} />

        {/* Status bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 30 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.85)" />
              <rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.85)" />
              <rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.85)" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.85)" />
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2"/>
              <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.85)"/>
              <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.85)"/>
            </svg>
          </div>
        </div>

        {/* Back button */}
        <div style={{ position: "absolute", top: 58, left: 16, width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Logo */}
        <div style={{ position: "absolute", top: 48, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <RhymeGameLogo size="small" />
        </div>

        {/* Scrollable content */}
        <div style={{ position: "absolute", top: 240, bottom: 92, left: 0, right: 0, overflowY: "auto", padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Page title */}
          <div style={{ textAlign: "center", marginBottom: 2 }}>
            <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 26, color: "#fff", letterSpacing: 0.5 }}>Stats &amp; Streaks</span>
          </div>

          {/* 4-stat hero grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {overviewStats.map(({ label, value, sub, icon }) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.11)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                borderRadius: 20, padding: "16px 14px",
                display: "flex", flexDirection: "column", gap: 4,
              }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 36, color: "#fff", lineHeight: 1 }}>{value}</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 11, color: "#FBBF24", textTransform: "uppercase", letterSpacing: 1 }}>{label}</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{sub}</span>
              </div>
            ))}
          </div>

          {/* Weekly activity bar chart */}
          <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(14px)", borderRadius: 20, padding: "16px 18px" }}>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "rgba(255,255,255,0.6)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>This Week</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 60 }}>
              {weekActivity.map((pct, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
                  <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                    <div style={{
                      width: "100%",
                      height: `${pct}%`,
                      borderRadius: 6,
                      background: i === 6
                        ? "linear-gradient(to top, #FBBF24, #F59E0B)"
                        : pct > 70
                        ? "linear-gradient(to top, #8B3CFF, #A78BFA)"
                        : "rgba(255,255,255,0.18)",
                      boxShadow: i === 6 ? "0 0 10px rgba(251,191,36,0.5)" : pct > 70 ? "0 0 8px rgba(139,60,255,0.4)" : "none",
                      minHeight: 4,
                    }} />
                  </div>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: i === 6 ? "#FBBF24" : "rgba(255,255,255,0.4)" }}>{weekLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top 3 Beats */}
          <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(14px)", borderRadius: 20, padding: "16px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 16 }}>🎵</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>Top 3 Most Played Beats</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {beats.map(({ medal, title, artist, plays, color }, i) => (
                <div key={i}>
                  {i > 0 && <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "10px 0" }} />}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{medal}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{artist}</div>
                      {/* Play count bar */}
                      <div style={{ marginTop: 6, height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
                        <div style={{ width: `${(plays / 7) * 100}%`, height: "100%", background: color, borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: "right" }}>
                      <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 18, color }}>
                        {plays}
                      </span>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: 0.5 }}>PLAYS</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Music bar */}
        <div style={{ position: "absolute", bottom: 92, left: 14, right: 14, zIndex: 20, background: "rgba(20,8,60,0.55)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: 18, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: 10, background: "linear-gradient(135deg, rgba(106,37,217,0.6), rgba(45,27,110,0.8))", border: "1px solid rgba(251,191,36,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>🎵</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Sunday Book Club</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
            <div style={{ height: 2, background: "rgba(255,255,255,0.12)", borderRadius: 2, marginTop: 4 }}>
              <div style={{ width: "38%", height: "100%", background: "#22c55e", borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#2D1B6E">
              <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 92, background: "rgba(48,14,120,0.65)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14, zIndex: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="12" width="4" height="9" rx="1" stroke="#FBBF24" strokeWidth="1.8"/>
              <rect x="10" y="7" width="4" height="14" rx="1" stroke="#FBBF24" strokeWidth="1.8"/>
              <rect x="17" y="3" width="4" height="18" rx="1" stroke="#FBBF24" strokeWidth="1.8"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24" }}>Stats</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, marginBottom: 22 }}>
            <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(145deg, #FBBF24, #D97706)", boxShadow: "0 6px 24px rgba(251,191,36,0.52), 0 0 0 5px rgba(251,191,36,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="7,4 21,12 7,20" fill="#2D1B6E" /></svg>
            </div>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Play</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>Tools</span>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.28)", zIndex: 21 }} />

      </div>
    </div>
  );
}
