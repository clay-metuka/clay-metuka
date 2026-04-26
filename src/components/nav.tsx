"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/story", label: "Story" },
  { href: "/commission", label: "Commission" },
  { href: "/shop", label: "Shop" },
  { href: "/care", label: "Care" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const light = isHome && !scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(250, 246, 241, 0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Clay Metuka — Home"
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-full"
            />
            <Image
              src="/images/clay_metuka_text_white.png"
              alt="Clay Metuka"
              width={180}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-[11px] font-normal uppercase tracking-[1.2px] transition-colors duration-300"
                  style={{
                    color: light
                      ? active
                        ? "#ffffff"
                        : "rgba(255,255,255,0.65)"
                      : active
                        ? "var(--color-terra)"
                        : "var(--color-text-mid)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex cursor-pointer items-center justify-center border-none bg-transparent md:hidden"
            style={{ color: light ? "#F5F0EA" : "var(--color-text)" }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-border bg-bg px-6 py-6 md:hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[13px] uppercase tracking-[1.5px] text-text-mid"
                style={{
                  color: pathname === href ? "var(--color-terra)" : undefined,
                  fontWeight: pathname === href ? 600 : 400,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer — no spacer on home (hero is full-viewport) */}
      {!isHome && <div className="h-[72px]" />}
    </>
  );
}
