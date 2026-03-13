export function RadiantPurple() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4e1fa8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div
        style={{
          width: 390,
          height: 844,
          borderRadius: 52,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          boxShadow:
            "0 0 0 2px rgba(130,60,220,0.5), 0 0 0 10px rgba(80,30,160,0.4), 0 40px 100px rgba(30,10,80,0.65)",
        }}
      >
        {/* Sweeping bright-to-deep gradient */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg, #8b42f0 0%, #6A25D9 28%, #5518c4 60%, #3d13a0 100%)",
          }}
        />

        {/* Warm circular spotlight center */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)",
          width: 460, height: 360,
          background: "radial-gradient(ellipse, rgba(200,160,255,0.15) 0%, transparent 65%)",
        }} />

        {/* Status bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 48,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 28px", zIndex: 30,
        }}>
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

        {/* Action buttons */}
        {[{ left: 20 }, { right: 20 }].map((pos, i) => (
          <div key={i} style={{
            position: "absolute", top: 56, ...pos,
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.22)",
            backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20,
          }}>
            {i === 0 ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6"/>
                <line x1="12" y1="8" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="white"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.6"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="white" strokeWidth="1.6"/>
              </svg>
            )}
          </div>
        ))}

        {/* Ball — centered, large */}
        <div style={{ position: "absolute", top: 155, left: "50%", transform: "translateX(-54%)", display: "flex", alignItems: "center" }}>
          {[0.07, 0.14, 0.22].map((op, i) => (
            <div key={i} style={{
              width: 10 + i * 7, height: 10 + i * 7, borderRadius: "50%",
              background: `rgba(245,158,11,${op * 2.5})`,
              marginRight: 5, filter: "blur(3px)", flexShrink: 0,
            }} />
          ))}
          <div style={{
            width: 58, height: 58, borderRadius: "50%", flexShrink: 0,
            background: "radial-gradient(circle at 33% 27%, #FEF9C3 0%, #FCD34D 18%, #F59E0B 44%, #D97706 70%, #92400E 100%)",
            boxShadow: "0 8px 32px rgba(245,158,11,0.55), 0 0 60px rgba(245,158,11,0.2), inset 0 -10px 16px rgba(0,0,0,0.28), inset 0 6px 12px rgba(255,255,255,0.3)",
          }} />
        </div>

        {/* Logo */}
        <div style={{ position: "absolute", top: 244, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{ background: "#F3F0FF", borderRadius: 18, padding: "8px 40px", marginBottom: -5, zIndex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.22)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 33, color: "#2D1B6E", letterSpacing: 3 }}>THE</span>
          </div>
          <div style={{ background: "#2D1B6E", borderRadius: 18, padding: "10px 46px", zIndex: 2, boxShadow: "0 6px 26px rgba(0,0,0,0.35)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 39, color: "#F3F0FF", letterSpacing: 3 }}>RHYME</span>
          </div>
          <div style={{ background: "#F3F0FF", borderRadius: 18, padding: "8px 40px", marginTop: -5, zIndex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.22)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 33, color: "#2D1B6E", letterSpacing: 3 }}>GAME</span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ position: "absolute", top: 434, left: 0, right: 0, textAlign: "center" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#FEF3C7", letterSpacing: 0.4 }}>
            Learn how to freestyle rap, FAST!
          </span>
        </div>

        {/* Featured mode card — large CTA */}
        <div style={{ position: "absolute", top: 462, left: 16, right: 16 }}>
          <div style={{
            background: "rgba(255,255,255,0.13)",
            border: "1px solid rgba(255,255,255,0.22)",
            backdropFilter: "blur(16px)",
            borderRadius: 22,
            padding: 20,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16, flexShrink: 0,
              background: "linear-gradient(135deg, rgba(251,191,36,0.25), rgba(245,158,11,0.15))",
              border: "1px solid rgba(251,191,36,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
            }}>
              ⚡
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 17, color: "#fff" }}>Quick Freestyle</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>aAaA Double-Time · 16 bars</div>
              <div style={{ marginTop: 10, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: "65%", height: "100%", background: "linear-gradient(to right, #FBBF24, #F59E0B)", borderRadius: 2 }} />
              </div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>65% accuracy avg</div>
            </div>
          </div>

          {/* Two smaller mode cards */}
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            {[
              { emoji: "🏆", name: "Challenger", sub: "Custom · 32 bars" },
              { emoji: "🎯", name: "Practice", sub: "Any pattern" },
            ].map(({ emoji, name, sub }) => (
              <div key={name} style={{
                flex: 1,
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                borderRadius: 16,
                padding: "14px 12px",
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <span style={{ fontSize: 22 }}>{emoji}</span>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#fff" }}>{name}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 92,
          background: "rgba(45,14,110,0.65)",
          backdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14,
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="12" width="4" height="9" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/>
              <rect x="10" y="7" width="4" height="14" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/>
              <rect x="17" y="3" width="4" height="18" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Stats</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, marginBottom: 22 }}>
            <div style={{
              width: 66, height: 66, borderRadius: "50%",
              background: "linear-gradient(145deg, #FBBF24, #D97706)",
              boxShadow: "0 6px 24px rgba(251,191,36,0.52), 0 0 0 5px rgba(251,191,36,0.16)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="7,4 21,12 7,20" fill="#2D1B6E" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24" }}>Play</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Tools</span>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.3)" }} />
      </div>
    </div>
  );
}
