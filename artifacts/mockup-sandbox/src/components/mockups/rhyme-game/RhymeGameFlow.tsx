import { useState, useEffect, useRef } from "react";

type Screen = "splash" | "home" | "setup" | "game";

function Logo({ scale = 1 }: { scale?: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        transform: `scale(${scale})`,
        transformOrigin: "center top",
      }}
    >
      <div
        style={{
          background: "#F3F0FF",
          borderRadius: 14,
          padding: "6px 28px",
          marginBottom: -4,
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 28,
            color: "#2D1B6E",
            letterSpacing: 1,
          }}
        >
          THE
        </span>
      </div>
      <div
        style={{
          background: "#2D1B6E",
          borderRadius: 14,
          padding: "8px 36px",
          zIndex: 2,
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 32,
            color: "#F3F0FF",
            letterSpacing: 2,
          }}
        >
          RHYME
        </span>
      </div>
      <div
        style={{
          background: "#F3F0FF",
          borderRadius: 14,
          padding: "6px 28px",
          marginTop: -4,
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 28,
            color: "#2D1B6E",
            letterSpacing: 1,
          }}
        >
          GAME
        </span>
      </div>
    </div>
  );
}

function BouncingBall({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ position: "relative", display: "inline-block", ...style }}>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 30%, #FDE68A, #F59E0B 40%, #D97706 80%, #92400E)",
          boxShadow:
            "0 4px 20px rgba(245,158,11,0.5), inset 0 -6px 12px rgba(0,0,0,0.25), inset 0 4px 8px rgba(255,255,255,0.3)",
          animation: "ballBob 2s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 18,
          background:
            "linear-gradient(to right, transparent, rgba(180,100,10,0.35))",
          borderRadius: "50%",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
}

function GlassNav({
  active,
  onNavigate,
}: {
  active: "stats" | "play" | "tools";
  onNavigate: (s: Screen) => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 82,
        background: "rgba(30,10,70,0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: 10,
        zIndex: 50,
      }}
    >
      <button
        onClick={() => {}}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          padding: "8px 16px",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 6h8M8 10h8M8 14h5M3 6l2 2-2 2M3 14l2 2-2 2"
            stroke={active === "stats" ? "#FBBF24" : "rgba(255,255,255,0.5)"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: active === "stats" ? "#FBBF24" : "rgba(255,255,255,0.5)",
          }}
        >
          Stats
        </span>
      </button>

      <button
        onClick={() => onNavigate("setup")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
            boxShadow:
              "0 4px 20px rgba(251,191,36,0.45), 0 0 0 4px rgba(251,191,36,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <polygon points="6,4 20,12 6,20" fill="#2D1B6E" />
          </svg>
        </div>
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: active === "play" ? "#FBBF24" : "rgba(255,255,255,0.5)",
          }}
        >
          Play
        </span>
      </button>

      <button
        onClick={() => {}}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          padding: "8px 16px",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
            stroke={active === "tools" ? "#FBBF24" : "rgba(255,255,255,0.5)"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: active === "tools" ? "#FBBF24" : "rgba(255,255,255,0.5)",
          }}
        >
          Tools
        </span>
      </button>
    </div>
  );
}

function MusicBar() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 82,
        left: 0,
        right: 0,
        height: 72,
        background: "rgba(10,4,30,0.92)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 8,
          background: "linear-gradient(135deg, #3B1F5E, #1a0a3e)",
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#4C1D95" />
          <circle cx="12" cy="12" r="3" fill="#FBBF24" />
          <path
            d="M12 2v4M12 18v4M2 12h4M18 12h4"
            stroke="#6D28D9"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Always Shroom For More
        </p>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.5)",
            margin: 0,
          }}
        >
          DJ Maintain
        </p>
        <div
          style={{
            height: 2,
            background: "rgba(255,255,255,0.15)",
            borderRadius: 2,
            marginTop: 4,
          }}
        >
          <div
            style={{
              width: "35%",
              height: "100%",
              background: "#22c55e",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#000">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      </div>
    </div>
  );
}

function SplashScreen({ onTap }: { onTap: () => void }) {
  return (
    <div
      onClick={onTap}
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg, #5B21B6 0%, #4C1D95 50%, #3B1F8E 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 70%)",
        }}
      />
      <Logo />
      <p
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 15,
          color: "rgba(255,255,255,0.45)",
          marginTop: 32,
          letterSpacing: 0.5,
        }}
      >
        Tap anywhere to continue
      </p>
    </div>
  );
}

function HomeScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [ballY, setBallY] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) / 1000;
      setBallY(Math.sin(elapsed * 1.2) * 18);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(ellipse at 50% 45%, #5B21B6 0%, #4C1D95 40%, #2D1B6E 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(109,40,217,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <button
        style={{
          position: "absolute",
          top: 52,
          left: 16,
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
          <line x1="12" y1="8" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1" fill="white" />
        </svg>
      </button>

      <button
        style={{
          position: "absolute",
          top: 52,
          right: 16,
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
            stroke="white"
            strokeWidth="1.8"
          />
          <path
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
            stroke="white"
            strokeWidth="1.8"
          />
        </svg>
      </button>

      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: `translateX(-50%) translateY(${ballY}px)`,
          transition: "none",
        }}
      >
        <BouncingBall />
      </div>

      <div
        style={{
          position: "absolute",
          top: "36%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Logo />
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#FBBF24",
            margin: 0,
            letterSpacing: 0.3,
          }}
        >
          Learn how to freestyle rap, FAST!
        </p>
      </div>

      <GlassNav active="play" onNavigate={onNavigate} />
    </div>
  );
}

function CarouselSelector({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.06)",
        borderRadius: 14,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#5B21B6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </div>
      <div style={{ textAlign: "center", flex: 1 }}>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
            margin: 0,
          }}
        >
          {label}:
        </p>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          {value}
        </p>
      </div>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#5B21B6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
}

function SetupScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const previewGrid = [
    ["orange", null, "orange", null],
    [null, "orange", null, null],
    ["blue", null, "blue", null],
    [null, "blue", null, null],
  ];

  const letters: Record<string, string[]> = {
    orange: ["P", "F", "T", "M"],
    blue: ["S", "H", "S", "F"],
  };
  let orangeIdx = 0;
  let blueIdx = 0;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg, #5B21B6 0%, #4C1D95 50%, #3B1F8E 100%)",
        overflowY: "auto",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "52px 16px 16px",
        }}
      >
        <button
          onClick={() => onNavigate("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: 22,
            padding: 4,
          }}
        >
          ‹
        </button>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Logo scale={0.75} />
        </div>
        <div style={{ width: 30 }} />
      </div>

      <div style={{ padding: "8px 16px 0" }}>
        <div
          style={{
            background: "rgba(0,0,0,0.35)",
            borderRadius: 16,
            padding: 12,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 6,
          }}
        >
          {previewGrid.map((row, ri) =>
            row.map((cell, ci) => {
              let letter = "";
              if (cell === "orange")
                letter = letters.orange[orangeIdx++] || "";
              if (cell === "blue") letter = letters.blue[blueIdx++] || "";
              return (
                <div
                  key={`${ri}-${ci}`}
                  style={{
                    aspectRatio: "1.4",
                    borderRadius: 8,
                    background: cell === "orange"
                      ? "#F59E0B"
                      : cell === "blue"
                      ? "#3B82F6"
                      : "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {letter && (
                    <span
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 900,
                        fontSize: 20,
                        color: "#fff",
                      }}
                    >
                      {letter}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 6,
            padding: "0 2px",
          }}
        >
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Preview
          </span>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 12,
              color: "#A78BFA",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            Challenging
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: i < 4 ? "#A78BFA" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </span>
        </div>
      </div>

      <div
        style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}
      >
        <CarouselSelector label="Rhyme Pattern" value="aAaA Double-Time" />
        <CarouselSelector label="Fill Mode" value="All Rhymes Filled" />
        <CarouselSelector label="Word List" value="The Rappers Toolkit" />

        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Skip Intro
            </span>
            <div
              style={{
                width: 44,
                height: 24,
                borderRadius: 12,
                background: "#6D28D9",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: 3,
                  top: 3,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "#fff",
                }}
              />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Duration
            </span>
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#A78BFA",
              }}
            >
              32 bars
            </span>
          </div>
        </div>

        <div
          style={{
            background: "rgba(0,0,0,0.3)",
            borderRadius: 14,
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "rgba(255,255,255,0.06)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="11" y="3" width="2" height="11" rx="1" fill="rgba(255,255,255,0.3)" />
              <path d="M5 10a7 7 0 0014 0" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="21" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            </svg>
          </div>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Always Shroom For More
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "4px 16px 16px",
          display: "flex",
          gap: 10,
          marginTop: "auto",
        }}
      >
        <button
          style={{
            width: 72,
            height: 56,
            borderRadius: 14,
            background: "rgba(255,255,255,0.10)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <path d="M4 16c0-2.2 3.6-4 8-4s8 1.8 8 4" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 9,
              fontWeight: 700,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Recording
          </span>
          <span
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 9,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Off
          </span>
        </button>
        <button
          onClick={() => onNavigate("game")}
          style={{
            flex: 1,
            height: 56,
            borderRadius: 14,
            background: "#10B981",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            fontSize: 22,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: 2,
          }}
        >
          PLAY
        </button>
      </div>

      <GlassNav active="play" onNavigate={onNavigate} />
    </div>
  );
}

function GameScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const blueWords = ["snow", "below", "flow", "show"];
  const orangeWords = ["eat", "heat", "elite", "compete"];
  const [ballX, setBallX] = useState(50);
  const [ballY, setBallY] = useState(30);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) / 1000;
      setBallX(50 + Math.sin(elapsed * 0.8) * 30);
      setBallY(30 + Math.sin(elapsed * 1.1) * 12);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#111",
      }}
    >
      <img
        src="/__mockup/images/ref-game-cam.png"
        alt="camera background"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(2px) brightness(0.6)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 52,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Logo scale={0.65} />
      </div>

      <div
        style={{
          position: "absolute",
          left: `${ballX}%`,
          top: `${ballY}%`,
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <BouncingBall />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 154,
          left: 0,
          right: 0,
          padding: "0 10px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(8px)",
            borderRadius: 16,
            padding: 8,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 5,
            }}
          >
            {[0, 1, 2, 3].map((col) => (
              <div
                key={col}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  height: 34,
                }}
              />
            ))}
            {[0, 1, 2, 3].map((col) => (
              <div
                key={col}
                style={{
                  background:
                    col % 2 === 0
                      ? "rgba(255,255,255,0.12)"
                      : "#3B82F6",
                  borderRadius: 8,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {col % 2 !== 0 && (
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {blueWords[Math.floor(col / 2)]}
                  </span>
                )}
              </div>
            ))}
            {[...blueWords].map((word, i) => (
              <div
                key={i}
                style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.10)" : "#3B82F6",
                  borderRadius: 8,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i % 2 !== 0 && (
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {word}
                  </span>
                )}
              </div>
            ))}
            {[0, 1, 2, 3].map((col) => (
              <div
                key={col}
                style={{
                  background:
                    col % 2 === 0
                      ? "rgba(255,255,255,0.10)"
                      : "#F59E0B",
                  borderRadius: 8,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {col % 2 !== 0 && (
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {orangeWords[Math.floor(col / 2)]}
                  </span>
                )}
              </div>
            ))}
            {[...orangeWords].map((word, i) => (
              <div
                key={i}
                style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.08)" : "#F59E0B",
                  borderRadius: 8,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i % 2 !== 0 && (
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {word}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 82,
          left: 0,
          right: 0,
          height: 72,
          background: "rgba(5,2,15,0.88)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 12,
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 8,
            background: "linear-gradient(135deg, #3B1F5E, #1a0a3e)",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#4C1D95" />
            <circle cx="12" cy="12" r="3" fill="#FBBF24" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#fff",
              margin: 0,
            }}
          >
            Always Shroom For...
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
            }}
          >
            DJ Maintain
          </p>
          <div style={{ height: 2, background: "rgba(255,255,255,0.15)", borderRadius: 2, marginTop: 4 }}>
            <div style={{ width: "35%", height: "100%", background: "#22c55e", borderRadius: 2 }} />
          </div>
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#000">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        </div>
      </div>

      <GlassNav active="play" onNavigate={onNavigate} />
    </div>
  );
}

export function RhymeGameFlow() {
  const [screen, setScreen] = useState<Screen>("splash");

  const navigate = (s: Screen) => setScreen(s);

  return (
    <div
      style={{
        width: 390,
        height: 844,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: 44,
        boxShadow:
          "0 0 0 10px #1a1a2e, 0 30px 80px rgba(0,0,0,0.7)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <style>{`
        @keyframes ballBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>

      {screen === "splash" && (
        <SplashScreen onTap={() => navigate("home")} />
      )}
      {screen === "home" && <HomeScreen onNavigate={navigate} />}
      {screen === "setup" && <SetupScreen onNavigate={navigate} />}
      {screen === "game" && <GameScreen onNavigate={navigate} />}
    </div>
  );
}
