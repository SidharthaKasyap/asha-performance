const metrics = [
  { l: "CPS CONFIRMED", v: "+184k" },
  { l: "AVG. AOV", v: "$64" },
  { l: "CONV. RATE", v: "6.8%" },
  { l: "PAYOUT ACCURACY", v: "99.4%" },
  { l: "ACTIVE PUBLISHERS", v: "2,300+" },
  { l: "EPC", v: "$1.92" },
  { l: "VERTICALS LIVE", v: "4" },
  { l: "FRAUD CAUGHT", v: "-2.1%" },
];

function Strip() {
  return (
    <>
      {metrics.map((m, i) => (
        <div className="tick" key={`${m.l}-${i}`}>
          <span className="l">{m.l}</span>
          <span className="v">{m.v}</span>
          <span className="arrow">&#9650;</span>
        </div>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="ticker-outer">
      <div className="ticker-track">
        {/* duplicated for a seamless infinite loop */}
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
