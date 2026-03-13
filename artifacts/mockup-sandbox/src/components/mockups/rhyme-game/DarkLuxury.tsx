export function DarkLuxury() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e0a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: 390,
          height: 844,
          borderRadius: 52,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 0 0 2px #2a1f4e, 0 0 0 10px #18112e, 0 40px 120px rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}
      >
        {/* Background: deep radial purple */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 38%, #3d1d7a 0%, #29145a 35%, #160b34 70%, #0a0518 100%)",
          }}
        />

        {/* Subtle noise grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Glow pulse rings */}
        <div
          style={{
            position: "absolute",
            top: "28%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "28%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,60,255,0.18) 0%, transparent 70%)",
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
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.7)" />
              <rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.7)" />
              <rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.7)" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.7)" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 24 16" fill="rgba(255,255,255,0.7)">
              <path d="M12 3C7.95 3 4.21 4.34 1.2 6.6L3 8.4c2.55-1.92 5.7-3 9-3s6.45 1.08 9 3l1.8-1.8C19.79 4.34 16.05 3 12 3z"/>
              <path d="M12 7c-2.76 0-5.26 1.12-7.07 2.93L6.7 11.7A7.45 7.45 0 0112 9.4c2.08 0 3.96.84 5.3 2.2l1.77-1.77A9.95 9.95 0 0012 7z"/>
              <circle cx="12" cy="15" r="2"/>
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
              <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.7)"/>
              <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.7)"/>
            </svg>
          </div>
        </div>

        {/* Info / Settings buttons */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.8)" strokeWidth="1.6"/>
            <line x1="12" y1="8" x2="12" y2="13" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="1" fill="rgba(255,255,255,0.8)"/>
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.6"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.6"/>
          </svg>
        </div>

        {/* Ball + trail */}
        <div
          style={{
            position: "absolute",
            top: 168,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Trail */}
          <div style={{ display: "flex", alignItems: "center", marginRight: -6 }}>
            {[0.06, 0.12, 0.2].map((op, i) => (
              <div
                key={i}
                style={{
                  width: 10 + i * 6,
                  height: 10 + i * 6,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 40% 35%, rgba(251,191,36,${op * 2}), rgba(217,119,6,${op}))`,
                  marginRight: 3,
                  filter: "blur(2px)",
                }}
              />
            ))}
          </div>
          {/* Main ball */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 28%, #FDE68A 0%, #F59E0B 40%, #D97706 72%, #78350F 100%)",
              boxShadow:
                "0 6px 30px rgba(245,158,11,0.55), 0 0 60px rgba(245,158,11,0.18), inset 0 -8px 14px rgba(0,0,0,0.3), inset 0 5px 10px rgba(255,255,255,0.28)",
            }}
          />
        </div>

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 250,
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
              padding: "8px 36px",
              marginBottom: -6,
              zIndex: 1,
              boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 32, color: "#2D1B6E", letterSpacing: 3 }}>THE</span>
          </div>
          <div
            style={{
              background: "#2D1B6E",
              borderRadius: 18,
              padding: "10px 44px",
              zIndex: 2,
              boxShadow: "0 6px 28px rgba(45,27,110,0.6)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 38, color: "#F3F0FF", letterSpacing: 3 }}>RHYME</span>
          </div>
          <div
            style={{
              background: "#F3F0FF",
              borderRadius: 18,
              padding: "8px 36px",
              marginTop: -6,
              zIndex: 1,
              boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 32, color: "#2D1B6E", letterSpacing: 3 }}>GAME</span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            position: "absolute",
            top: 440,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#FBBF24",
              letterSpacing: 0.4,
            }}
          >
            Learn how to freestyle rap, FAST!
          </span>
        </div>

        {/* Stats chips row */}
        <div
          style={{
            position: "absolute",
            top: 490,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {[["🎤", "147", "Sessions"], ["🔥", "23", "Day Streak"], ["⭐", "4.2K", "Points"]].map(
            ([icon, val, label]) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 14,
                  padding: "10px 14px",
                  textAlign: "center",
                  minWidth: 80,
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 2 }}>{icon}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 16, color: "#fff" }}>{val}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>{label}</div>
              </div>
            )
          )}
        </div>

        {/* Gold divider line */}
        <div
          style={{
            position: "absolute",
            bottom: 166,
            left: 40,
            right: 40,
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(251,191,36,0.25), transparent)",
          }}
        />

        {/* Bottom nav glass */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 92,
            background: "rgba(14,8,32,0.7)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingBottom: 14,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)" }}>Stats</span>
          </div>

          {/* Center play button raised */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: "50%",
                background: "linear-gradient(145deg, #FBBF24, #D97706)",
                boxShadow:
                  "0 6px 24px rgba(251,191,36,0.5), 0 0 0 5px rgba(251,191,36,0.12), inset 0 2px 4px rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="7,4 21,12 7,20" fill="#1a0f3c" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24" }}>Play</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)" }}>Tools</span>
          </div>
        </div>

        {/* Home indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 5,
            borderRadius: 3,
            background: "rgba(255,255,255,0.25)",
          }}
        />
      </div>
    </div>
  );
}
