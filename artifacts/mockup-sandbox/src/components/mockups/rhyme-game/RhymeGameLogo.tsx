interface LogoProps {
  size?: "large" | "medium" | "small";
}

const FONT = "'Fredoka One', 'Nunito', sans-serif";

export function RhymeGameLogo({ size = "medium" }: LogoProps) {
  const s = {
    large: {
      ball: 82,
      THE: 52, RHYME: 68, GAME: 55,
      thePad: "12px 36px", rhymePad: "12px 44px", gamePad: "12px 40px",
      br: 20, overlap: -10,
      cometW: 160, cometH: 50,
    },
    medium: {
      ball: 60,
      THE: 38, RHYME: 50, GAME: 40,
      thePad: "9px 26px", rhymePad: "9px 34px", gamePad: "9px 30px",
      br: 16, overlap: -8,
      cometW: 118, cometH: 36,
    },
    small: {
      ball: 44,
      THE: 28, RHYME: 36, GAME: 30,
      thePad: "7px 18px", rhymePad: "7px 24px", gamePad: "7px 22px",
      br: 12, overlap: -6,
      cometW: 88, cometH: 27,
    },
  }[size];

  const b = s.ball;

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", position: "relative" }}>

      {/* Ball — centered above THE, clear gap so it doesn't touch the pill */}
      <div style={{
        alignSelf: "center",
        marginBottom: 8,
        zIndex: 10,
        width: b,
        height: b,
        borderRadius: "50%",
        background: "radial-gradient(circle at 32% 26%, #FFF8C0 0%, #FCD34D 15%, #F59E0B 40%, #D97706 66%, #92400E 100%)",
        boxShadow: `0 ${b * 0.1}px ${b * 0.55}px rgba(245,158,11,0.65), 0 0 ${b * 0.7}px rgba(245,158,11,0.2), inset 0 ${-b * 0.14}px ${b * 0.24}px rgba(0,0,0,0.3), inset 0 ${b * 0.1}px ${b * 0.18}px rgba(255,255,255,0.32)`,
      }} />

      {/* THE */}
      <div style={{
        background: "#EDE8D4",
        borderRadius: s.br,
        padding: s.thePad,
        zIndex: 3,
        marginBottom: s.overlap,
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        alignSelf: "center",
      }}>
        <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: s.THE, color: "#1A0E4E", letterSpacing: 1, lineHeight: 1 }}>THE</span>
      </div>

      {/* RHYME */}
      <div style={{
        background: "#1A0E4E",
        borderRadius: s.br,
        padding: s.rhymePad,
        zIndex: 4,
        boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
        alignSelf: "center",
      }}>
        <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: s.RHYME, color: "#EDE8D4", letterSpacing: 1, lineHeight: 1 }}>RHYME</span>
      </div>

      {/* GAME */}
      <div style={{
        background: "#EDE8D4",
        borderRadius: s.br,
        padding: s.gamePad,
        zIndex: 3,
        marginTop: s.overlap,
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        alignSelf: "center",
      }}>
        <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: s.GAME, color: "#1A0E4E", letterSpacing: 1, lineHeight: 1 }}>GAME</span>
      </div>
    </div>
  );
}
