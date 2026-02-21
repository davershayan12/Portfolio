"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    baseSpeed: number;
    speed: number;
    sway: number;
    swaySpeed: number;
    swayOffset: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
    hue: number;
    // Buoyancy
    buoyancy: number;
    buoyancyPhase: number;
    // Repulsion
    repelX: number;
    repelY: number;
}

export default function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const scrollRef = useRef(0);
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef<number>(0);

    const createParticles = useCallback((w: number, h: number): Particle[] => {
        const count = Math.min(120, Math.floor((w * h) / 12000));
        return Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 4 + 1.5,
            baseSpeed: Math.random() * 0.3 + 0.1,
            speed: 0,
            sway: Math.random() * 30 + 10,
            swaySpeed: Math.random() * 0.002 + 0.001,
            swayOffset: Math.random() * Math.PI * 2,
            opacity: Math.random() * 0.4 + 0.1,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 0.3,
            hue: Math.random() > 0.7 ? 160 : 270 + Math.random() * 20,
            buoyancy: Math.random() * 0.05 + 0.01,
            buoyancyPhase: Math.random() * Math.PI * 2,
            repelX: 0,
            repelY: 0,
        }));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (particlesRef.current.length === 0) {
                particlesRef.current = createParticles(canvas.width, canvas.height);
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("pointermove", handleMouse);

        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        let time = 0;

        const animate = () => {
            if (!ctx || !canvas) return;
            time += 1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scrollAccel = 1 + scrollRef.current * 0.0003;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            for (const p of particlesRef.current) {
                // Buoyancy simulation
                p.buoyancyPhase += 0.008;
                const buoyancyWobble = Math.sin(p.buoyancyPhase) * p.buoyancy;
                p.speed = (p.baseSpeed + buoyancyWobble) * scrollAccel;

                // Move upward
                p.y -= p.speed;

                // Lateral sway
                p.x += Math.sin(time * p.swaySpeed + p.swayOffset) * 0.4;

                // Rotation
                p.rotation += p.rotationSpeed;

                // Cursor repulsion
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200 && dist > 0) {
                    const force = (200 - dist) / 200;
                    const angle = Math.atan2(dy, dx);
                    p.repelX += Math.cos(angle) * force * 3;
                    p.repelY += Math.sin(angle) * force * 3;
                }

                // Spring return for repulsion
                p.repelX *= 0.92;
                p.repelY *= 0.92;

                const drawX = p.x + p.repelX;
                const drawY = p.y + p.repelY;

                // Reset if off screen
                if (p.y < -20) {
                    p.y = canvas.height + 20;
                    p.x = Math.random() * canvas.width;
                }

                // Draw particle
                ctx.save();
                ctx.translate(drawX, drawY);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;

                // Create soft glow
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 3);
                if (p.hue > 200) {
                    gradient.addColorStop(0, `hsla(${p.hue}, 70%, 60%, 0.6)`);
                    gradient.addColorStop(0.4, `hsla(${p.hue}, 60%, 50%, 0.2)`);
                } else {
                    gradient.addColorStop(0, `hsla(${p.hue}, 70%, 70%, 0.5)`);
                    gradient.addColorStop(0.4, `hsla(${p.hue}, 60%, 60%, 0.15)`);
                }
                gradient.addColorStop(1, "transparent");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(0, 0, p.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Core dot
                ctx.globalAlpha = p.opacity * 1.5;
                ctx.fillStyle =
                    p.hue > 200
                        ? `hsla(${p.hue}, 80%, 75%, 0.8)`
                        : `hsla(${p.hue}, 80%, 80%, 0.7)`;
                ctx.beginPath();
                ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", handleMouse);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, [createParticles]);

    return <canvas ref={canvasRef} className="particle-canvas" />;
}
