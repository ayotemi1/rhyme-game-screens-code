// Jewel Tone — Beat Selection & Player  (Variant 3: gold-dominant player section)

const FONT_H = "'Fredoka One', 'Nunito', sans-serif";
const FONT   = "'Nunito', sans-serif";
const GOLD   = "#F59E0B";
const GOLD2  = "#FCD34D";
const AMBER  = "#D97706";
const DEEP   = "#92400E";
const CARD   = "rgba(120,50,230,0.28)";

function AlbumThumb({ onGold = false, active = false }) {
  const border = active ? (onGold ? `1.5px solid rgba(80,20,180,0.6)` : `1.5px solid ${GOLD}`) : (onGold ? "1.5px solid rgba(100,40,0,0.25)" : "1.5px solid rgba(255,255,255,0.15)");
  return (
    <div style={{
      width: 50, height: 50, borderRadius: 10, flexShrink: 0,
      background: onGold
        ? "linear-gradient(135deg, rgba(180,100,0,0.3) 0%, rgba(120,60,0,0.5) 100%)"
        : "linear-gradient(135deg, rgba(139,70,255,0.5) 0%, rgba(80,20,190,0.7) 100%)",
      border,
      display: "flex", alignItems: "center", justifyContent: "center",
      backdropFilter: "blur(6px)", position: "relative",
    }}>
      <svg width="34" height="26" viewBox="0 0 34 26" fill="none">
        <rect x="1"  y="13" width="3" height="8"  rx="1.5" fill={onGold ? "rgba(80,30,0,0.5)"  : "rgba(255,255,255,0.35)"}/>
        <rect x="6"  y="7"  width="3" height="14" rx="1.5" fill={onGold ? "rgba(80,30,0,0.65)" : "rgba(255,255,255,0.5)"}/>
        <rect x="11" y="3"  width="3" height="20" rx="1.5" fill={onGold ? "rgba(80,30,0,0.8)"  : "rgba(255,255,255,0.65)"}/>
        <rect x="16" y="9"  width="3" height="12" rx="1.5" fill={onGold ? "rgba(106,37,217,0.9)" : GOLD}/>
        <rect x="21" y="5"  width="3" height="18" rx="1.5" fill={onGold ? "rgba(80,30,0,0.8)"  : "rgba(255,255,255,0.65)"}/>
        <rect x="26" y="11" width="3" height="10" rx="1.5" fill={onGold ? "rgba(80,30,0,0.55)" : "rgba(255,255,255,0.45)"}/>
        <rect x="31" y="15" width="3" height="6"  rx="1.5" fill={onGold ? "rgba(80,30,0,0.4)"  : "rgba(255,255,255,0.3)"}/>
      </svg>
      {active && (
        <div style={{ position: "absolute", bottom: 4, right: 5, width: 7, height: 7, borderRadius: "50%", background: onGold ? "#6A25D9" : GOLD, boxShadow: `0 0 8px ${onGold ? "#6A25D9" : GOLD}` }} />
      )}
    </div>
  );
}

function Heart({ onGold = false }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path d="M9 14.5S1.5 9.5 1.5 5a3.5 3.5 0 016.5-1.8A3.5 3.5 0 0116.5 5c0 4.5-7.5 9.5-7.5 9.5z"
        stroke={onGold ? "rgba(80,30,0,0.45)" : "rgba(255,255,255,0.4)"} strokeWidth="1.4" fill="none"/>
    </svg>
  );
}

function Dots({ onGold = false }) {
  const c = onGold ? "rgba(80,30,0,0.45)" : "rgba(255,255,255,0.4)";
  return (
    <svg width="18" height="5" viewBox="0 0 18 5" fill="none">
      <circle cx="2.5"  cy="2.5" r="2" fill={c}/>
      <circle cx="9"    cy="2.5" r="2" fill={c}/>
      <circle cx="15.5" cy="2.5" r="2" fill={c}/>
    </svg>
  );
}

function TrackRow({ title, bpm, genre, active = false }: { title: string; bpm: number; genre: string; active?: boolean }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      background: active ? "rgba(245,158,11,0.14)" : CARD,
      borderRadius: 16, padding: "10px 14px",
      border: active ? `1px solid rgba(245,158,11,0.4)` : "1px solid rgba(255,255,255,0.13)",
      backdropFilter: "blur(14px)",
    }}>
      <AlbumThumb active={active} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: 13.5, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div>
        <div style={{ fontFamily: FONT, fontSize: 11.5, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>DJ Maintain</div>
        <div style={{ fontFamily: FONT, fontSize: 11.5, marginTop: 1 }}>
          <span style={{ color: GOLD, fontWeight: 700 }}>{bpm} BPM</span>
          <span style={{ color: "rgba(255,255,255,0.38)", marginLeft: 5 }}>· {genre}</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <Heart />
        <Dots />
      </div>
    </div>
  );
}

// Beat controls — gold background
function BeatControls() {
  const ic = "rgba(80,30,0,0.65)";
  return (
    <div style={{ background: `linear-gradient(90deg, ${AMBER} 0%, ${GOLD} 50%, ${GOLD2} 100%)`, borderTop: `2px solid rgba(255,255,255,0.25)`, padding: "10px 22px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Shuffle */}
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <path d="M1 4h4l3 4-3 4H1M21 4h-4l-3 4 3 4h4M7 4l3-3 3 3M7 14l3 3 3-3" stroke={ic} strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        {/* Repeat */}
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <path d="M1 5h14a4 4 0 014 4v1M21 13H7a4 4 0 01-4-4V8" stroke={ic} strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M18 2l3 3-3 3M4 11l-3 3 3 3" stroke={ic} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* 4 Bars */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "rgba(80,30,0,0.6)", fontSize: 18, lineHeight: 1 }}>‹</span>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: FONT_H, fontSize: 15, color: "rgba(60,20,0,0.9)", lineHeight: 1 }}>4 Bars</div>
            <div style={{ fontFamily: FONT, fontSize: 9.5, color: "rgba(80,30,0,0.55)", marginTop: 2 }}>loopback</div>
          </div>
          <span style={{ color: "rgba(80,30,0,0.6)", fontSize: 18, lineHeight: 1 }}>›</span>
        </div>
        {/* EQ sliders */}
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <line x1="1" y1="5"  x2="21" y2="5"  stroke={ic} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="1" y1="9"  x2="21" y2="9"  stroke={ic} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="1" y1="13" x2="21" y2="13" stroke={ic} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="7"  cy="5"  r="2.5" fill={GOLD2}  stroke="rgba(80,30,0,0.5)" strokeWidth="1.4"/>
          <circle cx="15" cy="9"  r="2.5" fill={GOLD2}  stroke="rgba(80,30,0,0.5)" strokeWidth="1.4"/>
          <circle cx="10" cy="13" r="2.5" fill={GOLD2}  stroke="rgba(80,30,0,0.5)" strokeWidth="1.4"/>
        </svg>
        {/* Settings */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" stroke={ic} strokeWidth="1.5"/>
          <path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.2 3.2l1.4 1.4M15.4 15.4l1.4 1.4M3.2 16.8l1.4-1.4M15.4 4.6l1.4-1.4" stroke={ic} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

// Transport — deep gold/amber
function Transport() {
  return (
    <div style={{ background: `linear-gradient(90deg, #92400E 0%, ${AMBER} 40%, ${GOLD} 100%)`, padding: "14px 28px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {/* Rewind */}
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
        <polygon points="26,2 13,10 26,18" fill="rgba(255,240,200,0.55)"/>
        <polygon points="13,2 0,10 13,18"  fill="rgba(255,240,200,0.55)"/>
      </svg>
      {/* Skip back */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon points="18,2 6,10 18,18" fill="rgba(255,240,200,0.75)"/>
        <rect x="1" y="2" width="3" height="16" rx="1.5" fill="rgba(255,240,200,0.75)"/>
      </svg>
      {/* Pause — deep purple sphere on gold background */}
      <div style={{ width: 62, height: 62, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #9B5FFF 0%, #6A25D9 40%, #4813B8 72%, #2A0880 100%)", boxShadow: "0 8px 32px rgba(80,20,180,0.55), 0 0 0 2px rgba(255,255,255,0.2) inset, 0 -4px 12px rgba(0,0,0,0.3) inset", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <rect x="2"  y="2" width="6" height="18" rx="2" fill="rgba(255,255,255,0.9)"/>
          <rect x="12" y="2" width="6" height="18" rx="2" fill="rgba(255,255,255,0.9)"/>
        </svg>
      </div>
      {/* Skip forward */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon points="2,2 14,10 2,18" fill="rgba(255,240,200,0.75)"/>
        <rect x="16" y="2" width="3" height="16" rx="1.5" fill="rgba(255,240,200,0.75)"/>
      </svg>
      {/* Fast forward */}
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
        <polygon points="0,2 13,10 0,18"  fill="rgba(255,240,200,0.55)"/>
        <polygon points="13,2 26,10 13,18" fill="rgba(255,240,200,0.55)"/>
      </svg>
    </div>
  );
}

// Now playing — warm amber footer
function NowPlaying() {
  return (
    <div style={{ background: `linear-gradient(90deg, ${DEEP} 0%, #7C3008 50%, ${AMBER} 100%)`, borderTop: "1px solid rgba(255,255,255,0.15)", padding: "10px 14px 12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <AlbumThumb onGold active />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: 13, color: "rgba(255,248,220,0.95)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Dangers of Hip Hop</div>
          <div style={{ fontFamily: FONT, fontSize: 11, color: "rgba(255,240,180,0.55)", marginTop: 2 }}>Frequently Asked Music</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: FONT_H, fontSize: 14, color: "rgba(255,248,220,0.95)", lineHeight: 1 }}>90 BPM</div>
          <div style={{ fontFamily: FONT, fontSize: 9.5, color: "rgba(255,240,180,0.5)", marginTop: 2 }}>Old School/Classic</div>
        </div>
      </div>
      {/* Progress bar */}
      <div style={{ height: 4, borderRadius: 2, background: "rgba(80,30,0,0.4)", marginBottom: 6 }}>
        <div style={{ width: "11%", height: "100%", borderRadius: 2, background: "linear-gradient(90deg, #fff8dc, rgba(255,255,255,0.9))", boxShadow: "0 0 8px rgba(255,255,255,0.5)" }} />
      </div>
      {/* Time + bar indicator */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: FONT, fontSize: 10.5, color: "rgba(255,240,180,0.55)" }}>0:20</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: FONT, fontSize: 10.5, color: "rgba(255,248,220,0.7)" }}>Bar 4</span>
          <div style={{ display: "flex", gap: 3 }}>
            {[GOLD2, GOLD2, "#10B981", "#10B981", "rgba(255,255,255,0.25)"].map((c, i) => (
              <div key={i} style={{ width: 13, height: 9, borderRadius: 2.5, background: c, boxShadow: c !== "rgba(255,255,255,0.25)" ? `0 0 5px ${c}88` : "none" }} />
            ))}
          </div>
        </div>
        <span style={{ fontFamily: FONT, fontSize: 10.5, color: "rgba(255,240,180,0.55)" }}>3:06</span>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
      <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 15, color: "#fff" }}>3:31</span>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0"    y="8"   width="3"   height="4"   rx="0.8" fill="rgba(255,255,255,0.9)"/>
          <rect x="4.5" y="5.5"  width="3"   height="6.5" rx="0.8" fill="rgba(255,255,255,0.9)"/>
          <rect x="9"   y="3"    width="3"   height="9"   rx="0.8" fill="rgba(255,255,255,0.9)"/>
          <rect x="13.5" y="0"   width="2.5" height="12"  rx="0.8" fill="rgba(255,255,255,0.9)"/>
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

export function JewelBeats3() {
  const tracks = [
    { title: "No Need to Teach Him",     bpm: 90, genre: "Boom Bap" },
    { title: "Now the Real Work Starts", bpm: 87, genre: "Boom Bap" },
    { title: "Nyara Day",                bpm: 80, genre: "Alt"      },
    { title: "One Seven Fives",          bpm: 90, genre: "Alt"      },
  ];

  return (
    <div style={{ width: 390, height: 844, background: "linear-gradient(170deg, #8B3FFF 0%, #6A25D9 30%, #5418bf 62%, #4010b0 100%)", display: "flex", flexDirection: "column", fontFamily: FONT, overflow: "hidden", position: "relative" }}>

      <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 520, height: 280, background: "radial-gradient(ellipse, rgba(200,150,255,0.22) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 280, background: "radial-gradient(ellipse at 50% 110%, rgba(245,158,11,0.2) 0%, transparent 65%)", pointerEvents: "none" }} />

      <StatusBar />

      <div style={{ padding: "0 18px 8px", zIndex: 2 }}>
        <span style={{ fontSize: 24, color: "rgba(255,255,255,0.8)", lineHeight: 1 }}>‹</span>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", alignItems: "center", padding: "0 18px", marginBottom: 6, gap: 2, zIndex: 2 }}>
        {[
          { label: "Queue (0)",    active: false },
          { label: "Download All", active: false },
          { label: "Sort/Filter",  active: true  },
        ].map((tab) => (
          <button key={tab.label} style={{
            flex: 1, background: tab.active ? "rgba(245,158,11,0.15)" : "none",
            border: tab.active ? `1px solid rgba(245,158,11,0.38)` : "1px solid transparent",
            borderRadius: 10, padding: "6px 4px",
            fontFamily: tab.active ? FONT_H : FONT,
            fontSize: tab.active ? 13.5 : 12.5,
            color: tab.active ? GOLD : "rgba(255,255,255,0.48)",
            cursor: "pointer",
            textShadow: tab.active ? `0 0 14px rgba(245,158,11,0.5)` : "none",
          }}>{tab.label}</button>
        ))}
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.14)", margin: "0 18px 14px" }} />

      {/* Track list */}
      <div style={{ flex: 1, overflow: "hidden", padding: "0 14px", display: "flex", flexDirection: "column", gap: 9, zIndex: 2 }}>
        {tracks.map((t, i) => (
          <TrackRow key={i} title={t.title} bpm={t.bpm} genre={t.genre} active={i === 3} />
        ))}
      </div>

      <BeatControls />
      <Transport />
      <NowPlaying />
    </div>
  );
}
