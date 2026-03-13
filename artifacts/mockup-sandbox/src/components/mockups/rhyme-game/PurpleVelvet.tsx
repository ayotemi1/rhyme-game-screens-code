export function PurpleVelvet() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#3b1a8a",
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
            "0 0 0 2px rgba(106,37,217,0.6), 0 0 0 10px rgba(60,20,130,0.5), 0 40px 100px rgba(30,10,80,0.7)",
        }}
      >
        {/* Rich purple base — not black */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 42%, #7c3aed 0%, #6A25D9 30%, #4f1db8 65%, #3b1490 100%)",
          }}
        />

        {/* Soft top highlight */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 500,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Status bar */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 48,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 28px", zIndex: 30,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.8)" />
              <rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.8)" />
              <rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.8)" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.8)" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 24 16" fill="rgba(255,255,255,0.8)">
              <path d="M12 3C7.95 3 4.21 4.34 1.2 6.6L3 8.4c2.55-1.92 5.7-3 9-3s6.45 1.08 9 3l1.8-1.8C19.79 4.34 16.05 3 12 3z"/>
              <path d="M12 7c-2.76 0-5.26 1.12-7.07 2.93L6.7 11.7A7.45 7.45 0 0112 9.4c2.08 0 3.96.84 5.3 2.2l1.77-1.77A9.95 9.95 0 0012 7z"/>
              <circle cx="12" cy="15" r="2"/>
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2"/>
              <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.8)"/>
              <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.8)"/>
            </svg>
          </div>
        </div>

        {/* Action buttons */}
        {[{ left: 20 }, { right: 20 }].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute", top: 56, ...pos,
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20,
            }}
          >
            {i === 0 ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6"/>
                <line x1="12" y1="8" x2="12" y2="13" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="rgba(255,255,255,0.9)"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6"/>
              </svg>
            )}
          </div>
        ))}

        {/* Ball with trail */}
        <div style={{ position: "absolute", top: 162, left: "50%", transform: "translateX(-56%)", display: "flex", alignItems: "center" }}>
          {[0.08, 0.15, 0.25].map((op, i) => (
            <div key={i} style={{
              width: 9 + i * 7, height: 9 + i * 7, borderRadius: "50%",
              background: `radial-gradient(circle, rgba(251,191,36,${op * 2.5}), rgba(217,119,6,${op}))`,
              marginRight: 4, filter: "blur(3px)", flexShrink: 0,
            }} />
          ))}
          <div style={{
            width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
            background: "radial-gradient(circle at 33% 27%, #FEF9C3 0%, #FCD34D 18%, #F59E0B 44%, #D97706 70%, #92400E 100%)",
            boxShadow: "0 6px 28px rgba(245,158,11,0.55), 0 0 50px rgba(245,158,11,0.2), inset 0 -8px 14px rgba(0,0,0,0.28), inset 0 5px 10px rgba(255,255,255,0.32)",
          }} />
        </div>

        {/* Logo */}
        <div style={{ position: "absolute", top: 248, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{ background: "#F3F0FF", borderRadius: 18, padding: "8px 38px", marginBottom: -5, zIndex: 1, boxShadow: "0 3px 16px rgba(0,0,0,0.2)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 33, color: "#2D1B6E", letterSpacing: 3 }}>THE</span>
          </div>
          <div style={{ background: "#2D1B6E", borderRadius: 18, padding: "10px 46px", zIndex: 2, boxShadow: "0 6px 24px rgba(0,0,0,0.35)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 39, color: "#F3F0FF", letterSpacing: 3 }}>RHYME</span>
          </div>
          <div style={{ background: "#F3F0FF", borderRadius: 18, padding: "8px 38px", marginTop: -5, zIndex: 1, boxShadow: "0 3px 16px rgba(0,0,0,0.2)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 33, color: "#2D1B6E", letterSpacing: 3 }}>GAME</span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ position: "absolute", top: 440, left: 0, right: 0, textAlign: "center" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#FBBF24" }}>
            Learn how to freestyle rap, FAST!
          </span>
        </div>

        {/* Stat chips — slightly more vivid on purple */}
        <div style={{ position: "absolute", top: 472, left: 16, right: 16, display: "flex", gap: 8 }}>
          {[
            { icon: "🎤", val: "147", label: "Sessions" },
            { icon: "🔥", val: "23", label: "Day Streak" },
            { icon: "⭐", val: "4.2K", label: "Points" },
          ].map(({ icon, val, label }) => (
            <div key={label} style={{
              flex: 1,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: "12px 8px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 20, marginBottom: 3 }}>{icon}</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 17, color: "#fff" }}>{val}</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.55)", marginTop: 1 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Weekly progress bar */}
        <div style={{ position: "absolute", top: 570, left: 16, right: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: 1, textTransform: "uppercase" }}>Weekly goal</span>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800, color: "#FBBF24" }}>5 / 7 days</span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.15)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ width: "71%", height: "100%", background: "linear-gradient(to right, #FBBF24, #F59E0B)", borderRadius: 4 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: i < 5 ? "rgba(251,191,36,0.9)" : "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {i < 5 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4 12l6 6 10-10" stroke="#1a0f3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 92,
          background: "rgba(42,16,105,0.72)",
          backdropFilter: "blur(22px)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14,
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="12" width="4" height="9" rx="1" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8"/>
              <rect x="10" y="7" width="4" height="14" rx="1" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8"/>
              <rect x="17" y="3" width="4" height="18" rx="1" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>Stats</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, marginBottom: 22 }}>
            <div style={{
              width: 66, height: 66, borderRadius: "50%",
              background: "linear-gradient(145deg, #FBBF24, #D97706)",
              boxShadow: "0 6px 24px rgba(251,191,36,0.5), 0 0 0 5px rgba(251,191,36,0.14)",
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
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>Tools</span>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.25)" }} />
      </div>
    </div>
  );
}
