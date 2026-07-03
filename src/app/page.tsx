import Link from "next/link";
import Ticker from "@/components/Ticker";
import HeroVisual from "@/components/HeroVisual";
import ContactForm from "@/components/ContactForm";

/* ---------- content ---------- */
const services = [
  {
    title: "E-Commerce",
    body: "CPS campaigns for marketplaces and D2C brands like Shein, Myntra, Flipkart, and Temu — paid per confirmed sale, not per click.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
      </svg>
    ),
  },
  {
    title: "Travel",
    body: "Flight, hotel, and OTA bookings driven through our publisher network, with payouts tied to confirmed bookings — partners like Air Asia.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10.2 13.8 3 12l1-2 3 .6 3-3.3L6.5 3l2-.5 5 3.6 4.2-1a2 2 0 1 1 1 3.6l-4 1.2-1.8 6.7-1.8.5-.4-5-3 .8-.3 3-1.6.4z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "BFSI",
    body: "Credit cards, loans, and insurance leads run on compliant CPS and CPL structures built for regulated approval funnels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 10 12 4l9 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Education",
    body: "Course and admissions sign-ups for ed-tech and institutions, paid on enrollment-qualified conversions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4 2 9l10 5 8-4v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 11.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Onboard", body: "We map your funnel, set sale-confirmation rules, and agree the CPS payout per vertical." },
  { num: "02", title: "Activate", body: "Your offer goes live across our vetted publisher and affiliate network within days." },
  { num: "03", title: "Track", body: "Every click-to-sale is tracked, deduped, and validated before a single payout is made." },
  { num: "04", title: "Scale", body: "We shift volume toward the publishers converting best, vertical by vertical." },
];

const features = [
  {
    title: "Quality traffic, not raw clicks",
    body: "High-intent, fraud-screened web traffic that actually converts on Cost-Per-Sale offers — matched to your vertical.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fraud screening built in",
    body: "Dedupe, bot filtering, and pattern checks strip out invalid conversions before a single payout is counted.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Campaigns run end-to-end",
    body: "Want it hands-off? We build, launch, and optimize the whole CPS campaign in-house — creative, tracking, and scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10M10 20V4M16 20v-7M20 20H2" strokeLinecap="round" />
        <path d="m14 8 3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const testimonials = [
  { quote: "We cut wasted ad spend to zero. Every rupee now maps to a confirmed order — our CFO finally loves marketing.", name: "Priya Nair", role: "Growth Lead, D2C Retail", initials: "PN" },
  { quote: "Asha's publisher vetting is the real edge. Conversion quality jumped and chargebacks dropped in the first month.", name: "Marcus Lee", role: "VP Acquisition, Fintech", initials: "ML" },
  { quote: "They launched our travel offer across the network in under a week and scaled it vertical by vertical. Rare speed.", name: "Sana Kapoor", role: "Head of Partnerships, OTA", initials: "SK" },
];

const faqs = [
  { q: "Do you provide traffic, or run the campaign for me?", a: "Both. We can send high-intent, fraud-screened traffic to your existing Cost-Per-Sale offers, or build and operate the entire campaign in-house — creative, funnels, tracking, and optimization. Many partners use us for both." },
  { q: "What does Cost-Per-Sale actually mean?", a: "You're measured only on sales that are confirmed and pass validation — not on clicks, impressions, or unqualified leads. Cost stays directly tied to revenue." },
  { q: "How do you make sure the traffic is quality?", a: "Every click-to-sale is deduped, bot-filtered, and pattern-checked. Invalid or duplicated conversions are stripped out before anything is counted or billed." },
  { q: "How fast can we go live?", a: "Most offers are live within a few business days of agreeing confirmation rules and targets — whether we're supplying traffic or running the full campaign." },
  { q: "Which verticals do you support?", a: "E-Commerce, Travel, BFSI, and Education today — each with CPS structures built for that vertical's approval funnel." },
];

export default function Home() {
  return (
    <main>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="pill animate-in d1">
              <span className="dot" /> Performance Marketing · CPS
            </span>
            <h1 className="display hero-h animate-in d2">
              Quality traffic that <span className="grad-text">converts</span>.
              Campaigns that perform.
            </h1>
            <p className="hero-sub animate-in d3">
              Asha Performance drives high-intent, fraud-screened traffic for
              Cost-Per-Sale web campaigns — and builds and runs its own
              campaigns across E-Commerce, Travel, BFSI, and Education.
            </p>
            <div className="hero-cta animate-in d4">
              <Link href="#contact" className="btn btn-primary">
                Launch a CPS campaign
              </Link>
              <Link href="#services" className="btn btn-outline">
                See our verticals
              </Link>
            </div>
            <div className="hero-metrics animate-in d5">
              <div className="hm">
                <div className="n">2,300+</div>
                <div className="l">Active publishers</div>
              </div>
              <div className="hm">
                <div className="n">99.4%</div>
                <div className="l">Payout accuracy</div>
              </div>
              <div className="hm">
                <div className="n">4</div>
                <div className="l">Verticals live</div>
              </div>
            </div>
          </div>
          <div className="animate-in d3">
            <HeroVisual />
          </div>
        </div>
      </section>

      <Ticker />

      {/* ---------------- Clients ---------------- */}
      <section className="wrap clients">
        <p className="cap">Powering CPS campaigns for</p>
        <div className="client-row">
          <span>Shein</span>
          <span>Myntra</span>
          <span>Flipkart</span>
          <span>Air Asia</span>
          <span>Temu</span>
        </div>
      </section>

      {/* ---------------- What we do ---------------- */}
      <section className="section" id="what-we-do">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">What we do</span>
            <h2 className="display h2">Two ways we drive performance.</h2>
            <p>
              We supply the traffic that converts on Cost-Per-Sale offers — and
              when you&apos;d rather hand it all over, we build and run the
              campaigns ourselves.
            </p>
          </div>
          <div className="offer-grid">
            <div className="offer-card reveal">
              <div className="oc-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="tag">01 — Traffic</span>
              <h3>Quality traffic for CPS campaigns</h3>
              <p>
                We deliver high-intent, fraud-screened web traffic that converts
                on your Cost-Per-Sale offers. You get real buyers — not raw
                clicks — with every conversion validated before it counts.
              </p>
              <ul className="offer-list">
                <li>High-intent web traffic, matched to your vertical</li>
                <li>Bot filtering, dedupe &amp; fraud screening built in</li>
                <li>Only validated, confirmed conversions are billed</li>
              </ul>
            </div>

            <div className="offer-card dark reveal">
              <div className="oc-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 20V10M10 20V4M16 20v-7M20 20H2" strokeLinecap="round" />
                  <path d="m14 8 3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="tag">02 — Campaigns</span>
              <h3>Campaigns, built &amp; run in-house</h3>
              <p>
                Prefer the results without the operating load? We design and
                operate our own CPS campaigns end-to-end — offer setup, creative,
                tracking, and optimization across every vertical we run.
              </p>
              <ul className="offer-list">
                <li>End-to-end campaign management</li>
                <li>Creative, landing &amp; funnel setup</li>
                <li>Optimized vertical by vertical, click to sale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section tint" id="services">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Verticals</span>
            <h2 className="display h2">Four verticals we drive performance across.</h2>
            <p>
              Whether we&apos;re sending you traffic or running the campaign
              ourselves, the model is the same — performance is measured on
              confirmed sales, screened for quality first.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <div className="svc-card reveal" key={s.title}>
                <div className="svc-ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="section" id="process">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Process</span>
            <h2 className="display h2">How a CPS campaign goes live.</h2>
            <p>From first call to compounding scale — four steps, no wasted spend.</p>
          </div>
          <div className="proc-grid">
            {steps.map((s) => (
              <div className="proc-card reveal" key={s.num}>
                <div className="num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why us (split) ---------------- */}
      <section className="section tint" id="results">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Why Asha</span>
            <h2 className="display h2">
              Marketing that can&apos;t lose you money.
            </h2>
            <p style={{ marginTop: 18, color: "var(--slate)", fontSize: 17, lineHeight: 1.65 }}>
              Traditional media makes you pay up front and hope. We flip the
              risk — the network only earns when your revenue does.
            </p>
            <ul className="feature-list">
              {features.map((f) => (
                <li key={f.title}>
                  <span className="fi-ico">{f.icon}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="split-visual reveal">
            <div className="big grad-text">$1.92</div>
            <div className="cap">Average EPC across live verticals</div>
            <div className="mini">
              <div>
                <div className="n">6.8%</div>
                <div className="t">Avg. conversion rate</div>
              </div>
              <div>
                <div className="n">$64</div>
                <div className="t">Average order value</div>
              </div>
              <div>
                <div className="n">-2.1%</div>
                <div className="t">Fraud caught &amp; removed</div>
              </div>
              <div>
                <div className="n">+184k</div>
                <div className="t">Confirmed conversions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats band ---------------- */}
      <section className="stat-band">
        <div className="wrap stat-grid">
          <div className="stat-cell reveal">
            <div className="n">$184k+</div>
            <div className="l">Confirmed payouts</div>
          </div>
          <div className="stat-cell reveal">
            <div className="n">2,300+</div>
            <div className="l">Active publishers</div>
          </div>
          <div className="stat-cell reveal">
            <div className="n">99.4%</div>
            <div className="l">Payout accuracy</div>
          </div>
          <div className="stat-cell reveal">
            <div className="n">4</div>
            <div className="l">Verticals live</div>
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Partners</span>
            <h2 className="display h2">Growth teams that stopped paying for clicks.</h2>
          </div>
          <div className="quote-grid">
            {testimonials.map((t) => (
              <div className="quote-card reveal" key={t.name}>
                <div className="mark">&ldquo;</div>
                <p>{t.quote}</p>
                <div className="who">
                  <span className="av">{t.initials}</span>
                  <div>
                    <div className="nm">{t.name}</div>
                    <div className="rl">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="display h2">Questions, answered.</h2>
          </div>
          <div className="faq reveal">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="ic">+</span>
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="section tint" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="display h2">Let&apos;s launch your first CPS campaign.</h2>
            <p style={{ margin: "18px 0 34px", color: "var(--slate)", fontSize: 17, lineHeight: 1.65 }}>
              Tell us your offer, target CPA, and volume goals. Our network team
              replies within one business day.
            </p>
            <div className="info-item">
              <span className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="k">Email</div>
                <div className="v">
                  <a href="mailto:business@ashaperformance.com">business@ashaperformance.com</a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <span className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="k">Phone</div>
                <div className="v">
                  <a href="tel:+917903682538">+91 79036 82538</a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <span className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <div className="k">Office</div>
                <div className="v">Noida, U.P., India</div>
              </div>
            </div>
          </div>
          <div className="form-card reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="cta-band">
        <div className="wrap cta-inner">
          <div>
            <h2 className="display">Pay for sales. Not for clicks.</h2>
            <p>Put your budget where the revenue is. Launch a Cost-Per-Sale campaign with a network paid the same way you are.</p>
          </div>
          <Link href="#contact" className="btn btn-primary">
            Talk to our network team
          </Link>
        </div>
      </section>
    </main>
  );
}
