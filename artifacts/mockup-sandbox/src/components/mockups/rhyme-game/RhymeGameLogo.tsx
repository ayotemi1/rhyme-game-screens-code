interface LogoProps {
  size?: "large" | "medium" | "small";
}

export function RhymeGameLogo({ size = "medium" }: LogoProps) {
  const s = {
    large:  { ball: 72, THE: 30, RHYME: 42, GAME: 30, rTHE: "14px 28px", rRHYME: "14px 44px", rGAME: "14px 34px", br: 18, overlap: -8, cometW: 130, cometH: 30, cometX: -110, cometY: 20 },
    medium: { ball: 52, THE: 22, RHYME: 32, GAME: 22, rTHE: "9px 22px",  rRHYME: "10px 34px", rGAME: "9px 26px",  br: 14, overlap: -6, cometW: 96,  cometH: 22, cometX: -80,  cometY: 15 },
    small:  { ball: 40, THE: 17, RHYME: 25, GAME: 17, rTHE: "7px 16px",  rRHYME: "8px 26px",  rGAME: "7px 20px",  br: 11, overlap: -5, cometW: 74,  cometH: 17, cometX: -62,  cometY: 12 },
  }[size];

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", position: "relative" }}>

      {/* Ball + comet — sit above THE, slightly left of center */}
      <div style={{
        position: "relative",
        alignSelf: "flex-start",
        marginLeft: "18%",
        marginBottom: s.overlap - 2,
        zIndex: 10,
        width: s.ball,
        height: s.ball,
      }}>
        {/* Solid dark comet streak */}
        <div style={{
          position: "absolute",
          right: s.ball * 0.55,
          top: s.ball * 0.22,
          width: s.cometW,
          height: s.cometH,
          background: "linear-gradient(to right, transparent 0%, #1A0E4E 55%, #1A0E4E 100%)",
          borderRadius: "50%",
          transform: "rotate(-36deg)",
          transformOrigin: "right center",
        }} />
        {/* Ball */}
        <div style={{
          position: "relative", zIndex: 2,
          width: s.ball, height: s.ball, borderRadius: "50%",
          background: "radial-gradient(circle at 33% 27%, #FFF5B8 0%, #FCD34D 16%, #F59E0B 42%, #D97706 68%, #92400E 100%)",
          boxShadow: `0 ${s.ball * 0.1}px ${s.ball * 0.5}px rgba(245,158,11,0.6), inset 0 ${-s.ball * 0.14}px ${s.ball * 0.24}px rgba(0,0,0,0.28), inset 0 ${s.ball * 0.1}px ${s.ball * 0.18}px rgba(255,255,255,0.3)`,
        }} />
      </div>

      {/* THE */}
      <div style={{
        background: "#EDE9DC",
        borderRadius: s.br,
        padding: s.rTHE,
        zIndex: 3,
        marginBottom: s.overlap,
        boxShadow: "0 3px 14px rgba(0,0,0,0.22)",
        alignSelf: "center",
      }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: s.THE, color: "#1A0E4E", letterSpacing: 3, lineHeight: 1 }}>THE</span>
      </div>

      {/* RHYME */}
      <div style={{
        background: "#1A0E4E",
        borderRadius: s.br,
        padding: s.rRHYME,
        zIndex: 4,
        boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
        alignSelf: "center",
      }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: s.RHYME, color: "#EDE9DC", letterSpacing: 3, lineHeight: 1 }}>RHYME</span>
      </div>

      {/* GAME */}
      <div style={{
        background: "#EDE9DC",
        borderRadius: s.br,
        padding: s.rGAME,
        zIndex: 3,
        marginTop: s.overlap,
        boxShadow: "0 3px 14px rgba(0,0,0,0.22)",
        alignSelf: "center",
      }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: s.GAME, color: "#1A0E4E", letterSpacing: 3, lineHeight: 1 }}>GAME</span>
      </div>
    </div>
  );
}
