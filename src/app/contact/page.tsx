import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Asha Performance",
  description:
    "Talk to the Asha Performance network team about launching a Cost-Per-Sale campaign across E-Commerce, Travel, BFSI, or Education.",
};

const info = [
  {
    k: "Email",
    v: (
      <a href="mailto:hello@ashaperformance.com">hello@ashaperformance.com</a>
    ),
  },
  { k: "Phone", v: <a href="tel:+14155550173">+1 (415) 555-0173</a> },
  { k: "Office", v: "San Francisco, CA" },
  { k: "Hours", v: "Mon–Fri, 9am–6pm PT" },
];

export default function ContactPage() {
  return (
    <main>
      <section className="wrap page-hero">
        <p className="eyebrow">Contact</p>
        <h1 className="display">Let&apos;s launch a CPS campaign.</h1>
        <p className="lead">
          Tell us about your offer and goals. Our network team will map the
          right vertical, publishers, and payout structure — and you pay only
          when a sale closes.
        </p>
      </section>

      <section className="wrap section">
        <div className="contact-grid">
          <ContactForm />

          <div className="contact-info">
            {info.map((item) => (
              <div className="info-item" key={item.k}>
                <div className="k">{item.k}</div>
                <div className="v">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
