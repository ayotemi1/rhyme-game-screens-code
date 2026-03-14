import { RhymeGameLogo } from './RhymeGameLogo';

  export function JewelSplash() {
    return (
      <div style={{ minHeight: "100vh", background: "#3d1490", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #7a32f0 0%, #6A25D9 20%, #5418bf 50%, #4313a8 78%, #340d9c 100%)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -52%)", width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -52%)", width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -50%)", width: 480, height: 480, background: "radial-gradient(ellipse, rgba(140,70,255,0.28) 0%, transparent 68%)", pointerEvents: "none" }} />
          {/* Status bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 30 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>10:55</span>
          </div>
          {/* Centered logo + tagline */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ marginBottom: 28 }}>
              <RhymeGameLogo size="large" />
            </div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: 15, color: "rgba(255,255,255,0.55)", letterSpacing: 0.3, margin: 0 }}>
              Learn how to freestyle rap, FAST!
            </p>
          </div>
          {/* Bottom CTA + dots */}
          <div style={{ position: "absolute", bottom: 72, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
            <div style={{ marginLeft: 24, marginRight: 24, width: "calc(100% - 48px)", height: 60, background: "linear-gradient(135deg, #8B3CFF 0%, #6A25D9 50%, #5418bf 100%)", borderRadius: 20, border: "1px solid rgba(180,130,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: 1.5 }}>GET STARTED</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {[1, 0.4, 0.2].map((op, i) => (
                <div key={i} style={{ width: i === 0 ? 10 : 7, height: i === 0 ? 10 : 7, borderRadius: "50%", background: i === 0 ? "#FBBF24" : `rgba(255,255,255,${op})` }} />
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
    );
  }