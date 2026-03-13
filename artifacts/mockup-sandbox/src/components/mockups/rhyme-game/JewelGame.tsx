export function JewelGame() {
  const blueRow1 = ["", "snow", "", "below"];
  const blueRow2 = ["", "flow", "", "show"];
  const orangeRow1 = ["", "eat", "", "heat"];
  const orangeRow2 = ["", "elite", "", "compete"];
  const emptyRow = ["", "", "", ""];

  const renderRow = (
    words: string[],
    type: "blue" | "orange" | "empty" | "dim",
    rowLabel?: string
  ) => (
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      {rowLabel && (
        <span style={{
          fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700,
          color: "rgba(255,255,255,0.3)", width: 14, textAlign: "right", flexShrink: 0,
        }}>{rowLabel}</span>
      )}
      {words.map((word, i) => {
        const hasWord = word !== "";
        const bg = type === "blue"
          ? (hasWord ? "linear-gradient(135deg, #3B82F6, #2563EB)" : "rgba(59,130,246,0.15)")
          : type === "orange"
          ? (hasWord ? "linear-gradient(135deg, #F59E0B, #D97706)" : "rgba(245,158,11,0.15)")
          : type === "dim"
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0.08)";
        return (
          <div key={i} style={{
            flex: 1, height: 36, borderRadius: 9,
            background: bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: hasWord && (type === "blue" || type === "orange") ? "0 2px 8px rgba(0,0,0,0.2)" : "none",
          }}>
            {hasWord && (
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 12, color: "#fff" }}>{word}</span>
            )}
          </div>
        );
      })}
    </div>
  );

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
      }}>
        {/* Jewel purple background */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, #7230e8 0%, #6A25D9 22%, #5418bf 52%, #4313a8 82%, #360ea0 100%)",
        }} />

        {/* Geometric circles */}
        <div style={{ position: "absolute", top: -80, right: -60, width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 100, left: -80, width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />

        {/* Top glow */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 220, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.14) 0%, transparent 65%)", pointerEvents: "none" }} />

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

        {/* Logo — compact, top center */}
        <div style={{ position: "absolute", top: 52, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, zIndex: 10 }}>
          <div style={{ background: "#F3F0FF", borderRadius: 10, padding: "3px 18px", marginBottom: -3, zIndex: 1, boxShadow: "0 2px 10px rgba(0,0,0,0.22)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 17, color: "#2D1B6E", letterSpacing: 2 }}>THE</span>
          </div>
          <div style={{ background: "#2D1B6E", borderRadius: 10, padding: "4px 20px", zIndex: 2, boxShadow: "0 4px 14px rgba(0,0,0,0.3)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 21, color: "#F3F0FF", letterSpacing: 2 }}>RHYME</span>
          </div>
          <div style={{ background: "#F3F0FF", borderRadius: 10, padding: "3px 18px", marginTop: -3, zIndex: 1, boxShadow: "0 2px 10px rgba(0,0,0,0.22)" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 17, color: "#2D1B6E", letterSpacing: 2 }}>GAME</span>
          </div>
        </div>

        {/* Beat indicator row */}
        <div style={{
          position: "absolute", top: 146, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 6, alignItems: "center", zIndex: 10,
        }}>
          {[1,2,3,4].map((beat, i) => (
            <div key={i} style={{
              width: i === 1 ? 28 : 20,
              height: i === 1 ? 28 : 20,
              borderRadius: "50%",
              background: i === 1 ? "linear-gradient(135deg, #FBBF24, #F59E0B)" : "rgba(255,255,255,0.18)",
              boxShadow: i === 1 ? "0 0 16px rgba(251,191,36,0.6)" : "none",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {i === 1 && <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 11, color: "#2D1B6E" }}>2</span>}
            </div>
          ))}
        </div>

        {/* Bouncing ball with trail */}
        <div style={{ position: "absolute", top: 182, left: "50%", transform: "translateX(-52%)", display: "flex", alignItems: "center", zIndex: 10 }}>
          {[0.07, 0.14, 0.23].map((op, i) => (
            <div key={i} style={{
              width: 9 + i * 7, height: 9 + i * 7, borderRadius: "50%",
              background: `rgba(245,158,11,${op * 2.5})`,
              marginRight: 5, filter: "blur(3px)", flexShrink: 0,
            }} />
          ))}
          <div style={{
            width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
            background: "radial-gradient(circle at 33% 27%, #FEF9C3 0%, #FCD34D 18%, #F59E0B 44%, #D97706 70%, #92400E 100%)",
            boxShadow: "0 6px 26px rgba(245,158,11,0.58), 0 0 50px rgba(245,158,11,0.2), inset 0 -8px 14px rgba(0,0,0,0.28), inset 0 5px 10px rgba(255,255,255,0.3)",
          }} />
        </div>

        {/* Bar counter labels */}
        <div style={{ position: "absolute", top: 248, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 20px", zIndex: 10 }}>
          {[-2, -1, "", 1, 2, 3].map((n, i) => (
            i === 2 ? <div key={i} style={{ flex: 1 }} /> :
            <span key={i} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.3)", width: 14, textAlign: "right" }}>{n}</span>
          ))}
        </div>

        {/* Word grid */}
        <div style={{ position: "absolute", top: 260, left: 14, right: 14, zIndex: 10 }}>
          <div style={{
            background: "rgba(20,8,60,0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
            borderRadius: 20,
            padding: 10,
            display: "flex", flexDirection: "column", gap: 5,
          }}>
            {/* Dim rows (future) */}
            {renderRow(emptyRow, "dim")}
            {renderRow(emptyRow, "dim")}
            {/* Blue rhyme set — current */}
            {renderRow(blueRow1, "blue")}
            {renderRow(blueRow2, "blue")}
            {/* Orange — next set */}
            {renderRow(orangeRow1, "orange")}
            {renderRow(orangeRow2, "orange")}
            {/* Fading out row */}
            <div style={{ display: "flex", gap: 5 }}>
              {["street", "", "compete", ""].map((w, i) => (
                <div key={i} style={{
                  flex: 1, height: 32, borderRadius: 9,
                  background: w ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: 0.6,
                }}>
                  {w && <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{w}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar progress indicator */}
        <div style={{ position: "absolute", top: 574, left: 14, right: 14, zIndex: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Bar 8 / 32</span>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24" }}>98% accuracy</span>
          </div>
          <div style={{ height: 4, background: "rgba(255,255,255,0.12)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: "25%", height: "100%", background: "linear-gradient(to right, #FBBF24, #F59E0B)", borderRadius: 2 }} />
          </div>
        </div>

        {/* Music bar */}
        <div style={{
          position: "absolute", bottom: 92, left: 14, right: 14, zIndex: 20,
          background: "rgba(20,8,60,0.55)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: 18,
          padding: "12px 14px",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{ width: 42, height: 42, borderRadius: 10, background: "linear-gradient(135deg, rgba(106,37,217,0.6), rgba(45,27,110,0.8))", border: "1px solid rgba(251,191,36,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
            🎵
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Always Shroom For More</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
            <div style={{ height: 2, background: "rgba(255,255,255,0.12)", borderRadius: 2, marginTop: 4 }}>
              <div style={{ width: "32%", height: "100%", background: "#22c55e", borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#2D1B6E">
              <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
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
