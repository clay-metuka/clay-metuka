"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ═══ FADE IN ON SCROLL ═══ */
export function FadeIn({
  children,
  delay = 0,
  className = "",
  style: extraStyle = {},
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...extraStyle,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ═══ HEBREW WRAPPER — semantic lang + dir ═══ */
export function He({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span lang="he" dir="rtl" className={`font-hebrew ${className}`}>
      {children}
    </span>
  );
}

/* ═══ SECTION LABEL — teal, uppercase, tracked ═══ */
export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-body text-[10px] font-semibold uppercase tracking-[3px] text-teal-muted ${className}`}
    >
      {children}
    </div>
  );
}

/* ═══ BUTTON ═══ */
export function Button({
  children,
  onClick,
  outline = false,
  className = "",
  href,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  outline?: boolean;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-[4px] font-body text-[13px] font-semibold tracking-[0.3px] cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra";
  const filled = "bg-terra text-bg px-8 py-3.5 border-none hover:bg-terra-dark";
  const outlineStyle =
    "bg-transparent text-terra border-[1.5px] border-terra px-[30px] py-[13px] hover:bg-terra hover:text-bg";

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${outline ? outlineStyle : filled} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${outline ? outlineStyle : filled} ${className}`}
    >
      {children}
    </button>
  );
}

/* ═══ PLACEHOLDER IMAGE ═══ */
export function PlaceholderImage({
  aspect = "4/3",
  label = "Photo",
  dark = false,
  className = "",
}: {
  aspect?: string;
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center ${className}`}
      style={{
        aspectRatio: aspect,
        background: dark
          ? "linear-gradient(145deg, #3a3530, #2a2520)"
          : "linear-gradient(145deg, var(--color-bg-alt), color-mix(in srgb, var(--color-sand) 20%, transparent))",
      }}
    >
      <span
        className={`font-body text-[10px] uppercase tracking-[2.5px] ${
          dark ? "text-white/10" : "text-text-light/35"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/* ═══ ARROW ICON ═══ */
export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
