import { RhymeGameLogo } from './RhymeGameLogo';

const words = [
  { word: "crawl",  rhymes: ["all", "small", "call"],      syl: 1 },
  { word: "flight", rhymes: ["site", "right", "white"],    syl: 1 },
  { word: "crook",  rhymes: ["book", "look", "took"],      syl: 1 },
  { word: "show",   rhymes: ["no", "so", "go"],            syl: 1 },
  { word: "hog",    rhymes: ["frog", "fog", "log"],        syl: 1 },
];

export function JewelWordGen() {
  return (
    <div style={{ minHeight: "100vh", background: "#3d1490", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ width: 390, height: 844, borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 0 0 2px rgba(130,70,240,0.5), 0 0 0 10px rgba(80,30,170,0.4), 0 40px 100px rgba(20,5,60,0.6)" }}>

        {/* Background */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #7230e8 0%, #6A25D9 25%, #5418bf 55%, #4313a8 85%, #360ea0 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 200, background: "radial-gradient(ellipse at 50% 0%, rgba(180,120,255,0.16) 0%, transparent 65%)", pointerEvents: "none" }} />

        {/* Status bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 30 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>10:55</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0" y="5" width="3" height="7" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="4.5" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="9" y="1" width="3" height="11" rx="1" fill="rgba(255,255,255,0.85)"/><rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.85)"/></svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="0" y="1" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2"/><rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="rgba(255,255,255,0.85)"/><path d="M22 4.5v3a1.5 1.5 0 000-3z" fill="rgba(255,255,255,0.85)"/></svg>
          </div>
        </div>

        {/* Header */}
        <div style={{ position: "absolute", top: 52, left: 0, right: 0, height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", zIndex: 20 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 20, color: "#fff", letterSpacing: 0.3 }}>Random Words</span>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.8"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="white" strokeWidth="1.8"/></svg>
          </div>
        </div>

        {/* Filter pill */}
        <div style={{ position: "absolute", top: 112, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 12, padding: "7px 18px", display: "flex", gap: 10, alignItems: "center" }}>
            {["Elementary", "5 words", "3 rhymes each"].map((tag, i) => (
              <span key={tag} style={{ display: "flex", alignItems: "center", gap: i > 0 ? 10 : 0 }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>•</span>}
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 12, color: i === 0 ? "#FBBF24" : "rgba(255,255,255,0.55)" }}>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Word cards */}
        <div style={{ position: "absolute", top: 158, bottom: 92, left: 16, right: 16, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8, paddingBottom: 8, zIndex: 20 }}>
          {words.map(({ word, rhymes, syl }, i) => (
            <div key={word} style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(16px)", borderRadius: 18, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                {/* Target icon */}
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#FBBF24" strokeWidth="1.6"/>
                    <circle cx="12" cy="12" r="5" stroke="#FBBF24" strokeWidth="1.6"/>
                    <circle cx="12" cy="12" r="1.5" fill="#FBBF24"/>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 20, color: "#fff", flex: 1 }}>{word}</span>
                <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "3px 10px" }}>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>{syl} syl</span>
                </div>
              </div>
              {/* Rhymes row */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 4 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {rhymes.map((r, ri) => (
                    <span key={r} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, color: ri === 0 ? "#A78BFA" : "rgba(255,255,255,0.55)" }}>{r}{ri < rhymes.length - 1 ? "," : ""}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Generate New */}
          <div style={{ background: "linear-gradient(135deg, #10B981, #059669)", borderRadius: 18, padding: "16px 22px", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 8px 28px rgba(16,185,129,0.35)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M23 4v6h-6M1 20v-6h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 18, color: "#fff", letterSpacing: 0.5 }}>Generate New</span>
          </div>
        </div>

        {/* Music bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 92, background: "rgba(48,14,120,0.85)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 12, padding: "0 16px 14px", zIndex: 30 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg, rgba(106,37,217,0.6), rgba(45,27,110,0.8))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>🎵</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 13, color: "#fff" }}>Sunday Book Club</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>DJ Maintain</div>
            <div style={{ height: 2, background: "rgba(255,255,255,0.12)", borderRadius: 2, marginTop: 5 }}><div style={{ width: "38%", height: "100%", background: "#22c55e", borderRadius: 2 }} /></div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 20L9 12l10-8v16z" fill="rgba(255,255,255,0.5)"/><rect x="4" y="4" width="3" height="16" rx="1" fill="rgba(255,255,255,0.5)"/></svg>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#2D1B6E"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 4l10 8-10 8V4z" fill="rgba(255,255,255,0.5)"/><rect x="17" y="4" width="3" height="16" rx="1" fill="rgba(255,255,255,0.5)"/></svg>
          </div>
        </div>

      </div>
    </div>
  );
}
