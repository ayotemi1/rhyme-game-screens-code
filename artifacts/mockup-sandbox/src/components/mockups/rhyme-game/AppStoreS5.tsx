import { LogoGameScreen } from './GameScreenContent';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6), 0 0 60px rgba(251,191,36,0.25)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function AppStoreS5() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -40, right: -40, width: 350, height: 350, background: "radial-gradient(ellipse, rgba(180,120,255,0.15) 0%, transparent 65%)" }} />

      {/* Headline — top left */}
      <div style={{ position: "absolute", top: 58, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 48, lineHeight: 1.02, color: "#fff" }}>
          Start<br />Freestyling<br /><span style={{ color: "#FBBF24" }}>Today</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 12, lineHeight: 1.55 }}>
          Free to get started. No credit card.<br />Just tap and go.
        </div>
      </div>

      {/* Phone — centered, straight, showing logo + gameplay (no ball above logo) */}
      <GoldPhone rotate={0} x={83} y={326}>
        <LogoGameScreen />
      </GoldPhone>

      {/* Gold ball entering from left (connects from S4) */}
      <div style={{ position: "absolute", top: 370, left: -28, width: 86, height: 86, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 12px 48px rgba(245,158,11,0.75), inset 0 -10px 18px rgba(0,0,0,0.3), inset 0 6px 10px rgba(255,255,255,0.25)", zIndex: 25 }} />

      {/* FREE badge — floating bottom right */}
      <div style={{ position: "absolute", bottom: 52, right: 28, background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 22, padding: "14px 28px", boxShadow: "0 12px 36px rgba(16,185,129,0.55), 0 4px 16px rgba(0,0,0,0.3)", zIndex: 30, textAlign: "center" }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 28, color: "#fff", letterSpacing: 1, lineHeight: 1 }}>FREE</div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>to get started</div>
      </div>
    </div>
  );
}
