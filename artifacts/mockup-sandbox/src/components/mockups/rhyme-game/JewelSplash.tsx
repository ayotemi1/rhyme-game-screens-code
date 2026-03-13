export function JewelSplash() {
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

        {/* ── BACKGROUND ── */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, #7a32f0 0%, #6A25D9 20%, #5418bf 50%, #4313a8 78%, #340d9c 100%)",
        }} />

        {/* Outer ring — large decorative circle */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -52%)",
          width: 560, height: 560,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.07)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -52%)",
          width: 420, height: 420,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }} />

        {/* Deep purple glow behind logo */}
        <div style={{
          position: "absolute",
          top: "25%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 480, height: 480,
          background: "radial-gradient(ellipse, rgba(140,70,255,0.28) 0%, transparent 68%)",
          pointerEvents: "none",
        }} />

        {/* Bottom ambient glow */}
        <div style={{
          position: "absolute", bottom: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 500, height: 320,
          background: "radial-gradient(ellipse at 50% 100%, rgba(80,20,180,0.5) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Status bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 30 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.7)" />
              <rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.7)" />
              <rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.7)" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.7)" />
            </svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
              <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.7)"/>
              <path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.7)"/>
            </svg>
          </div>
        </div>

        {/* ── MAIN CONTENT — vertically centered ── */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 0,
        }}>

          {/* Gold ball + comet trail */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 32, position: "relative" }}>
            {/* Comet trail */}
            {[
              { w: 10, h: 10, opacity: 0.12, blur: 5, left: -58 },
              { w: 16, h: 16, opacity: 0.2,  blur: 4, left: -44 },
              { w: 22, h: 22, opacity: 0.32, blur: 3, left: -26 },
            ].map((t, i) => (
              <div key={i} style={{
                position: "absolute",
                left: t.left,
                top: "50%",
                transform: "translateY(-50%)",
                width: t.w, height: t.h,
                borderRadius: "50%",
                background: `rgba(245,158,11,${t.opacity})`,
                filter: `blur(${t.blur}px)`,
              }} />
            ))}
            {/* The ball */}
            <div style={{
              width: 88, height: 88, borderRadius: "50%",
              background: "radial-gradient(circle at 32% 26%, #FEF9C3 0%, #FCD34D 16%, #F59E0B 42%, #D97706 68%, #92400E 100%)",
              boxShadow: "0 10px 50px rgba(245,158,11,0.65), 0 0 90px rgba(245,158,11,0.25), inset 0 -12px 20px rgba(0,0,0,0.3), inset 0 7px 14px rgba(255,255,255,0.32)",
            }} />
          </div>

          {/* Logo — large version */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, marginBottom: 24 }}>
            <div style={{
              background: "#F3F0FF",
              borderRadius: 16, padding: "7px 36px",
              marginBottom: -5, zIndex: 1,
              boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
            }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 28, color: "#2D1B6E", letterSpacing: 4 }}>THE</span>
            </div>
            <div style={{
              background: "#2D1B6E",
              borderRadius: 16, padding: "8px 44px",
              zIndex: 2,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 38, color: "#F3F0FF", letterSpacing: 4 }}>RHYME</span>
            </div>
            <div style={{
              background: "#F3F0FF",
              borderRadius: 16, padding: "7px 36px",
              marginTop: -5, zIndex: 1,
              boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
            }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 28, color: "#2D1B6E", letterSpacing: 4 }}>GAME</span>
            </div>
          </div>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Nunito', sans-serif", fontWeight: 600,
            fontSize: 15, color: "rgba(255,255,255,0.55)",
            letterSpacing: 0.3, margin: 0,
          }}>
            Learn how to freestyle rap, FAST!
          </p>
        </div>

        {/* ── BOTTOM — loading dots + CTA ── */}
        <div style={{
          position: "absolute", bottom: 72, left: 0, right: 0,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 22,
        }}>
          {/* CTA button */}
          <div style={{
            marginLeft: 24, marginRight: 24, width: "calc(100% - 48px)",
            height: 60,
            background: "linear-gradient(135deg, #8B3CFF 0%, #6A25D9 50%, #5418bf 100%)",
            borderRadius: 20,
            border: "1px solid rgba(180,130,255,0.35)",
            boxShadow: "0 8px 32px rgba(106,37,217,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 10,
          }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: 1.5 }}>GET STARTED</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Loading dots */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {[1, 0.4, 0.2].map((op, i) => (
              <div key={i} style={{
                width: i === 0 ? 10 : 7,
                height: i === 0 ? 10 : 7,
                borderRadius: "50%",
                background: i === 0 ? "#FBBF24" : `rgba(255,255,255,${op})`,
                boxShadow: i === 0 ? "0 0 10px rgba(251,191,36,0.7)" : "none",
              }} />
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.25)", zIndex: 21 }} />
      </div>
    </div>
  );
}
