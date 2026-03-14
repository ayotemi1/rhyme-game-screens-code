import { RhymeGameLogo } from './RhymeGameLogo';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6), 0 0 80px rgba(251,191,36,0.2)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)", width: 76, height: 22, borderRadius: 11, background: "#0D0D0D", zIndex: 10 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function GameActiveScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8, #6A25D9, #5418bf)" }}>
      <div style={{ height: 38, display: "flex", alignItems: "flex-end", padding: "0 14px 4px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>3:59</span>
        <div style={{ width: 40, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.15)", overflow: "hidden" }}><div style={{ width: "55%", height: "100%", background: "#22c55e" }} /></div>
      </div>
      {/* Ball with trail */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "6px 20px", alignItems: "center", gap: 6 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(245,158,11,0.3)" }} />
        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(245,158,11,0.5)" }} />
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E)", boxShadow: "0 3px 10px rgba(245,158,11,0.6)" }} />
      </div>
      <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          [null, null, null, { w: "bling", c: "#10B981" }],
          [null, null, null, { w: "ring",  c: "#10B981" }],
          [null, null, { w: "sing",  c: "#3B82F6" }, { w: "king", c: "#3B82F6" }],
          [{ w: "fling",c:"#F59E0B" }, { w: "bring",c:"#F59E0B" }, { w: "swing",c:"#F59E0B" }, { w: "thing",c:"#F59E0B" }],
          [{ w: "spring",c:"#F59E0B"}, { w:"string",c:"#F59E0B"}, { w:"cling", c:"#F59E0B"}, { w:"sting", c:"#F59E0B"}],
        ].map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 5 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ flex: 1, height: 36, borderRadius: 8, background: cell ? cell.c : "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {cell && <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 8.5, color: "#fff" }}>{cell.w}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppStoreS5() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", bottom: 80, left: -50, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Headline top-left */}
      <div style={{ position: "absolute", top: 56, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 44, lineHeight: 1.05, color: "#fff" }}>
          Start<br />Freestyling<br /><span style={{ color: "#FBBF24" }}>Today</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 12, lineHeight: 1.55 }}>
          Free to start. No credit card.<br />Just tap and go.
        </div>
      </div>

      {/* Phone — left, slight right tilt, bleeding off left */}
      <GoldPhone rotate={8} x={-24} y={370}>
        <GameActiveScreen />
      </GoldPhone>

      {/* Gold ball — right edge, connecting to S6 */}
      <div style={{ position: "absolute", top: 420, right: -28, width: 90, height: 90, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 12px 48px rgba(245,158,11,0.75), inset 0 -10px 18px rgba(0,0,0,0.3)", zIndex: 25 }} />

      {/* Floating free badge */}
      <div style={{ position: "absolute", bottom: 52, right: 26, background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 18, padding: "12px 22px", boxShadow: "0 12px 36px rgba(16,185,129,0.5)", zIndex: 30 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: "#fff", textAlign: "center" }}>FREE</div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.8)", textAlign: "center" }}>to get started</div>
      </div>
    </div>
  );
}
