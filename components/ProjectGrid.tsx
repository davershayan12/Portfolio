"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Snippet Manager",
        description: "A professional tool for managing and organizing reusable code snippets efficiently.",
        link: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project03(CodeSnippetManager)",
        tag: "Python / Streamlit",
    },
    {
        title: "Code Editor",
        description: "A lightweight, web-based code editor built for quick prototyping and testing.",
        link: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project02(CodeEditor)",
        tag: "Python / Streamlit",
    },
    {
        title: "BMI Calculator",
        description: "A dynamic BMI calculator with real-time health insights and data visualization.",
        link: "https://github.com/davershayan12/Streamlit-Project/tree/main/Project01(BMI)",
        tag: "Python / Streamlit",
    },
    {
        title: "Music Player",
        description: "Desktop application with a refined UI and core audio playback functionalities.",
        link: "https://github.com/CodewithTanzeel/MusicPlayer_DesktopApplication",
        tag: "Python / Desktop / UI",
        note: "Contributed to UI & core features",
    },
    {
        title: "Banking System",
        description: "A robust banking system focusing on secure data persistence and core transaction logic.",
        link: "https://github.com/Muhammad-Ahmed27012005/BankingSystem",
        tag: "Full-Stack / Database",
        note: "Focused on user data persistence",
    },
];

const ProjectGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(
                card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                    delay: (index % 3) * 0.15,
                }
            );
        });
    }, []);

    const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            y: -8,
            borderColor: "var(--primary-red)",
            backgroundColor: "rgba(255, 37, 70, 0.04)",
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            y: 0,
            borderColor: "var(--border-card)",
            backgroundColor: "rgba(13, 17, 30, 0.4)",
            duration: 0.4,
            ease: "power2.out",
        });
    };

    return (
        <section ref={containerRef} className="projects-grid-section" id="work" style={{ padding: "var(--section-padding) 0", background: "transparent" }}>
            <div className="container">
                <p className="portfolio-label" style={{ color: "var(--primary-red)", fontSize: "0.75rem", letterSpacing: "0.3em", marginBottom: "3rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1rem" }}>+</span> PROJECTS
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            style={{
                                background: "rgba(13, 17, 30, 0.4)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid var(--border-card)",
                                borderRadius: "var(--radius-lg)",
                                padding: "2.5rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                                transition: "border-color 0.3s ease",
                            }}
                        >
                            <div>
                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--primary-red)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "1rem" }}>
                                    {project.tag}
                                </span>
                                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: "var(--text-light)", marginBottom: "1rem", lineHeight: 1.2 }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: "var(--text-dim)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                                    {project.description}
                                </p>
                                {project.note && (
                                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic", marginBottom: "1rem" }}>
                                        *{project.note}
                                    </p>
                                )}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    fontFamily: "var(--font-label)",
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "var(--text-light)",
                                    textDecoration: "none",
                                    marginTop: "auto",
                                }}
                            >
                                View Source <span style={{ color: "var(--primary-red)", transition: "transform 0.3s ease" }}>→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
