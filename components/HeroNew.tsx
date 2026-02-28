"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroNew() {
  const heroRef = useRef<HTMLDivElement>(null);
  const deco1Ref = useRef<HTMLDivElement>(null);
  const deco2Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Parallax effect on mouse move
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2;
      const yPos = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to(deco1Ref.current, {
        x: xPos * 20,
        y: yPos * 20,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(deco2Ref.current, {
        x: -xPos * 30,
        y: -yPos * 30,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Initial Reveal Animation
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(".hero__circle-wrap", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 })
      .fromTo(".char", { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.02, duration: 1.5 }, "-=1.5")
      .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1 }, "-=1");

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const arcPath = "M 20,240 A 220,220 0 0,1 460,240";

  return (
    <section ref={heroRef} className="hero" id="about" aria-label="Hero">
      {/* Decorative line — left side */}
      <div ref={deco1Ref} className="hero__deco-line" aria-hidden="true">
        <span>01</span>
        <div className="hero__deco-line-bar" />
      </div>

      {/* Decorative dots — top right */}
      <div className="hero__deco-dots hero__deco-dots--top-right" aria-hidden="true">
        <span className="hero__deco-dot hero__deco-dot--red" />
        <span className="hero__deco-dot hero__deco-dot--blue" />
        <span className="hero__deco-dot hero__deco-dot--muted" />
      </div>

      {/* Small decorative circles */}
      <div ref={deco2Ref} className="hero__small-circle hero__small-circle--1" aria-hidden="true" />
      <div className="hero__small-circle hero__small-circle--2" aria-hidden="true" />

      {/* Main circle motif */}
      <div className="hero__circle-wrap" aria-hidden="true">
        <svg className="hero__circle-svg" viewBox="0 0 480 480">
          <circle className="hero__circle-hatch" cx="240" cy="240" r="220" />
          <circle cx="240" cy="240" r="220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
          <path id="heroArc" className="hero__arc" d={arcPath} strokeDasharray="700" strokeDashoffset="0" />
        </svg>
      </div>

      {/* Title block */}
      <p className="hero__label-top hero-sub">Full-Stack Developer</p>
      <h1 ref={titleRef} className="hero__title">
        {"MUHAMMAD DAVER SHAYAN".split("").map((char, i) => (
          <span key={i} className="char" style={{ display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p className="hero__label-bottom hero-sub">AI · ML Engineer</p>

      {/* Bottom decorative dots */}
      <div className="hero__deco-dots hero__deco-dots--bottom" aria-hidden="true">
        <span className="hero__deco-dot hero__deco-dot--muted" />
        <span className="hero__deco-dot hero__deco-dot--red" />
        <span className="hero__deco-dot hero__deco-dot--muted" />
      </div>
    </section>
  );
}
