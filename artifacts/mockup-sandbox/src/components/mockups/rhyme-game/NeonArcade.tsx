export function NeonArcade() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060410",
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
          boxShadow: "0 0 0 2px #1f0a4e, 0 0 0 10px #0d0420, 0 40px 120px rgba(0,0,0,0.9), 0 0 80px rgba(139,60,255,0.12)",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#09051a",
          }}
        />

        {/* Neon grid lines */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}
          viewBox="0 0 390 844"
          preserveAspectRatio="none"
        >
          {[60, 120, 180, 240, 300, 360].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="844" stroke="#8B3CFF" strokeWidth="1"/>
          ))}
          {[80, 160, 240, 320, 400, 480, 560, 640, 720, 800].map(y => (
            <line key={y} x1="0" y1={y} x2="390" y2={y} stroke="#8B3CFF" strokeWidth="1"/>
          ))}
        </svg>

        {/* Center glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,60,255,0.28) 0%, rgba(109,40,217,0.12) 40%, transparent 70%)",
          }}
        />

        {/* Status bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            zIndex: 30,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.6)" />
              <rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.6)" />
              <rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.6)" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.6)" />
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
              <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.6)"/>
              <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.6)"/>
            </svg>
          </div>
        </div>

        {/* Icon buttons */}
        <div
          style={{
            position: "absolute", top: 56, left: 20, width: 40, height: 40, borderRadius: "50%",
            background: "rgba(139,60,255,0.12)", border: "1px solid rgba(139,60,255,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#A78BFA" strokeWidth="1.6"/>
            <line x1="12" y1="8" x2="12" y2="13" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="1" fill="#A78BFA"/>
          </svg>
        </div>
        <div
          style={{
            position: "absolute", top: 56, right: 20, width: 40, height: 40, borderRadius: "50%",
            background: "rgba(139,60,255,0.12)", border: "1px solid rgba(139,60,255,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#A78BFA" strokeWidth="1.6"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#A78BFA" strokeWidth="1.6"/>
          </svg>
        </div>

        {/* Ball with strong neon glow */}
        <div
          style={{
            position: "absolute",
            top: 155,
            left: "50%",
            transform: "translateX(-55%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Extended trail */}
          {[0.04, 0.08, 0.13, 0.2].map((op, i) => (
            <div
              key={i}
              style={{
                width: 8 + i * 7,
                height: 8 + i * 7,
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(251,191,36,${op * 3}), rgba(217,119,6,${op}))`,
                marginRight: 4,
                filter: "blur(3px)",
                flexShrink: 0,
              }}
            />
          ))}
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 32% 25%, #FEF3C7 0%, #FCD34D 20%, #F59E0B 45%, #D97706 70%, #92400E 100%)",
              boxShadow:
                "0 0 40px rgba(245,158,11,0.7), 0 0 80px rgba(245,158,11,0.3), inset 0 -10px 18px rgba(0,0,0,0.35), inset 0 6px 12px rgba(255,255,255,0.35)",
              flexShrink: 0,
            }}
          />
        </div>

        {/* Logo with neon border */}
        <div
          style={{
            position: "absolute",
            top: 248,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          <div
            style={{
              background: "#F3F0FF",
              borderRadius: 18,
              padding: "8px 40px",
              marginBottom: -6,
              zIndex: 1,
              boxShadow: "0 0 20px rgba(139,60,255,0.3), 0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 34, color: "#2D1B6E", letterSpacing: 4 }}>THE</span>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #2D1B6E, #1a0f4e)",
              borderRadius: 18,
              padding: "10px 48px",
              zIndex: 2,
              boxShadow: "0 0 30px rgba(139,60,255,0.5), 0 6px 24px rgba(0,0,0,0.5)",
              border: "1px solid rgba(139,60,255,0.4)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 40, color: "#F3F0FF", letterSpacing: 4 }}>RHYME</span>
          </div>
          <div
            style={{
              background: "#F3F0FF",
              borderRadius: 18,
              padding: "8px 40px",
              marginTop: -6,
              zIndex: 1,
              boxShadow: "0 0 20px rgba(139,60,255,0.3), 0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 34, color: "#2D1B6E", letterSpacing: 4 }}>GAME</span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ position: "absolute", top: 448, left: 0, right: 0, textAlign: "center" }}>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 14,
              fontWeight: 800,
              background: "linear-gradient(90deg, #FBBF24, #F59E0B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: 0.5,
            }}
          >
            Learn how to freestyle rap, FAST!
          </span>
        </div>

        {/* Neon streak dividers */}
        <div
          style={{
            position: "absolute",
            top: 478,
            left: 30,
            right: 30,
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(139,60,255,0.5), rgba(251,191,36,0.4), rgba(139,60,255,0.5), transparent)",
          }}
        />

        {/* Quickstart modes */}
        <div
          style={{
            position: "absolute",
            top: 495,
            left: 20,
            right: 20,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {[
            { label: "Quick Freestyle", sub: "aAaA · 16 bars", icon: "⚡", active: true },
            { label: "Challenger Mode", sub: "Custom · 32 bars", icon: "🔥", active: false },
          ].map(({ label, sub, icon, active }) => (
            <div
              key={label}
              style={{
                background: active
                  ? "linear-gradient(135deg, rgba(139,60,255,0.22), rgba(109,40,217,0.14))"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${active ? "rgba(139,60,255,0.45)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 16,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: active ? "rgba(139,60,255,0.3)" : "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                {icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: active ? "#fff" : "rgba(255,255,255,0.6)" }}>{label}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: active ? "#A78BFA" : "rgba(255,255,255,0.3)" }}>{sub}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke={active ? "#A78BFA" : "rgba(255,255,255,0.2)"} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0, height: 92,
            background: "rgba(6,4,16,0.8)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(139,60,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14,
          }}
        >
          {[
            { icon: "stats", label: "Stats", active: false },
            { icon: "play", label: "Play", active: true },
            { icon: "tools", label: "Tools", active: false },
          ].map(({ label, active, icon }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, ...(icon === "play" ? { marginBottom: 22 } : {}) }}>
              {icon === "play" ? (
                <div
                  style={{
                    width: 66,
                    height: 66,
                    borderRadius: "50%",
                    background: "linear-gradient(145deg, #FBBF24, #D97706)",
                    boxShadow: "0 0 30px rgba(251,191,36,0.55), 0 0 60px rgba(251,191,36,0.2), 0 0 0 5px rgba(251,191,36,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polygon points="7,4 21,12 7,20" fill="#09051a" />
                  </svg>
                </div>
              ) : icon === "stats" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: active ? "#FBBF24" : "rgba(255,255,255,0.28)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.2)" }} />
      </div>
    </div>
  );
}
