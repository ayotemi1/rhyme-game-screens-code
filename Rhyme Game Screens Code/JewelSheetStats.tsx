import { RhymeGameLogo } from './RhymeGameLogo';

function HomeBackground() {
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)" }} />
      <div style={{ position: "absolute", top: -80, right: -60, width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 320, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.18) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 30 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>10:55</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.85)"/></svg>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2"/><rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.85)"/><path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.85)"/></svg>
        </div>
      </div>
      <div style={{ position: "absolute", top: 130, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <RhymeGameLogo size="medium" />
      </div>
      <div style={{ position: "absolute", top: 382, left: 0, right: 0, textAlign: "center" }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#FEF3C7" }}>Learn how to freestyle rap, FAST!</span>
      </div>
      <div style={{ position: "absolute", top: 410, left: 16, right: 16, display: "flex", gap: 10 }}>
        <div style={{ flex: 2, background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(14px)", borderRadius: 18, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg, rgba(251,191,36,0.3), rgba(245,158,11,0.2))", border: "2px solid rgba(251,191,36,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>👑</div>
          <div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, color: "#FBBF24", letterSpacing: 1.5, textTransform: "uppercase" }}>Gold Rapper</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 22, color: "#fff", lineHeight: 1.1 }}>Level 14</div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {[{ icon: "🔥", val: "23", label: "Streak" }, { icon: "🏆", val: "#12", label: "Rank" }].map(({ icon, val, label }) => (
            <div key={label} style={{ flex: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
              <span style={{ fontSize: 16 }}>{icon}</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 16, color: "#fff" }}>{val}</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 9, color: "rgba(255,255,255,0.45)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function JewelSheetStats() {
  return (
    <div style={{ minHeight: "100vh", background: "#3d1490", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>

        <HomeBackground />

        {/* Dark scrim behind sheet */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,3,40,0.45)", zIndex: 40 }} />

        {/* Bottom sheet */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 50,
          background: "linear-gradient(160deg, rgba(90,30,200,0.97) 0%, rgba(58,12,160,0.97) 100%)",
          backdropFilter: "blur(40px)",
          borderTop: "1px solid rgba(180,130,255,0.35)",
          borderRadius: "28px 28px 0 0",
          paddingBottom: 110,
        }}>
          {/* Handle */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 12, paddingBottom: 4 }}>
            <div style={{ width: 40, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.3)" }} />
          </div>

          {/* Title */}
          <div style={{ padding: "16px 22px 14px" }}>
            <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 22, color: "#fff", letterSpacing: 0.3 }}>Stats</span>
          </div>

          {/* Option */}
          <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 18, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(251,191,36,0.18)", border: "1px solid rgba(251,191,36,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="12" width="4" height="9" rx="1" stroke="#FBBF24" strokeWidth="1.8"/>
                  <rect x="10" y="7" width="4" height="14" rx="1" stroke="#FBBF24" strokeWidth="1.8"/>
                  <rect x="17" y="3" width="4" height="18" rx="1" stroke="#FBBF24" strokeWidth="1.8"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff" }}>Stats &amp; Streaks</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>Your progress &amp; history</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>

        {/* Bottom nav (above sheet) */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 92, zIndex: 60, display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="4" height="9" rx="1" stroke="#FBBF24" strokeWidth="1.8"/><rect x="10" y="7" width="4" height="14" rx="1" stroke="#FBBF24" strokeWidth="1.8"/><rect x="17" y="3" width="4" height="18" rx="1" stroke="#FBBF24" strokeWidth="1.8"/></svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "#FBBF24" }}>Stats</span>
          </div>
          <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(145deg, #FBBF24, #D97706)", boxShadow: "0 6px 24px rgba(251,191,36,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="7,4 21,12 7,20" fill="#2D1B6E"/></svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Tools</span>
          </div>
        </div>

      </div>
    </div>
  );
}
