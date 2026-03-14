import { RhymeGameLogo } from './RhymeGameLogo';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6), 0 0 80px rgba(251,191,36,0.3)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)", width: 76, height: 22, borderRadius: 11, background: "#0D0D0D", zIndex: 10 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function FullGameScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #7a32f0, #6A25D9, #5418bf, #4313a8)" }}>
      <div style={{ height: 38, display: "flex", alignItems: "flex-end", padding: "0 14px 4px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif" }}>3:59</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ width: 10, height: 10, borderRadius: 2, background: "#22c55e" }} />
        </div>
      </div>
      {/* Small logo inside splash */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 12, marginBottom: 12 }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0, #F59E0B 40%, #D97706)", marginBottom: 4, boxShadow: "0 3px 8px rgba(245,158,11,0.5)" }} />
        <div style={{ background: "#EDE8D4", borderRadius: 7, padding: "2px 14px", marginBottom: -4 }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: "#1A0E4E" }}>THE</span>
        </div>
        <div style={{ background: "#1A0E4E", borderRadius: 7, padding: "3px 18px" }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 12, color: "#EDE8D4" }}>RHYME</span>
        </div>
        <div style={{ background: "#EDE8D4", borderRadius: 7, padding: "2px 14px", marginTop: -4 }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: "#1A0E4E" }}>GAME</span>
        </div>
      </div>
      {/* Game grid — full */}
      <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          [null, null, { w: "nudge", c: "#F59E0B" }, { w: "sludge",c:"#F59E0B"}],
          [null, null, { w: "quality",c:"#10B981"}, { w:"robbery",c:"#10B981"}],
          [{ w: "fling",c:"#3B82F6" }, { w:"bring",c:"#3B82F6" }, { w:"swing",c:"rgba(255,255,255,0.08)"}, { w:"beach",c:"rgba(255,255,255,0.08)"}],
          [{ w:"street",c:"rgba(255,255,255,0.08)" }, { w:"beat",c:"rgba(255,255,255,0.08)" }, { w:"heat",c:"rgba(255,255,255,0.08)" }, { w:"feat",c:"rgba(255,255,255,0.08)"}],
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
      {/* Music bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 52, background: "rgba(20,8,60,0.95)", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 8, padding: "0 10px 6px" }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(106,37,217,0.5)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>🎵</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 8, color: "#fff" }}>Sunday Book Club</div>
          <div style={{ fontFamily: "sans-serif", fontSize: 7, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
          <div style={{ height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 3 }}><div style={{ width: "40%", height: "100%", background: "#22c55e" }} /></div>
        </div>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>⏸</div>
      </div>
    </div>
  );
}

export function AppStoreS6() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(140,70,255,0.18) 0%, transparent 68%)" }} />

      {/* Gold ball entering from left (connects from S5) */}
      <div style={{ position: "absolute", top: 300, left: -26, width: 86, height: 86, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 12px 48px rgba(245,158,11,0.75), inset 0 -10px 18px rgba(0,0,0,0.3)", zIndex: 25 }} />

      {/* Top headline */}
      <div style={{ position: "absolute", top: 52, left: 26, right: 26, textAlign: "center", zIndex: 20 }}>
        <RhymeGameLogo size="small" />
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 38, lineHeight: 1.05, color: "#fff", marginTop: 16 }}>
          Play the Full<br /><span style={{ color: "#FBBF24" }}>Game</span>
        </div>
      </div>

      {/* Phone — centered, straight */}
      <GoldPhone rotate={0} x={84} y={310}>
        <FullGameScreen />
      </GoldPhone>

      {/* Home indicator */}
      <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.22)", zIndex: 21 }} />
    </div>
  );
}
