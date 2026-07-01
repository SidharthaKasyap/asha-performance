import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Asha Performance",
  description:
    "Asha Performance is an affiliate performance network built on a single principle: advertisers pay only when a sale closes.",
};

const stats = [
  { num: "2,300+", label: "Active publishers" },
  { num: "4", label: "Verticals live" },
  { num: "99.4%", label: "Payout accuracy" },
  { num: "$1.92", label: "Average EPC" },
];

const values = [
  {
    title: "Results, not clicks",
    body: "We get paid the same way you do — on confirmed conversions. Our incentives are aligned with your revenue from day one.",
  },
  {
    title: "Vetted network",
    body: "Every publisher is screened before they touch your offer. Quality traffic, transparent sources, no surprises.",
  },
  {
    title: "Clean tracking",
    body: "Each click-to-sale is tracked, deduped, and validated. Fraud is caught before a single payout is made.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="wrap page-hero">
        <p className="eyebrow">About Asha Performance</p>
        <h1 className="display">A network that earns when you earn.</h1>
        <p className="lead">
          We built Asha Performance around one uncomfortable truth in digital
          marketing: most media is billed on activity, not outcomes. Our model
          flips that — advertisers pay only when a sale actually closes.
        </p>
      </section>

      <section className="wrap section">
        <div className="prose">
          <p>
            Asha Performance is a Cost-Per-Sale affiliate network operating
            across four verticals — E-Commerce, Travel, BFSI, and Education. We
            connect brands with a vetted network of publishers and affiliates,
            then tie every payout to a confirmed conversion.
          </p>
          <p>
            That structure keeps everyone honest. Publishers are rewarded for
            sending traffic that converts, advertisers only spend against real
            revenue, and our team is measured on the same outcome. No wasted
            impressions, no vanity metrics — just sales that clear.
          </p>
          <p>
            Behind the model sits infrastructure most networks skip: real-time
            click-to-sale tracking, deduplication, fraud screening, and
            per-vertical payout logic built for regulated funnels like BFSI. It
            is what lets us pay accurately at scale, and what lets brands trust
            the numbers.
          </p>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="display h2">The network in numbers.</h2>
        </div>
        <div className="stat-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="num display">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="display h2">What we stand for.</h2>
        </div>
        <div className="value-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-inner">
          <h2 className="display">Ready to pay for sales, not clicks?</h2>
          <Link href="/contact" className="btn btn-amber">
            Talk to our network team
          </Link>
        </div>
      </section>
    </main>
  );
}
