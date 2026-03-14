import bigmicImg from '@assets/bigmic.png';
import { AccurateGameScreen, bouncePath, bounceContacts } from './GameScreenContent';

// S2 sine wave: xOffset = 390 (S2 is the 2nd slide in combined space)
const X_OFFSET = 390;
const SVG_TOP  = 340;
const SVG_H    = 260;

function SineTrailS2() {
  const path     = bouncePath(X_OFFSET, 390, SVG_H);
  const contacts = bounceContacts(X_OFFSET, 390, SVG_H);
  return (
    <svg
      style={{ position: "absolute", top: SVG_TOP, left: 0, width: 390, height: SVG_H, zIndex: 1, pointerEvents: "none" }}
      viewBox={`0 0 390 ${SVG_H}`}
    >
      <defs>
        <linearGradient id="wg2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0.05"/>
          <stop offset="60%"  stopColor="#F59E0B" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.55"/>
        </linearGradient>
      </defs>
      <path d={path} stroke="url(#wg2)" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {contacts.map((pt, i) => (
        <g key={i}>
          <circle cx={pt.x} cy={pt.y} r="14" fill="rgba(251,191,36,0.08)"/>
          <circle cx={pt.x} cy={pt.y} r="7"  fill="rgba(251,191,36,0.22)"/>
          <circle cx={pt.x} cy={pt.y} r="3"  fill="rgba(251,191,36,0.55)"/>
        </g>
      ))}
    </svg>
  );
}

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

      {/* Cross-screen sine wave trail */}
      <SineTrailS2 />

      {/* Headline */}
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

      {/* Big Mic — right side */}
      <img
        src={bigmicImg}
        alt="Big Mic mascot"
        style={{ position: "absolute", bottom: 0, right: -24, width: 260, height: "auto", zIndex: 20, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
      />
    </div>
  );
}
