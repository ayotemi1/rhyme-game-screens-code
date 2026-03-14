import { RhymeGameLogo } from './RhymeGameLogo';

  export function JewelSetup() {
    const gridLetters: Array<{ letter: string; color: "orange" | "blue" | null }> = [
      { letter: "P", color: "orange" }, { letter: "", color: null }, { letter: "F", color: "orange" }, { letter: "", color: null },
      { letter: "T", color: "orange" }, { letter: "", color: null }, { letter: "M", color: "orange" }, { letter: "", color: null },
      { letter: "S", color: "blue" },  { letter: "", color: null }, { letter: "H", color: "blue" },  { letter: "", color: null },
      { letter: "S", color: "blue" },  { letter: "", color: null }, { letter: "F", color: "blue" },  { letter: "", color: null },
    ];

    return (
      <div style={{ minHeight: "100vh", background: "#3d1490", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)" }} />
          {/* Logo */}
          <div style={{ position: "absolute", top: 48, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
            <RhymeGameLogo size="small" />
          </div>
          {/* Content */}
          <div style={{ position: "absolute", top: 240, bottom: 92, left: 0, right: 0, padding: "0 16px", display: "flex", flexDirection: "column", gap: 10, overflowY: "auto" }}>
            <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(16px)", borderRadius: 20, padding: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
                {gridLetters.map((cell, i) => (
                  <div key={i} style={{ aspectRatio: "1.5", borderRadius: 10, background: cell.color === "orange" ? "linear-gradient(135deg, #F59E0B, #D97706)" : cell.color === "blue" ? "linear-gradient(135deg, #3B82F6, #2563EB)" : "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {cell.letter && <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff" }}>{cell.letter}</span>}
                  </div>
                ))}
              </div>
            </div>
            {[{ label: "Rhyme Pattern", value: "aAaA Double-Time" }, { label: "Fill Mode", value: "All Rhymes Filled" }, { label: "Word List", value: "The Rappers Toolkit" }].map(({ label, value }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(14px)", borderRadius: 16, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ textAlign: "center", flex: 1 }}>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{label}</div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: "#fff" }}>{value}</div>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>Skip Intro</span>
              </div>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>Duration</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 14, color: "#A78BFA" }}>32 bars</span>
              </div>
            </div>
            <div style={{ flex: 1, background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 16, height: 58, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 22, color: "#fff", letterSpacing: 3 }}>PLAY</span>
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