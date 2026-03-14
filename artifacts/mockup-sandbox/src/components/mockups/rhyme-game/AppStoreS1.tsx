import { RhymeGameLogo } from './RhymeGameLogo';
import { AccurateGameScreen } from './GameScreenContent';

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

export function AppStoreS1() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(180,120,255,0.18) 0%, transparent 65%)" }} />

      {/* Logo — proper, centered top */}
      <div style={{ position: "absolute", top: 50, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
        <RhymeGameLogo size="small" />
      </div>

      {/* Headline — more breathing room below logo */}
      <div style={{ position: "absolute", top: 286, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 44, lineHeight: 1.05, color: "#fff" }}>
          Learn to<br />Freestyle Rap<br /><span style={{ color: "#FBBF24" }}>in 5 Minutes</span>
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 12, lineHeight: 1.55 }}>
          Master rhymes. Flow with the beat.<br />Build your bars from Day 1.
        </div>
      </div>

      {/* Phone — pushed down, angled right, bleeding off edge */}
      <GoldPhone rotate={-12} x={96} y={536}>
        <AccurateGameScreen spacerMaxHeight={120} />
      </GoldPhone>

      {/* Gold ball — right edge, connecting to S2 */}
      <div style={{ position: "absolute", top: 548, right: -26, width: 86, height: 86, borderRadius: "50%", background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)", boxShadow: "0 12px 48px rgba(245,158,11,0.75), inset 0 -10px 18px rgba(0,0,0,0.3), inset 0 6px 10px rgba(255,255,255,0.25)", zIndex: 15 }} />
    </div>
  );
}
