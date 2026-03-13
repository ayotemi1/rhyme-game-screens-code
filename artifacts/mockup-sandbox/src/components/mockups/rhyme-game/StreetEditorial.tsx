export function StreetEditorial() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
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
          boxShadow: "0 0 0 2px #1a1a1a, 0 0 0 10px #111, 0 40px 120px rgba(0,0,0,0.9)",
        }}
      >
        {/* Background: near-black with warm undertone */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(170deg, #0f0a1e 0%, #0a0814 60%, #050310 100%)",
          }}
        />

        {/* Subtle warm spotlight */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(76,29,149,0.18) 0%, transparent 65%)",
          }}
        />

        {/* Horizontal rule accent top */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(to right, transparent 8%, rgba(251,191,36,0.25) 30%, rgba(251,191,36,0.25) 70%, transparent 92%)",
          }}
        />

        {/* Status bar */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, height: 48,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 28px", zIndex: 30,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.55)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.55)" />
              <rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.55)" />
              <rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.55)" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.55)" />
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2"/>
              <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.55)"/>
              <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.55)"/>
            </svg>
          </div>
        </div>

        {/* Icon row */}
        <div style={{ position: "absolute", top: 56, left: 20, right: 20, display: "flex", justifyContent: "space-between", zIndex: 20 }}>
          {[true, false].map((left) => (
            <div
              key={String(left)}
              style={{
                width: 40, height: 40, borderRadius: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {left ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6"/>
                  <line x1="12" y1="8" x2="12" y2="13" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="16" r="1" fill="rgba(255,255,255,0.6)"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6"/>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6"/>
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Ball: large, editorial placement, off-center */}
        <div
          style={{
            position: "absolute",
            top: 118,
            right: 48,
            width: 68,
            height: 68,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 32% 25%, #FEF3C7 0%, #FBBF24 25%, #F59E0B 50%, #D97706 74%, #78350F 100%)",
            boxShadow:
              "0 8px 36px rgba(245,158,11,0.5), 0 0 80px rgba(245,158,11,0.15), inset 0 -10px 18px rgba(0,0,0,0.3), inset 0 6px 12px rgba(255,255,255,0.3)",
          }}
        />
        {/* Trail for the ball */}
        <div
          style={{
            position: "absolute",
            top: 138,
            right: 116,
            display: "flex",
            flexDirection: "row-reverse",
            gap: 4,
            alignItems: "center",
          }}
        >
          {[0.22, 0.13, 0.07].map((op, i) => (
            <div
              key={i}
              style={{
                width: 22 - i * 6,
                height: 22 - i * 6,
                borderRadius: "50%",
                background: `rgba(245,158,11,${op})`,
                filter: "blur(3px)",
              }}
            />
          ))}
        </div>

        {/* Large editorial logo — centered */}
        <div
          style={{
            position: "absolute",
            top: 200,
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
              background: "#F8F5FF",
              borderRadius: 20,
              padding: "10px 44px",
              marginBottom: -7,
              zIndex: 1,
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 36, color: "#1e0f52", letterSpacing: 5 }}>THE</span>
          </div>
          <div
            style={{
              background: "#1e0f52",
              borderRadius: 20,
              padding: "12px 52px",
              zIndex: 2,
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 44, color: "#F8F5FF", letterSpacing: 5 }}>RHYME</span>
          </div>
          <div
            style={{
              background: "#F8F5FF",
              borderRadius: 20,
              padding: "10px 44px",
              marginTop: -7,
              zIndex: 1,
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 36, color: "#1e0f52", letterSpacing: 5 }}>GAME</span>
          </div>
        </div>

        {/* Tagline — editorial weight */}
        <div style={{ position: "absolute", top: 424, left: 0, right: 0, textAlign: "center" }}>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#FBBF24",
            }}
          >
            Learn to freestyle rap, FAST
          </span>
        </div>

        {/* Thin gold rule */}
        <div
          style={{
            position: "absolute",
            top: 448,
            left: 40,
            right: 40,
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(251,191,36,0.3), transparent)",
          }}
        />

        {/* Current track — large card */}
        <div
          style={{
            position: "absolute",
            top: 468,
            left: 20,
            right: 20,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20,
            padding: 16,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "linear-gradient(135deg, #2D1B6E, #0f081e)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%, rgba(251,191,36,0.2), transparent)" }} />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="3" fill="rgba(251,191,36,0.6)"/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Always Shroom For More</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>DJ Maintain</div>
            <div style={{ height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 8 }}>
              <div style={{ width: "35%", height: "100%", background: "#22c55e", borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
              <polygon points="19,20 9,12 19,4" />
              <line x1="5" y1="19" x2="5" y2="5" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            </svg>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#0a0814">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
              <polygon points="5,4 15,12 5,20" />
              <line x1="19" y1="5" x2="19" y2="19" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Recent sessions */}
        <div style={{ position: "absolute", top: 564, left: 20, right: 20 }}>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 10 }}>
            Recent Sessions
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { title: "aAaA Double-Time", sub: "32 bars · 3 hrs ago", score: "98%" },
              { title: "All Rhymes Filled", sub: "16 bars · Yesterday", score: "85%" },
            ].map(({ title, sub, score }) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  padding: "10px 14px",
                  gap: 12,
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FBBF24", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{title}</div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{sub}</div>
                </div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 15, color: "#FBBF24" }}>{score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0, height: 92,
            background: "rgba(5,3,10,0.85)",
            backdropFilter: "blur(28px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
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
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "linear-gradient(145deg, #FBBF24, #D97706)",
                    boxShadow: "0 4px 24px rgba(251,191,36,0.45), 0 0 0 5px rgba(251,191,36,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <polygon points="7,4 21,12 7,20" fill="#050310" />
                  </svg>
                </div>
              ) : icon === "stats" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="12" width="4" height="9" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"/>
                  <rect x="10" y="7" width="4" height="14" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"/>
                  <rect x="17" y="3" width="4" height="18" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
