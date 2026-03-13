import { RhymeGameLogo } from './RhymeGameLogo';

export function JewelSetup() {
  const gridLetters: Array<{ letter: string; color: "orange" | "blue" | null }> = [
    { letter: "P", color: "orange" }, { letter: "", color: null }, { letter: "F", color: "orange" }, { letter: "", color: null },
    { letter: "T", color: "orange" }, { letter: "", color: null }, { letter: "M", color: "orange" }, { letter: "", color: null },
    { letter: "S", color: "blue" },  { letter: "", color: null }, { letter: "H", color: "blue" },  { letter: "", color: null },
    { letter: "S", color: "blue" },  { letter: "", color: null }, { letter: "F", color: "blue" },  { letter: "", color: null },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#3d1490",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      fontFamily: "'Nunito', sans-serif",
    }}>
      <div style={{
        width: 390,
        height: 844,
        borderRadius: 52,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Jewel purple background */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)",
        }} />

        {/* Geometric circles */}
        <div style={{ position: "absolute", top: -80, right: -60, width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: -20, width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />

        {/* Warm top glow */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 250, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />

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

        {/* Logo + ball */}
        <div style={{ position: "absolute", top: 48, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <RhymeGameLogo size="small" />
        </div>

        {/* Scrollable content area */}
        <div style={{ position: "absolute", top: 210, bottom: 92, left: 0, right: 0, padding: "0 16px", display: "flex", flexDirection: "column", gap: 10, overflowY: "auto" }}>

          {/* Preview grid card */}
          <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(16px)", borderRadius: 20, padding: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
              {gridLetters.map((cell, i) => (
                <div key={i} style={{
                  aspectRatio: "1.5",
                  borderRadius: 10,
                  background: cell.color === "orange" ? "linear-gradient(135deg, #F59E0B, #D97706)"
                    : cell.color === "blue" ? "linear-gradient(135deg, #3B82F6, #2563EB)"
                    : "rgba(255,255,255,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: cell.color ? "0 2px 8px rgba(0,0,0,0.25)" : "none",
                }}>
                  {cell.letter && (
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff" }}>{cell.letter}</span>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, alignItems: "center" }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Preview</span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "#A78BFA" }}>Challenging</span>
                <div style={{ display: "flex", gap: 3 }}>
                  {[0,1,2,3,4].map(i => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: i < 4 ? "#A78BFA" : "rgba(255,255,255,0.2)" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel selectors */}
          {[
            { label: "Rhyme Pattern", value: "aAaA Double-Time" },
            { label: "Fill Mode", value: "All Rhymes Filled" },
            { label: "Word List", value: "The Rappers Toolkit" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: "12px 14px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(106,37,217,0.6)", border: "1px solid rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 0.5 }}>{label}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: "#fff", marginTop: 1 }}>{value}</div>
              </div>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(106,37,217,0.6)", border: "1px solid rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}

          {/* Skip Intro + Duration row */}
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{
              flex: 1,
              background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)", borderRadius: 16, padding: "12px 14px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>Skip Intro</span>
              {/* Toggle ON */}
              <div style={{ width: 46, height: 26, borderRadius: 13, background: "linear-gradient(135deg, #8B3CFF, #6A25D9)", position: "relative", border: "1px solid rgba(167,139,250,0.4)" }}>
                <div style={{ position: "absolute", right: 3, top: 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.25)" }} />
              </div>
            </div>
            <div style={{
              flex: 1,
              background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)", borderRadius: 16, padding: "12px 14px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>Duration</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 14, color: "#A78BFA" }}>32 bars</span>
            </div>
          </div>

          {/* Now playing mini bar */}
          <div style={{
            background: "rgba(20,8,60,0.5)", border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(14px)", borderRadius: 16, padding: "10px 14px",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, rgba(106,37,217,0.6), rgba(45,27,110,0.8))", border: "1px solid rgba(251,191,36,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18 }}>
              🎵
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Always Shroom For More</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)">
                <polygon points="19,20 9,12 19,4" />
                <line x1="5" y1="19" x2="5" y2="5" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              </svg>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#2D1B6E">
                  <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)">
                <polygon points="5,4 15,12 5,20" />
                <line x1="19" y1="5" x2="19" y2="19" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Recording Off + PLAY button */}
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{
              width: 74, height: 58,
              background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)", borderRadius: 16,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="9" y="2" width="6" height="12" rx="3" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8"/>
                <path d="M5 10a7 7 0 0014 0" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="12" y1="19" x2="12" y2="22" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8"/>
                <line x1="9" y1="22" x2="15" y2="22" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8"/>
              </svg>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.4)", lineHeight: 1.2, textAlign: "center" }}>Recording{"\n"}Off</span>
            </div>
            <div style={{
              flex: 1, height: 58,
              background: "linear-gradient(135deg, #10B981, #059669)",
              borderRadius: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 24px rgba(16,185,129,0.4), 0 0 0 1px rgba(16,185,129,0.3)",
            }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 22, color: "#fff", letterSpacing: 3 }}>PLAY</span>
            </div>
          </div>

        </div>

        {/* Bottom nav */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 92,
          background: "rgba(48,14,120,0.65)", backdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14, zIndex: 20,
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="12" width="4" height="9" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"/>
              <rect x="10" y="7" width="4" height="14" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"/>
              <rect x="17" y="3" width="4" height="18" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"/>
            </svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>Stats</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, marginBottom: 22 }}>
            <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(145deg, #FBBF24, #D97706)", boxShadow: "0 6px 24px rgba(251,191,36,0.52), 0 0 0 5px rgba(251,191,36,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="7,4 21,12 7,20" fill="#2D1B6E" /></svg>
            </div>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24" }}>Play</span>
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
