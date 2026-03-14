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
      <div style={{ position: "absolute", top: 80, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <RhymeGameLogo size="medium" />
      </div>
    </>
  );
}

export function JewelSheetPlay() {
  return (
    <div style={{ minHeight: "100vh", background: "#3d1490", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>

        <HomeBackground />

        {/* Dark scrim */}
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
            <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 22, color: "#fff", letterSpacing: 0.3 }}>Quick Play</span>
          </div>

          {/* Mode cards */}
          <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: "👆", title: "Tap Mode", desc: "No beats required. Tap a BPM to rap with any rhythm!" },
                { icon: "∞", title: "Endless Mode", desc: "The beats never end. Rap as long as you'd like!" },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ flex: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 18, padding: "18px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(167,139,250,0.2)", border: "1px solid rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: icon === "∞" ? 24 : 20, color: "#A78BFA", fontWeight: 900 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: "#fff" }}>{title}</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4, lineHeight: 1.4 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <div style={{ background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 18, padding: "20px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 8px 32px rgba(16,185,129,0.4)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="white" strokeWidth="1.8"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 20, color: "#fff", letterSpacing: 0.3 }}>Play the Rhyme Game</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>Master your rap skills</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 92, zIndex: 60, display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="4" height="9" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/><rect x="10" y="7" width="4" height="14" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/><rect x="17" y="3" width="4" height="18" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/></svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Stats</span>
          </div>
          <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(145deg, #FBBF24, #D97706)", boxShadow: "0 6px 24px rgba(251,191,36,0.5), 0 0 0 5px rgba(251,191,36,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
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
