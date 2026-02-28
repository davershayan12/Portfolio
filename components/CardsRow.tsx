"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";

const cards = [
  {
    label: "Code Snippet",
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    label: "Code Editor",
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    label: "Banking App",
    number: "03",
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
  },
  {
    label: "BMI Calc",
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function CardsRow() {
  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      borderColor: "var(--primary-red)",
      backgroundColor: "rgba(255, 37, 70, 0.05)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      borderColor: "var(--border-card)",
      backgroundColor: "rgba(13, 17, 30, 0.4)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section className="cards-section" id="work" aria-label="Projects overview">
      <div className="container">
        <div className="cards-row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {cards.map((card) => (
            <article
              key={card.number}
              className={`card${card.featured ? " card--featured" : ""}`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              style={{
                background: "rgba(13, 17, 30, 0.4)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--border-card)",
                padding: "2rem",
                borderRadius: "var(--radius-md)",
                textAlign: "center",
                transition: "border-color 0.3s ease",
              }}
            >
              <div className="card__thumb" style={{ marginBottom: "1.5rem", color: card.featured ? "var(--primary-red)" : "inherit" }}>{card.icon}</div>
              <div className="card__dot" style={{ backgroundColor: "var(--primary-red)", width: "4px", height: "4px", margin: "0 auto 1rem", borderRadius: "50%" }} aria-hidden="true" />
              <p className="card__label" style={{ fontFamily: "var(--font-label)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{card.label}</p>
              <p className="card__number" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", opacity: 0.5 }}>{card.number}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
