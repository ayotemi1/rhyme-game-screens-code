import bigmicImg from '@assets/bigmic.png';
import { AccurateGameScreen } from './GameScreenContent';

function GoldPhone({ rotate = 0, x = 0, y = 0, children }: { rotate?: number; x?: number; y?: number; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${rotate}deg)`, transformOrigin: "center center" }}>
      <div style={{ width: 224, height: 476, borderRadius: 52, background: "linear-gradient(145deg, #FCD34D, #F59E0B, #D97706)", padding: 5, boxShadow: "0 30px 90px rgba(0,0,0,0.6)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 47, background: "#0D0D0D", overflow: "hidden", position: "relative" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function AppStoreS2() {
  return (
    <div style={{ width: 390, height: 844, position: "relative", overflow: "hidden", background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ position: "absolute", top: -40, right: -40, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Headline — top left */}
      <div style={{ position: "absolute", top: 56, left: 26, right: 26, zIndex: 20 }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 46, lineHeight: 1.05, color: "#fff" }}>
          Follow the<br /><span style={{ color: "#FBBF24" }}>Bouncing</span><br />Beat
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 12, lineHeight: 1.55 }}>
          Follow the ball! It's like Duolingo<br />for rap. Practice anywhere.
        </div>
      </div>

      {/* Phone — left side, bleeding off left edge */}
      <GoldPhone rotate={9} x={-44} y={382}>
        <AccurateGameScreen />
      </GoldPhone>

      {/* Big Mic — right side, pointing at phone */}
      <img
        src={bigmicImg}
        alt="Big Mic mascot"
        style={{ position: "absolute", bottom: 0, right: -24, width: 260, height: "auto", zIndex: 20, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
      />

      {/* Subtle glow connecting to S1 */}
      <div style={{ position: "absolute", top: 430, left: -30, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)", zIndex: 5 }} />
    </div>
  );
}
