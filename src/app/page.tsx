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
    title: "Pay only on confirmed sales",
    body: "No spend on clicks or impressions. Payouts fire when a sale clears your confirmation window.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fraud-screened traffic",
    body: "Dedupe, bot filtering, and pattern checks strip out invalid conversions before you're billed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Vetted publisher network",
    body: "2,300+ active publishers, matched to your vertical and continuously ranked on real conversion quality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
        <path d="M16 6a3 3 0 0 1 0 5M18 20c0-2.5-1.2-4.5-3-5.5" strokeLinecap="round" />
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
  { q: "What does Cost-Per-Sale actually mean?", a: "You're billed only when a sale is confirmed and passes your validation window — not on clicks, impressions, or unqualified leads. Your cost is directly tied to revenue." },
  { q: "How fast can a campaign go live?", a: "Most offers are live across our vetted network within a few business days of agreeing confirmation rules and payouts per vertical." },
  { q: "How do you prevent fraud and bad conversions?", a: "Every click-to-sale is deduped, bot-filtered, and pattern-checked. Invalid or duplicated conversions are stripped out before any payout is calculated." },
  { q: "Which verticals do you support?", a: "E-Commerce, Travel, BFSI, and Education today — each with compliant CPS/CPL structures built for that vertical's approval funnel." },
  { q: "Is there a minimum spend or lock-in?", a: "No fixed retainers. Because you pay per confirmed sale, spend scales with the results the network delivers." },
];

export default function Home() {
  return (
    <main>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="pill animate-in d1">
              <span className="dot" /> Affiliate Performance Network
            </span>
            <h1 className="display hero-h animate-in d2">
              You only pay when a <span className="grad-text">sale closes</span>.
            </h1>
            <p className="hero-sub animate-in d3">
              Asha Performance runs Cost-Per-Sale affiliate campaigns across
              E-Commerce, Travel, BFSI, and Education — a vetted publisher
              network that gets paid the same way you do: on results.
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

      {/* ---------------- Services ---------------- */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">Verticals</span>
            <h2 className="display h2">Four verticals. One performance model.</h2>
            <p>
              Whatever the funnel, the deal is the same — payouts fire on
              confirmed conversions, screened for quality before you&apos;re billed.
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
      <section className="section tint" id="process">
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
      <section className="section" id="results">
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
                  <a href="mailto:hello@ashaperformance.com">hello@ashaperformance.com</a>
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
                  <a href="tel:+14155550173">+1 (415) 555-0173</a>
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
                <div className="v">San Francisco, CA</div>
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
