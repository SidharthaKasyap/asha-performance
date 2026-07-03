import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <div className="foot-brand">
            <span className="chip">
              <Image
                src="/images/logo-mark.jpeg"
                alt="Asha Performance"
                width={40}
                height={40}
              />
            </span>
            <span className="wm">
              Asha<span> Performance</span>
            </span>
          </div>
          <p>
            An affiliate performance network running Cost-Per-Sale campaigns
            across E-Commerce, Travel, BFSI, and Education — you pay only when a
            sale converts.
          </p>
        </div>
        <div>
          <div className="foot-eyebrow">Explore</div>
          <ul>
            <li>
              <Link href="#services">Verticals</Link>
            </li>
            <li>
              <Link href="#process">Process</Link>
            </li>
            <li>
              <Link href="#results">Results</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
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
