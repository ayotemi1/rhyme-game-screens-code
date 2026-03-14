import { RhymeGameLogo } from './RhymeGameLogo';

  export function JewelGame() {
    const rows: Array<{ words: string[]; type: "blue" | "orange" | "dim" }> = [
      { words: ["play", "stay", "say", "way"],    type: "dim" },
      { words: ["fray", "pray", "sway", "day"],   type: "dim" },
      { words: ["snow", "flow", "glow", "know"],  type: "blue" },
      { words: ["blow", "low",  "show", "grow"],  type: "blue" },
      { words: ["eat",  "heat", "beat", "feat"],  type: "orange" },
      { words: ["meat", "seat", "neat", "treat"], type: "orange" },
      { words: ["flow", "slow", "row",  "toe"],   type: "dim" },
    ];

    return (
      <div style={{ minHeight: "100vh", background: "#3d1490", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #7230e8 0%, #6A25D9 22%, #5418bf 52%, #4313a8 82%, #360ea0 100%)" }} />
          {/* Logo */}
          <div style={{ position: "absolute", top: 48, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
            <RhymeGameLogo size="small" />
          </div>
          {/* Word grid */}
          <div style={{ position: "absolute", top: 238, left: 14, right: 14, zIndex: 10 }}>
            <div style={{ background: "rgba(20,8,60,0.4)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", borderRadius: 20, padding: "10px", display: "flex", flexDirection: "column", gap: 6 }}>
              {rows.map(({ words, type }, ri) => (
                <div key={ri} style={{ display: "flex", gap: 5 }}>
                  {words.map((word, ci) => {
                    const bg = type === "blue" ? "linear-gradient(135deg, #3B82F6, #2563EB)" : type === "orange" ? "linear-gradient(135deg, #F59E0B, #D97706)" : "rgba(255,255,255,0.06)";
                    const opacity = type === "dim" && ri === rows.length - 1 ? 0.5 : 1;
                    return (
                      <div key={ci} style={{ flex: 1, height: 40, borderRadius: 10, background: bg, opacity, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: type === "dim" ? 11 : 13, color: type === "dim" ? "rgba(255,255,255,0.35)" : "#fff" }}>{word}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          {/* Music bar */}
          <div style={{ position: "absolute", bottom: 92, left: 14, right: 14, zIndex: 20, background: "rgba(20,8,60,0.55)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: 18, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "linear-gradient(135deg, rgba(106,37,217,0.6), rgba(45,27,110,0.8))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>🎵</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#fff" }}>Always Shroom For More</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
            </div>
          </div>
          {/* Bottom nav */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 92, background: "rgba(48,14,120,0.65)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "space-around", paddingBottom: 14 }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Stats</span>
            <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(145deg, #FBBF24, #D97706)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="7,4 21,12 7,20" fill="#2D1B6E" /></svg>
            </div>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Tools</span>
          </div>
        </div>
      </div>
    );
  }