import { RhymeGameLogo } from './RhymeGameLogo';

  export function JewelTone() {
    return (
      <div style={{ minHeight: "100vh", background: "#5820c0", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)" }} />
          <div style={{ position: "absolute", top: -80, right: -60, width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: -40, right: -20, width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 80, left: -80, width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 320, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.18) 0%, transparent 60%)", pointerEvents: "none" }} />
          {/* Status bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 30 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>10:55</span>
          </div>
          {/* Logo */}
          <div style={{ position: "absolute", top: 130, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
            <RhymeGameLogo size="medium" />
          </div>
          {/* Tagline */}
          <div style={{ position: "absolute", top: 382, left: 0, right: 0, textAlign: "center" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#FEF3C7" }}>Learn how to freestyle rap, FAST!</span>
          </div>
          {/* Level card */}
          <div style={{ position: "absolute", top: 410, left: 16, right: 16, display: "flex", gap: 10 }}>
            <div style={{ flex: 2, background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(14px)", borderRadius: 18, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg, rgba(251,191,36,0.3), rgba(245,158,11,0.2))", border: "2px solid rgba(251,191,36,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>👑</div>
              <div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, color: "#FBBF24", letterSpacing: 1.5, textTransform: "uppercase" }}>Gold Rapper</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 22, color: "#fff", lineHeight: 1.1 }}>Level 14</div>
                <div style={{ marginTop: 6, height: 5, background: "rgba(255,255,255,0.18)", borderRadius: 3, width: 120, overflow: "hidden" }}>
                  <div style={{ width: "72%", height: "100%", background: "linear-gradient(to right, #FBBF24, #F59E0B)", borderRadius: 3 }} />
                </div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>720 / 1000 XP to Platinum</div>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              {[{ icon: "🔥", val: "23", label: "Day Streak" }, { icon: "🏆", val: "#12", label: "Global Rank" }].map(({ icon, val, label }) => (
                <div key={label} style={{ flex: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff" }}>{val}</span>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.45)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Now Playing */}
          <div style={{ position: "absolute", top: 578, left: 16, right: 16 }}>
            <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)", borderRadius: 18, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(251,191,36,0.18)", border: "1px solid rgba(251,191,36,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🎵</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>Now Playing</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>Always Shroom For More</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)" }}>DJ Maintain</div>
              </div>
            </div>
          </div>
          {/* Bottom nav */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 92, background: "rgba(48,14,120,0.65)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14 }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Stats</span>
            <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(145deg, #FBBF24, #D97706)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="7,4 21,12 7,20" fill="#2D1B6E" /></svg>
            </div>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Tools</span>
          </div>
        </div>
      </div>
    );
  }