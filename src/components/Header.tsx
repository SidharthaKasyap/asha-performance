import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap navrow">
        <Link href="/" className="logo">
          Asha<span>Performance</span>
        </Link>
        <nav className="navlinks">
          <Link href="/#services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="btn btn-dark">
          Start a project
        </Link>
      </div>
    </header>
  );
}
