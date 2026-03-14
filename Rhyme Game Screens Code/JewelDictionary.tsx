import { RhymeGameLogo } from './RhymeGameLogo';

const results = [
  { word: "fuel",    type: "Perfect", syl: 2 },
  { word: "dual",    type: "Perfect", syl: 2 },
  { word: "renewal", type: "Perfect", syl: 3 },
  { word: "cruel",   type: "Perfect", syl: 2 },
  { word: "duel",    type: "Perfect", syl: 2 },
  { word: "newell",  type: "Perfect", syl: 2 },
  { word: "accrual", type: "Perfect", syl: 3 },
  { word: "sewell",  type: "Perfect", syl: 2 },
  { word: "buell",   type: "Perfect", syl: 2 },
];

const typeColor: Record<string, string> = {
  Perfect: "linear-gradient(135deg, #10B981, #059669)",
  Near:    "linear-gradient(135deg, #3B82F6, #2563EB)",
  Family:  "linear-gradient(135deg, #8B5CF6, #7C3AED)",
};

export function JewelDictionary() {
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
          <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 20, color: "#fff", letterSpacing: 0.3 }}>Rhyme Dictionary</span>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.8"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="white" strokeWidth="1.8"/></svg>
          </div>
        </div>

        {/* Search bar */}
        <div style={{ position: "absolute", top: 110, left: 16, right: 16, zIndex: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(20px)", borderRadius: 16, padding: "0 16px", height: 50, display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"/><path d="M16.5 16.5L21 21" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round"/></svg>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", flex: 1 }}>jewel</span>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>

        {/* Results header */}
        <div style={{ position: "absolute", top: 174, left: 16, right: 16, zIndex: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              Results for <span style={{ color: "#FBBF24" }}>"jewel"</span>
            </span>
            <span style={{ fontFamily: "'Fredoka One', 'Nunito', sans-serif", fontSize: 15, color: "#FBBF24" }}>182 rhymes</span>
          </div>
        </div>

        {/* Results list */}
        <div style={{ position: "absolute", top: 224, bottom: 92, left: 16, right: 16, overflowY: "auto", zIndex: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)", backdropFilter: "blur(16px)", borderRadius: 20, overflow: "hidden" }}>
            {results.map(({ word, type, syl }, i) => (
              <div key={word}>
                {i > 0 && <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginLeft: 16 }} />}
                <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff", flex: 1 }}>{word}</span>
                  <div style={{ background: typeColor[type] ?? typeColor.Perfect, borderRadius: 8, padding: "3px 10px" }}>
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 11, color: "#fff" }}>{type}</span>
                  </div>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", minWidth: 34, textAlign: "right" }}>{syl} syl</span>
                </div>
              </div>
            ))}
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
