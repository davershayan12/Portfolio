"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        degree: "Bachelors of Software Engineering",
        status: "In-progress",
        institution: "Sir Syed University of Engineering and Technology",
        location: "Karachi, Pakistan",
        period: "2024 – 2028",
    },
    {
        degree: "Certified Cloud Applied Generative AI-Engineer",
        status: "In-progress",
        institution: "PIAIC",
        location: "Karachi, Pakistan",
        period: "2024 – Present",
    },
    {
        degree: "Intermediate in Computer Science",
        status: "",
        institution: "Formen College",
        location: "Karachi, Pakistan",
        period: "2022 – 2024",
    },
];

const Education = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        itemsRef.current.forEach((item, index) => {
            if (!item) return;

            gsap.fromTo(
                item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="education-section" id="education" style={{ padding: "var(--section-padding) 0", position: "relative" }}>
            <div className="container">
                <p className="portfolio-label" style={{ color: "var(--primary-red)", fontSize: "0.75rem", letterSpacing: "0.3em", marginBottom: "4rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1rem" }}>+</span> EDUCATION
                </p>

                <div className="education-timeline" style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
                    {/* Vertical central line */}
                    <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "var(--border-card)", transform: "translateX(-50%)", opacity: 0.5 }} />

                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            style={{
                                display: "flex",
                                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                                marginBottom: "4rem",
                                width: "100%",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    width: "45%",
                                    padding: "2rem",
                                    background: "var(--glass-bg)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid var(--border-card)",
                                    borderRadius: "var(--radius-md)",
                                    position: "relative",
                                }}
                            >
                                {/* Timeline dot */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "2.5rem",
                                        left: index % 2 === 0 ? "calc(100% + 2.5rem)" : "auto",
                                        right: index % 2 !== 0 ? "calc(100% + 2.5rem)" : "auto",
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor: "var(--primary-red)",
                                        borderRadius: "50%",
                                        transform: "translateX(-50%)",
                                        zIndex: 2,
                                        boxShadow: "0 0 10px var(--primary-red)",
                                    }}
                                />

                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--primary-red)", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }}>
                                    {edu.period}
                                </span>
                                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--text-light)", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                                    {edu.degree} {edu.status && <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic" }}>({edu.status})</span>}
                                </h3>
                                <p style={{ color: "var(--text-dark)", fontWeight: 600, marginBottom: "0.25rem" }}>{edu.institution}</p>
                                <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>{edu.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
