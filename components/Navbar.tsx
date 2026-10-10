"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showDark = !isHome || scrolled;
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDark
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent border-b border-navy/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo/lockup/garaad-lockup-navy-2x.png"
            alt="Garaad Systems"
            width={144}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  showDark
                    ? active
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500 hover:text-gray-900"
                    : active
                    ? "text-navy font-semibold"
                    : "text-navy/75 hover:text-navy"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      showDark ? "bg-brand" : "bg-navy"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-navy text-white text-sm px-5 py-2.5 rounded-lg font-bold hover:bg-navy-light transition-colors"
        >
          Start a Project
        </Link>

        <button
          className="md:hidden p-2 -mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#0A1628"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                {active && (
                  <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-brand align-middle" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-navy text-white text-sm px-5 py-3 rounded-lg font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
