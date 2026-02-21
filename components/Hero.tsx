"use client";

import { useRef } from "react";

export default function Hero() {
    const ctaRef = useRef<HTMLButtonElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!headlineRef.current) return;
        const rect = headlineRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        headlineRef.current.style.setProperty("--mouse-x", `${x}px`);
        headlineRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleDownload = () => {
        const btn = ctaRef.current;
        if (btn) {
            btn.style.transform = "scale(1.08) rotateX(6deg)";
            btn.style.boxShadow =
                "0 16px 48px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.2)";
            setTimeout(() => {
                btn.style.transform = "";
                btn.style.boxShadow = "";
            }, 600);
        }
        // Trigger download (link to resume)
        const a = document.createElement("a");
        a.href = "/Daver Resume.docx";
        a.download = "Muhammad_Daver_Shayan_Resume.docx";
        a.click();
    };

    return (
        <section className="hero" id="hero" onMouseMove={handleMouseMove}>
            <div className="hero__inner">
                <div className="hero__content">
                    <h1 className="hero__headline" ref={headlineRef}>
                        Beyond the <span className="accent">Ordinary</span>:
                        <br />
                        Original and Distinctive
                        <br />
                        Design × Development
                    </h1>
                    <p className="hero__role">
                        Next.js Full-Stack Developer <span>/</span> AI · ML Engineer
                    </p>
                    <button
                        ref={ctaRef}
                        className="hero__cta"
                        onClick={handleDownload}
                        aria-label="Download Resume"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                        Download Resume
                    </button>
                </div>
                <div className="hero__orbs" aria-hidden="true">
                    <div className="orb orb--1"></div>
                    <div className="orb orb--2"></div>
                    <div className="orb orb--3"></div>
                    <div className="orb orb--4"></div>
                    <div className="orb orb--5"></div>
                </div>
            </div>

            <div className="hero__scroll-hint" aria-hidden="true">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                </svg>
                SCROLL
            </div>
        </section>
    );
}
