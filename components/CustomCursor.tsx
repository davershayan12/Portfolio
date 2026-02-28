"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const onMouseDown = () => {
            gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
        };

        const onMouseUp = () => {
            gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
        };

        const onMouseEnterLink = () => {
            gsap.to(follower, { scale: 2, backgroundColor: "rgba(255, 37, 70, 0.2)", duration: 0.3 });
            gsap.to(cursor, { opacity: 0, duration: 0.2 });
        };

        const onMouseLeaveLink = () => {
            gsap.to(follower, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.3 });
            gsap.to(cursor, { opacity: 1, duration: 0.2 });
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        const links = document.querySelectorAll("a, button, .cursor-pointer");
        links.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnterLink);
            link.addEventListener("mouseleave", onMouseLeaveLink);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", onMouseEnterLink);
                link.removeEventListener("mouseleave", onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "8px",
                    height: "8px",
                    backgroundColor: "var(--primary-red)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 10001,
                    transform: "translate(-50%, -50%)",
                }}
            />
            <div
                ref={followerRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "32px",
                    height: "32px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 10000,
                    transform: "translate(-50%, -50%)",
                    backdropFilter: "blur(2px)",
                }}
            />
        </>
    );
};

export default CustomCursor;
