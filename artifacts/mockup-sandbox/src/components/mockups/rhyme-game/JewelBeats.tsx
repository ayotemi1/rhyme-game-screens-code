// Jewel Tone — Beat Selection & Music Player Screen
// Mirrors the real app screen (IMG_3465) with the premium jewel treatment

const FONT_H = "'Fredoka One', 'Nunito', sans-serif";
const FONT   = "'Nunito', sans-serif";
const PURPLE = "#6A25D9";
const GOLD   = "#F59E0B";
const CARD   = "rgba(8,4,20,0.72)";

// ── Tiny album-art thumbnail ──────────────────────────────────────────────────
function AlbumThumb({ active = false }) {
  return (
    <div style={{
      width: 48, height: 48, borderRadius: 8, flexShrink: 0,
      background: "linear-gradient(135deg, #2a1060 0%, #1a0a40 50%, #0d0520 100%)",
      border: active ? `1.5px solid ${GOLD}` : "1.5px solid rgba(255,255,255,0.08)",
      display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      position: "relative",
    }}>
      {/* Abstract waveform art */}
      <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
        <rect x="2"  y="14" width="3" height="8"  rx="1.5" fill="rgba(106,37,217,0.6)"/>
        <rect x="7"  y="8"  width="3" height="14" rx="1.5" fill="rgba(139,70,255,0.7)"/>
        <rect x="12" y="4"  width="3" height="20" rx="1.5" fill="rgba(106,37,217,0.9)"/>
        <rect x="17" y="10" width="3" height="12" rx="1.5" fill="rgba(245,158,11,0.8)"/>
        <rect x="22" y="6"  width="3" height="18" rx="1.5" fill="rgba(106,37,217,0.85)"/>
        <rect x="27" y="12" width="3" height="10" rx="1.5" fill="rgba(139,70,255,0.6)"/>
        <rect x="32" y="16" width="3" height="6"  rx="1.5" fill="rgba(106,37,217,0.5)"/>
      </svg>
      {active && (
        <div style={{ position: "absolute", bottom: 3, right: 4, width: 6, height: 6, borderRadius: "50%", background: GOLD, boxShadow: `0 0 6px ${GOLD}` }} />
      )}
    </div>
  );
}

// ── Heart icon ────────────────────────────────────────────────────────────────
function Heart() {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path d="M9 14.5S1.5 9.5 1.5 5a3.5 3.5 0 016.5-1.8A3.5 3.5 0 0116.5 5c0 4.5-7.5 9.5-7.5 9.5z"
        stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" fill="none"/>
    </svg>
  );
}

// ── ••• menu icon ─────────────────────────────────────────────────────────────
function Dots() {
  return (
    <svg width="18" height="5" viewBox="0 0 18 5" fill="none">
      <circle cx="2.5"  cy="2.5" r="2" fill="rgba(255,255,255,0.28)"/>
      <circle cx="9"    cy="2.5" r="2" fill="rgba(255,255,255,0.28)"/>
      <circle cx="15.5" cy="2.5" r="2" fill="rgba(255,255,255,0.28)"/>
    </svg>
  );
}

// ── Individual track row ──────────────────────────────────────────────────────
function TrackRow({ title, bpm, genre, active = false }: { title: string; bpm: number; genre: string; active?: boolean }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      background: active ? "rgba(245,158,11,0.08)" : CARD,
      borderRadius: 14, padding: "10px 14px",
      border: active ? `1px solid rgba(245,158,11,0.3)` : "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(10px)",
    }}>
      <AlbumThumb active={active} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, color: active ? "#fff" : "rgba(255,255,255,0.9)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div>
        <div style={{ fontFamily: FONT, fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>DJ Maintain</div>
        <div style={{ fontFamily: FONT, fontSize: 11, marginTop: 1 }}>
          <span style={{ color: GOLD, fontWeight: 700 }}>{bpm} BPM</span>
          <span style={{ color: "rgba(255,255,255,0.35)", marginLeft: 5 }}>· {genre}</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <Heart />
        <Dots />
      </div>
    </div>
  );
}

// ── Beat controls strip ───────────────────────────────────────────────────────
function BeatControls() {
  return (
    <div style={{ background: "rgba(8,4,20,0.88)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "10px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
        {/* Shuffle */}
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <path d="M1 4h4l3 4-3 4H1M21 4h-4l-3 4 3 4h4M7 4l3-3 3 3M7 14l3 3 3-3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        {/* Repeat */}
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <path d="M1 5h14a4 4 0 014 4v1M21 13H7a4 4 0 01-4-4V8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M18 2l3 3-3 3M4 11l-3 3 3 3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* < 4 Bars > */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1 }}>‹</span>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: FONT_H, fontSize: 14, color: "#fff", lineHeight: 1 }}>4 Bars</div>
            <div style={{ fontFamily: FONT, fontSize: 9, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>loopback</div>
          </div>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1 }}>›</span>
        </div>
        {/* EQ / Lines */}
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <line x1="1" y1="5"  x2="21" y2="5"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="1" y1="9"  x2="21" y2="9"  stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="1" y1="13" x2="21" y2="13" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="7"  cy="5"  r="2.5" fill="rgba(8,4,20,0.88)" stroke={GOLD} strokeWidth="1.4"/>
          <circle cx="15" cy="9"  r="2.5" fill="rgba(8,4,20,0.88)" stroke={GOLD} strokeWidth="1.4"/>
          <circle cx="10" cy="13" r="2.5" fill="rgba(8,4,20,0.88)" stroke={GOLD} strokeWidth="1.4"/>
        </svg>
        {/* Settings */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
          <path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.2 3.2l1.4 1.4M15.4 15.4l1.4 1.4M3.2 16.8l1.4-1.4M15.4 4.6l1.4-1.4"
            stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

// ── Transport controls ────────────────────────────────────────────────────────
function Transport() {
  return (
    <div style={{ background: "rgba(8,4,20,0.95)", padding: "14px 28px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {/* Rewind */}
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
        <polygon points="26,2 13,10 26,18" fill="rgba(255,255,255,0.3)"/>
        <polygon points="13,2 0,10 13,18"  fill="rgba(255,255,255,0.3)"/>
      </svg>
      {/* Skip back */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon points="18,2 6,10 18,18" fill="rgba(255,255,255,0.5)"/>
        <rect x="1" y="2" width="3" height="16" rx="1.5" fill="rgba(255,255,255,0.5)"/>
      </svg>
      {/* Play/Pause button — gold sphere */}
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: `radial-gradient(circle at 35% 30%, #FFF8C0 0%, #FCD34D 18%, ${GOLD} 45%, #D97706 72%, #92400E 100%)`, boxShadow: `0 6px 24px rgba(245,158,11,0.7), 0 0 0 1px rgba(255,255,255,0.15) inset`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Pause bars */}
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <rect x="2"  y="2" width="6" height="18" rx="2" fill="rgba(0,0,0,0.7)"/>
          <rect x="12" y="2" width="6" height="18" rx="2" fill="rgba(0,0,0,0.7)"/>
        </svg>
      </div>
      {/* Skip forward */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon points="2,2 14,10 2,18" fill="rgba(255,255,255,0.5)"/>
        <rect x="16" y="2" width="3" height="16" rx="1.5" fill="rgba(255,255,255,0.5)"/>
      </svg>
      {/* Fast forward */}
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
        <polygon points="0,2 13,10 0,18"  fill="rgba(255,255,255,0.3)"/>
        <polygon points="13,2 26,10 13,18" fill="rgba(255,255,255,0.3)"/>
      </svg>
    </div>
  );
}

// ── Now-playing footer ────────────────────────────────────────────────────────
function NowPlaying() {
  return (
    <div style={{ background: "rgba(4,2,12,0.98)", borderTop: "1px solid rgba(245,158,11,0.15)", padding: "8px 14px 10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
        <AlbumThumb active />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: 12, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Dangers of Hip Hop</div>
          <div style={{ fontFamily: FONT, fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>Frequently Asked Music</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: FONT_H, fontSize: 13, color: GOLD, lineHeight: 1 }}>90 BPM</div>
          <div style={{ fontFamily: FONT, fontSize: 9, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>Old School/Classic</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.1)", marginBottom: 5 }}>
        <div style={{ width: "11%", height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${GOLD}, #FBBF24)` }} />
      </div>

      {/* Time + bar indicator */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: FONT, fontSize: 10, color: "rgba(255,255,255,0.35)" }}>0:20</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontFamily: FONT, fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Bar 4</span>
          <div style={{ display: "flex", gap: 2 }}>
            {[GOLD, GOLD, "#10B981", "#10B981", "rgba(255,255,255,0.2)"].map((c, i) => (
              <div key={i} style={{ width: 12, height: 8, borderRadius: 2, background: c }} />
            ))}
          </div>
        </div>
        <span style={{ fontFamily: FONT, fontSize: 10, color: "rgba(255,255,255,0.35)" }}>3:06</span>
      </div>
    </div>
  );
}

// ── Status bar ────────────────────────────────────────────────────────────────
function StatusBar() {
  return (
    <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", background: "transparent" }}>
      <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 15, color: "#fff" }}>3:31</span>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.8" fill="rgba(255,255,255,0.9)"/>
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.8" fill="rgba(255,255,255,0.9)"/>
          <rect x="9" y="3" width="3" height="9" rx="0.8" fill="rgba(255,255,255,0.9)"/>
          <rect x="13.5" y="0" width="2.5" height="12" rx="0.8" fill="rgba(255,255,255,0.9)"/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <circle cx="8" cy="11" r="1.5" fill="rgba(255,255,255,0.9)"/>
          <path d="M4.5 7.5C5.5 6.3 6.7 5.8 8 5.8s2.5.5 3.5 1.7" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M1.5 5C3 3.2 5.3 2 8 2s5 1.2 6.5 3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55"/>
        </svg>
        <svg width="25" height="13" viewBox="0 0 25 13" fill="none">
          <rect x="0.5" y="1" width="20" height="11" rx="2.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1"/>
          <rect x="2" y="2.8" width="14" height="7.4" rx="1.5" fill="rgba(255,255,255,0.9)"/>
          <path d="M22 4.5v4a2 2 0 000-4z" fill="rgba(255,255,255,0.9)"/>
        </svg>
      </div>
    </div>
  );
}

// ── Root screen ───────────────────────────────────────────────────────────────
export function JewelBeats() {
  const tracks = [
    { title: "No Need to Teach Him",      bpm: 90, genre: "Boom Bap" },
    { title: "Now the Real Work Starts",  bpm: 87, genre: "Boom Bap" },
    { title: "Nyara Day",                  bpm: 80, genre: "Alt"      },
    { title: "One Seven Fives",            bpm: 90, genre: "Alt"      },
  ];

  return (
    <div style={{ width: 390, height: 844, background: "linear-gradient(170deg, #7C3AED 0%, #6A25D9 35%, #4e1ab8 70%, #380ea0 100%)", display: "flex", flexDirection: "column", fontFamily: FONT, overflow: "hidden", position: "relative" }}>

      {/* Radial glow behind header */}
      <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 500, height: 260, background: "radial-gradient(ellipse, rgba(180,120,255,0.22) 0%, transparent 65%)", pointerEvents: "none" }} />

      <StatusBar />

      {/* Back nav */}
      <div style={{ padding: "2px 18px 10px", position: "relative", zIndex: 2 }}>
        <span style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", lineHeight: 1 }}>‹</span>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", alignItems: "center", padding: "0 18px", marginBottom: 4, gap: 4, position: "relative", zIndex: 2 }}>
        <button style={{ flex: 1, background: "none", border: "none", padding: "6px 0", fontFamily: FONT, fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.42)", cursor: "pointer" }}>Queue (0)</button>
        <button style={{ flex: 1, background: "none", border: "none", padding: "6px 0", fontFamily: FONT_H, fontSize: 13, color: "rgba(255,255,255,0.55)", cursor: "pointer" }}>Download All</button>
        <button style={{ flex: 1, background: "none", border: "none", padding: "6px 0", fontFamily: FONT_H, fontSize: 14, color: GOLD, cursor: "pointer", textShadow: `0 0 12px rgba(245,158,11,0.5)` }}>Sort/Filter</button>
      </div>

      {/* Thin divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "0 18px 12px" }} />

      {/* Track list */}
      <div style={{ flex: 1, overflow: "hidden", padding: "0 14px", display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 2 }}>
        {tracks.map((t, i) => (
          <TrackRow key={i} title={t.title} bpm={t.bpm} genre={t.genre} active={i === 3} />
        ))}
      </div>

      {/* Beat controls */}
      <BeatControls />

      {/* Transport */}
      <Transport />

      {/* Now playing */}
      <NowPlaying />
    </div>
  );
}
