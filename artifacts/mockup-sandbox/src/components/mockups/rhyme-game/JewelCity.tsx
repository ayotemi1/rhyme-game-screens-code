export function JewelCity() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#3d1490",
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
            "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.65)",
        }}
      >
        {/* Base jewel-tone purple */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(170deg, #7230e8 0%, #6A25D9 20%, #5418bf 50%, #3d13a0 100%)",
        }} />

        {/* ── PIXEL CITY BACKGROUND ── */}
        {/* City image — spans from mid-screen to bottom, tinted jewel purple */}
        <img
          src="/__mockup/images/pixel-city.png"
          alt=""
          style={{
            position: "absolute",
            bottom: 82,
            left: -20,
            right: -20,
            width: "calc(100% + 40px)",
            height: "auto",
            opacity: 0.72,
            filter: "hue-rotate(195deg) saturate(1.6) brightness(0.65)",
          }}
        />

        {/* Gradient curtain: solid purple top → transparent mid → slight fog bottom */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, #6A25D9 0%, #6A25D9 26%, rgba(86,28,185,0.88) 42%, rgba(70,20,160,0.6) 56%, rgba(50,12,130,0.28) 70%, rgba(30,8,100,0.18) 82%, rgba(20,5,80,0.12) 100%)",
          pointerEvents: "none",
        }} />

        {/* Bottom fog so city blends smoothly into nav */}
        <div style={{
          position: "absolute", bottom: 60, left: 0, right: 0, height: 120,
          background: "linear-gradient(to top, rgba(30,8,100,0.9) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {/* Warm purple glow at top center (behind ball/logo) */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 500, height: 300,
          background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.2) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        {/* Geometric circle accents */}
        <div style={{
          position: "absolute", top: -80, right: -60,
          width: 340, height: 340, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: -40, right: -20,
          width: 220, height: 220, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none",
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

        {/* Info / Settings buttons */}
        {[{ left: 20 }, { right: 20 }].map((pos, i) => (
          <div key={i} style={{
            position: "absolute", top: 56, ...pos,
            width: 40, height: 40, borderRadius: 12,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20,
          }}>
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

        {/* Ball with comet trail */}
        <div style={{ position: "absolute", top: 158, left: "50%", transform: "translateX(-56%)", display: "flex", alignItems: "center" }}>
          {[0.08, 0.16, 0.26].map((op, i) => (
            <div key={i} style={{
              width: 10 + i * 7, height: 10 + i * 7, borderRadius: "50%",
              background: `rgba(245,158,11,${op * 2.5})`,
              marginRight: 5, filter: "blur(3px)", flexShrink: 0,
            }} />
          ))}
          <div style={{
            width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
            background: "radial-gradient(circle at 33% 27%, #FEF9C3 0%, #FCD34D 18%, #F59E0B 44%, #D97706 70%, #92400E 100%)",
            boxShadow: "0 6px 28px rgba(245,158,11,0.6), 0 0 60px rgba(245,158,11,0.22), inset 0 -8px 14px rgba(0,0,0,0.28), inset 0 5px 10px rgba(255,255,255,0.3)",
          }} />
        </div>

        {/* Logo */}
        <div style={{ position: "absolute", top: 244, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, zIndex: 10 }}>
          <div style={{ background: "#F3F0FF", borderRadius: 18, padding: "8px 38px", marginBottom: -5, zIndex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 33, color: "#2D1B6E", letterSpacing: 3 }}>THE</span>
          </div>
          <div style={{ background: "#2D1B6E", borderRadius: 18, padding: "10px 46px", zIndex: 2, boxShadow: "0 6px 26px rgba(0,0,0,0.4)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 39, color: "#F3F0FF", letterSpacing: 3 }}>RHYME</span>
          </div>
          <div style={{ background: "#F3F0FF", borderRadius: 18, padding: "8px 38px", marginTop: -5, zIndex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 33, color: "#2D1B6E", letterSpacing: 3 }}>GAME</span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ position: "absolute", top: 434, left: 0, right: 0, textAlign: "center", zIndex: 10 }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#FEF3C7", letterSpacing: 0.3 }}>
            Learn how to freestyle rap, FAST!
          </span>
        </div>

        {/* Level / rank badge */}
        <div style={{ position: "absolute", top: 466, left: 16, right: 16, display: "flex", gap: 10, zIndex: 10 }}>
          <div style={{
            flex: 2,
            background: "rgba(40,12,100,0.55)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderRadius: 18,
            padding: "16px 18px",
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, rgba(251,191,36,0.3), rgba(245,158,11,0.18))",
              border: "2px solid rgba(251,191,36,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24,
            }}>
              👑
            </div>
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
            <div style={{
              flex: 1,
              background: "rgba(40,12,100,0.5)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(18px)",
              borderRadius: 16,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, padding: "8px 4px",
            }}>
              <span style={{ fontSize: 18 }}>🔥</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff" }}>23</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.45)" }}>Day Streak</span>
            </div>
            <div style={{
              flex: 1,
              background: "rgba(40,12,100,0.5)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(18px)",
              borderRadius: 16,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, padding: "8px 4px",
            }}>
              <span style={{ fontSize: 18 }}>🏆</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff" }}>#12</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.45)" }}>Global Rank</span>
            </div>
          </div>
        </div>

        {/* Now playing bar — sits right above the city skyline */}
        <div style={{ position: "absolute", top: 628, left: 16, right: 16, zIndex: 10 }}>
          <div style={{
            background: "rgba(30,8,90,0.6)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 18,
            padding: "14px 18px",
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, flexShrink: 0,
              background: "linear-gradient(135deg, rgba(106,37,217,0.6), rgba(45,27,110,0.8))",
              border: "1px solid rgba(251,191,36,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
            }}>
              🎵
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>Now Playing</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Always Shroom For More</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)" }}>DJ Maintain</div>
            </div>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#2D1B6E">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* City visible through the gap between cards and nav */}

        {/* Bottom nav — glass on top of the city */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 92,
          background: "rgba(30,8,90,0.7)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14,
          zIndex: 20,
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
              boxShadow: "0 6px 24px rgba(251,191,36,0.55), 0 0 0 5px rgba(251,191,36,0.15)",
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
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.28)", zIndex: 21 }} />
      </div>
    </div>
  );
}
