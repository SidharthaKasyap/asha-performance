import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap navrow">
        <Link href="/" className="brand" aria-label="Asha Performance home">
          <Image
            src="/images/logo-mark.jpeg"
            alt="Asha Performance"
            width={40}
            height={40}
            priority
          />
          <span className="brand-name">
            Asha<span> Performance</span>
          </span>
        </Link>
        <nav className="navlinks">
          <Link href="#services">Verticals</Link>
          <Link href="#process">Process</Link>
          <Link href="#results">Results</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <Link href="#contact" className="btn btn-primary nav-cta">
          Launch a campaign
        </Link>
      </div>
    </header>
  );
}
