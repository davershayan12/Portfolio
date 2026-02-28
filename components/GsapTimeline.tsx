"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapTimeline() {
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Make everything visible immediately
      document.querySelectorAll(".gsap-hidden").forEach((el) => {
        (el as HTMLElement).style.visibility = "visible";
      });
      return;
    }

    // ─── Hero entrance timeline (plays on load) ───
    const hero = document.querySelector(".hero");
    if (hero) {
      (hero as HTMLElement).style.visibility = "visible";
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    // 0.00–0.90s — Hero arc stroke draw
    tl.fromTo(
      "#heroArc",
      { strokeDashoffset: 700 },
      { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" },
      0
    );

    // Simultaneously: hatch pattern fade in
    tl.to(
      ".hero__circle-hatch",
      { opacity: 1, duration: 0.9, ease: "power2.out" },
      0
    );

    // 0.85–1.40s — Hero title: letter-by-letter reveal from bottom
    tl.from(
      ".hero__title .char",
      {
        y: 30,
        opacity: 0,
        stagger: 0.04,
        duration: 0.45,
        ease: "back.out(1.4)",
      },
      0.85
    );

    // 1.30–2.10s — Subtitle labels fade up
    tl.from(
      ".hero-sub",
      {
        y: 18,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      },
      1.3
    );

    // 1.60–2.30s — Decorative elements fade in
    tl.from(
      [
        ".hero__deco-line",
        ".hero__deco-dots",
        ".hero__small-circle",
      ],
      {
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      1.6
    );

    // 1.9s – 3.2s — Cards slide upward with stagger
    // Make cards visible before animation
    document.querySelectorAll(".card").forEach((el) => {
      (el as HTMLElement).style.visibility = "visible";
    });

    tl.from(
      ".card",
      {
        y: 40,
        opacity: 0,
        scale: 0.95,
        stagger: 0.12,
        duration: 1.0,
        ease: "expo.out",
      },
      1.9
    );

    // 3.1s – 5.6s — Large portfolio block slides in from left with skew settle
    document.querySelector(".portfolio-large")?.parentElement?.parentElement?.parentElement?.classList.remove("gsap-hidden");
    const portfolioLarge = document.querySelector(".portfolio-large");
    if (portfolioLarge) {
      (portfolioLarge as HTMLElement).style.visibility = "visible";
    }

    tl.from(
      ".portfolio-large",
      {
        x: -80,
        opacity: 0,
        skewX: -3,
        duration: 1.8,
        ease: "expo.out",
      },
      3.1
    );

    tl.to(
      ".portfolio-large",
      {
        skewX: 0,
        duration: 0.5,
        ease: "back.out(1.2)",
      },
      4.5
    );

    // 5.6s – 8.0s — Portfolio feature content reveals
    document.querySelector(".portfolio-feature")?.classList.remove("gsap-hidden");
    tl.from(
      ".portfolio-feature__content",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      5.6
    );

    tl.from(
      ".portfolio-feature__title",
      {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      5.8
    );

    // 8.0s – 11.0s — Split project section reveals with opposing directions
    document.querySelector(".spotlight")?.classList.remove("gsap-hidden");
    
    tl.from(
      ".spotlight-card-left",
      {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
      },
      8.0
    );

    tl.from(
      ".spotlight-card-right",
      {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
      },
      8.15
    );

    // 11.0s – 14.5s — Gallery thumbnails fade/scale in with stagger
    document.querySelectorAll(".gallery-item").forEach((el) => {
      (el as HTMLElement).style.visibility = "visible";
    });

    tl.from(
      ".gallery-item",
      {
        y: 30,
        opacity: 0,
        scale: 0.92,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      },
      11.0
    );

    // 14.5s – 15.8s — Footer rises from bottom
    document.querySelector(".footer")?.classList.remove("gsap-hidden");
    tl.from(
      ".footer",
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      14.5
    );

    tl.from(
      ".footer__inner, .footer__bottom",
      {
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      14.6
    );

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
