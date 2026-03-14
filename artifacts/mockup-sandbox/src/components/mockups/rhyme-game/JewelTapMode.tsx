import { RhymeGameLogo } from './RhymeGameLogo';

export function JewelTapMode() {
  return (
    <div style={{ minHeight: "100vh", background: "#3d1490", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>

        {/* Background */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 280, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.18) 0%, transparent 62%)", pointerEvents: "none" }} />

        {/* Pulse rings behind tap button */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translateY(60px)", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(251,191,36,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translateY(60px)", width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(251,191,36,0.18)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) translateY(60px)", width: 180, height: 180, borderRadius: "50%", border: "1px solid rgba(251,191,36,0.25)", pointerEvents: "none" }} />

        {/* Status bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 30 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.85)"/></svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2"/><rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.85)"/><path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.85)"/></svg>
          </div>
        </div>

        {/* Back button */}
        <div style={{ position: "absolute", top: 58, left: 16, width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>

        {/* Logo */}
        <div style={{ position: "absolute", top: 48, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <RhymeGameLogo size="small" />
        </div>

        {/* BPM readout */}
        <div style={{ position: "absolute", top: 248, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 10 }}>
          <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(16px)", borderRadius: 20, padding: "12px 36px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 52, color: "rgba(255,255,255,0.25)", lineHeight: 1, letterSpacing: 2 }}>—</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: 2, textTransform: "uppercase", marginTop: 2 }}>BPM</div>
          </div>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Tap the button to detect tempo</span>
        </div>

        {/* Tap controls row */}
        <div style={{ position: "absolute", top: 440, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 28, zIndex: 10 }}>
          {/* Minus */}
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
          </div>

          {/* TAP button */}
          <div style={{ width: 140, height: 140, borderRadius: "50%", background: "linear-gradient(145deg, #FBBF24, #F59E0B, #D97706)", boxShadow: "0 0 0 8px rgba(251,191,36,0.15), 0 0 0 16px rgba(251,191,36,0.08), 0 20px 50px rgba(251,191,36,0.5)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 32, color: "#2D1B6E", letterSpacing: 1 }}>TAP</span>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 11, color: "rgba(45,27,110,0.7)", letterSpacing: 0.5 }}>to set BPM</span>
          </div>

          {/* Plus */}
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
          </div>
        </div>

        {/* Mode tabs */}
        <div style={{ position: "absolute", bottom: 50, left: 16, right: 16, zIndex: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: 5, display: "flex", gap: 4 }}>
            {[
              { label: "0.5×", active: false },
              { label: "Manual", active: true },
              { label: "Play", active: false },
              { label: "Restart", active: false },
            ].map(({ label, active }) => (
              <div key={label} style={{ flex: 1, borderRadius: 12, padding: "10px 4px", background: active ? "linear-gradient(135deg, #8B3CFF, #6A25D9)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: active ? "0 4px 14px rgba(106,37,217,0.5)" : "none" }}>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: active ? "#fff" : "rgba(255,255,255,0.45)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.28)", zIndex: 21 }} />

      </div>
    </div>
  );
}
