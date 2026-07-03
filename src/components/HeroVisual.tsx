// Self-contained, on-brand SVG for the hero. No external assets required.
// Tells the "click → confirmed sale → payout" story with a small performance card.
export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hv-float"
        viewBox="0 0 420 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <defs>
          <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#F26522" stopOpacity="0.35" />
            <stop offset="1" stopColor="#F26522" />
          </linearGradient>
          <linearGradient id="barGradLight" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#FF9A5A" stopOpacity="0.4" />
            <stop offset="1" stopColor="#FF9A5A" />
          </linearGradient>
        </defs>

        {/* dashed connector: click -> sale */}
        <path
          d="M40 70 C 150 70, 150 210, 260 210"
          stroke="#E4E8F0"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <circle cx="40" cy="70" r="7" fill="#FFFFFF" stroke="#13284D" strokeWidth="2" />
        <text
          x="56"
          y="60"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="11"
          letterSpacing="1.5"
          fill="#566072"
        >
          CLICK
        </text>

        {/* main dashboard card */}
        <rect x="70" y="120" width="320" height="300" rx="18" fill="#13284D" />

        <text
          x="94"
          y="160"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="11"
          letterSpacing="2"
          fill="rgba(255,255,255,0.5)"
        >
          CPS PERFORMANCE
        </text>
        <circle cx="360" cy="153" r="5" fill="#FF9A5A">
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* payout figure */}
        <text
          x="94"
          y="205"
          fontFamily="'Manrope', sans-serif"
          fontWeight="800"
          fontSize="40"
          letterSpacing="-1.5"
          fill="#FFFFFF"
        >
          $184,920
        </text>
        <text
          x="96"
          y="228"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="11"
          letterSpacing="1"
          fill="#FF9A5A"
        >
          &#9650; CONFIRMED PAYOUTS
        </text>

        <line
          x1="94"
          y1="392"
          x2="366"
          y2="392"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        {/* animated bar chart */}
        {[
          { x: 100, h: 46, c: "url(#barGrad)" },
          { x: 138, h: 72, c: "url(#barGrad)" },
          { x: 176, h: 58, c: "url(#barGrad)" },
          { x: 214, h: 96, c: "url(#barGrad)" },
          { x: 252, h: 80, c: "url(#barGrad)" },
          { x: 290, h: 120, c: "url(#barGradLight)" },
          { x: 328, h: 104, c: "url(#barGradLight)" },
        ].map((b, i) => (
          <rect key={i} x={b.x} width="24" rx="4" fill={b.c} y={392 - b.h} height={b.h}>
            <animate
              attributeName="height"
              values={`0;${b.h}`}
              dur="0.9s"
              begin={`${i * 0.1}s`}
              fill="freeze"
            />
            <animate
              attributeName="y"
              values={`392;${392 - b.h}`}
              dur="0.9s"
              begin={`${i * 0.1}s`}
              fill="freeze"
            />
          </rect>
        ))}

        {/* floating "sale closed" pill */}
        <g>
          <rect x="248" y="192" width="120" height="36" rx="18" fill="#F26522" />
          <text
            x="308"
            y="215"
            textAnchor="middle"
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="11"
            fontWeight="600"
            letterSpacing="1"
            fill="#FFFFFF"
          >
            SALE CLOSED
          </text>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -6; 0 0"
            dur="3s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}
