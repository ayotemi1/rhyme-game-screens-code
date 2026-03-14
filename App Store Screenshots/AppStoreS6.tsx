import { RhymeGameLogo } from './RhymeGameLogo';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 216, height: 460, borderRadius: 50, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 4, boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 80px rgba(251,191,36,0.3)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 46, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 72, height: 20, borderRadius: 10, background: "#0D0D0D", zIndex: 10 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function SplashScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #7a32f0, #6A25D9, #5418bf, #4313a8, #340d9c)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0 }}>
      {/* Mini logo pills */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E)", boxShadow: "0 4px 14px rgba(245,158,11,0.6)", marginBottom: 5 }} />
        <div style={{ background: "#EDE8D4", borderRadius: 8, padding: "3px 16px", marginBottom: -5 }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 11, color: "#1A0E4E" }}>THE</span>
        </div>
        <div style={{ background: "#1A0E4E", borderRadius: 8, padding: "4px 22px" }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 15, color: "#EDE8D4" }}>RHYME</span>
        </div>
        <div style={{ background: "#EDE8D4", borderRadius: 8, padding: "3px 18px", marginTop: -5 }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 12, color: "#1A0E4E" }}>GAME</span>
        </div>
      </div>
      <div style={{ fontFamily: "sans-serif", fontSize: 9, color: "rgba(255,255,255,0.45)", marginBottom: 40 }}>Learn how to freestyle rap, FAST!</div>
      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg, #8B3CFF, #6A25D9)", borderRadius: 14, padding: "10px 32px", border: "1px solid rgba(180,130,255,0.35)" }}>
        <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 11, color: "#fff", letterSpacing: 1 }}>GET STARTED</span>
      </div>
      {/* Dots */}
      <div style={{ display: "flex", gap: 6, marginTop: 16, alignItems: "center" }}>
        {[1, 0.4, 0.2].map((op, i) => (
          <div key={i} style={{ width: i === 0 ? 8 : 5, height: i === 0 ? 8 : 5, borderRadius: "50%", background: i === 0 ? "#FBBF24" : `rgba(255,255,255,${op})` }} />
        ))}
      </div>
    </div>
  );
}

export function AppStoreS6() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      {/* Radial glows */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(140,70,255,0.22) 0%, transparent 68%)" }} />
      <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Gold ball — entering from left (connecting from S5) */}
      <div style={{ position: "absolute", top: 280, left: -18, width: 72, height: 72, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 10px 40px rgba(245,158,11,0.7), inset 0 -10px 18px rgba(0,0,0,0.3)" }} />

      {/* Top headline */}
      <div style={{ position: "absolute", top: 60, left: 28, right: 28, textAlign: "center" }}>
        <div style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 40, lineHeight: 1.1, color: "#fff" }}>
          Start<br />Freestyling<br /><span style={{ color: "#FBBF24" }}>Today</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 12, lineHeight: 1.5 }}>
          Free to start. No credit card.<br />Just tap and go.
        </div>
      </div>

      {/* Phone — centered, straight */}
      <GoldPhone rotate={0} x={88} y={320}>
        <SplashScreen />
      </GoldPhone>

      {/* Home indicator */}
      <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.2)" }} />
    </div>
  );
}
