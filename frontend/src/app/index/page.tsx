// @lock - DO NOT MODIFY THIS FILE WITHOUT EXPLICIT USER PERMISSION.
"use client";

import Link from "next/link";

export default function Index() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100svh", overflow: "hidden", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      
      <video
        src="/HERO.mp4"
        autoPlay
        muted
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
      />

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 10, background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.8))", pointerEvents: "none" }} />

      {/* CTA Button — uvijek vidljiv */}
      <Link
        href="/home"
        className="cta-btn"
        style={{
          position: "relative",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1rem 2.5rem",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.5)",
          borderRadius: "50px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 300,
          fontSize: "0.75rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Istražite ponudu
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}
