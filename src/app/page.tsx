import Link from "next/link";
import Ticker from "@/components/Ticker";
import HeroVisual from "@/components/HeroVisual";

const services = [
  {
    title: "E-Commerce",
    body: "CPS campaigns for marketplaces and D2C brands like Shein, Myntra, Flipkart, and Temu — paid per confirmed sale, not per click.",
  },
  {
    title: "Travel",
    body: "Flight, hotel, and OTA bookings driven through our publisher network, with payouts tied to confirmed bookings — partners like Air Asia.",
  },
  {
    title: "BFSI",
    body: "Credit cards, loans, and insurance leads run on compliant CPS and CPL structures built for regulated approval funnels.",
  },
  {
    title: "Education",
    body: "Course and admissions sign-ups for ed-tech and institutions, paid on enrollment-qualified conversions.",
  },
];

const steps = [
  {
    num: "01",
    title: "Onboard",
    body: "We map your funnel, set sale-confirmation rules, and agree the CPS payout per vertical.",
  },
  {
    num: "02",
    title: "Activate",
    body: "Your offer goes live across our vetted publisher and affiliate network within days.",
  },
  {
    num: "03",
    title: "Track",
    body: "Every click-to-sale is tracked, deduped, and validated before a single payout is made.",
  },
  {
    num: "04",
    title: "Scale",
    body: "We shift volume toward the publishers converting best, vertical by vertical.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Affiliate Performance Network</p>
            <h1 className="display hero-h">You only pay when a sale closes.</h1>
            <p className="hero-sub">
              Asha Performance runs Cost-Per-Sale affiliate campaigns across
              E-Commerce, Travel, BFSI, and Education — a vetted publisher
              network that gets paid the same way you do: on results.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-dark">
                Launch a CPS campaign
              </Link>
              <Link href="#services" className="btn btn-outline">
                See our verticals
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <Ticker />

      <section className="wrap clients">
        <p className="eyebrow" style={{ marginBottom: 0 }}>
          Powering CPS campaigns for
        </p>
        <div className="client-row">
          <span>Shein</span>
          <span>Myntra</span>
          <span>Flipkart</span>
          <span>Air Asia</span>
          <span>Temu</span>
        </div>
      </section>

      <section className="wrap section" id="services">
        <div className="section-head">
          <h2 className="display h2">Four verticals. One performance model.</h2>
          <Link href="/about" className="link-amber">
            All verticals →
          </Link>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section" id="about">
        <h2 className="display h2" style={{ marginBottom: 48 }}>
          How a CPS campaign goes live.
        </h2>
        <div className="proc-grid">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-inner">
          <h2 className="display">Pay for sales. Not for clicks.</h2>
          <Link href="/contact" className="btn btn-amber">
            Talk to our network team
          </Link>
        </div>
      </section>
    </main>
  );
}
