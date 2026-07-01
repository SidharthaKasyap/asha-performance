import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact-footer">
      <div className="wrap foot-grid">
        <div>
          <div className="logo">
            Asha<span style={{ color: "var(--amber)" }}>Performance</span>
          </div>
          <p>
            An affiliate performance network running Cost-Per-Sale campaigns
            across E-Commerce, Travel, BFSI, and Education — you pay only when a
            sale converts.
          </p>
        </div>
        <div>
          <div className="foot-eyebrow">Agency</div>
          <ul>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="foot-eyebrow">Contact</div>
          <ul>
            <li>
              <a href="mailto:hello@ashaperformance.com">
                hello@ashaperformance.com
              </a>
            </li>
            <li>
              <a href="tel:+14155550173">+1 (415) 555-0173</a>
            </li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 Asha Performance, LLC.</span>
        <span>Built for growth that compounds.</span>
      </div>
    </footer>
  );
}
