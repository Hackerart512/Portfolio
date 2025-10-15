import React, { useRef, useEffect } from "react";

// SmoothScroll.jsx
// Single-file React component (default export) that implements a buttery smooth
// scroll experience using a virtual scroll position and requestAnimationFrame.
// - No external libraries
// - Works with anchor links
// - Responsive (recomputes on resize)
// - Accepts `smooth` prop to control the lerp factor (0.02 - 0.2 is typical)

export default function SmoothScroll({ children, smooth = 0.08 }) {
    const containerRef = useRef(null); // visible viewport container
    const contentRef = useRef(null); // actual content that will be translated
    const rafId = useRef(null);
    const targetY = useRef(0); // where we want to scroll to (virtual)
    const currentY = useRef(0); // current translated value
    const resizeObserver = useRef(null);

    // Utility: linear interpolation
    const lerp = (start, end, t) => start * (1 - t) + end * t;

    // Update body/document height to match content so native scroll still works
    const setBodyHeight = () => {
        if (!contentRef.current) return;
        const height = contentRef.current.getBoundingClientRect().height;
        document.body.style.height = `${Math.ceil(height)}px`;
    };

    // RAF loop: smooth the currentY toward targetY and transform the content
    const loop = () => {
        targetY.current = window.scrollY || window.pageYOffset || 0;
        currentY.current = lerp(currentY.current, targetY.current, smooth);

        // small epsilon to avoid tiny transforms
        if (Math.abs(currentY.current - targetY.current) < 0.05) {
            currentY.current = targetY.current;
        }

        if (contentRef.current) {
            contentRef.current.style.transform = `translate3d(0, -${currentY.current.toFixed(2)}px, 0)`;
        }

        rafId.current = requestAnimationFrame(loop);
    };

    useEffect(() => {
        // initial setup
        setBodyHeight();

        // start RAF
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(loop);

        // Recalculate on resize (use ResizeObserver for the content if available)
        const handleResize = () => setBodyHeight();

        if (window.ResizeObserver) {
            resizeObserver.current = new ResizeObserver(() => setBodyHeight());
            if (contentRef.current) resizeObserver.current.observe(contentRef.current);
        } else {
            window.addEventListener("resize", handleResize);
        }

        // Smooth anchor link handling: intercept clicks on anchor links
        const handleAnchorClick = (e) => {
            const anchor = e.target.closest("a[href^='#']");
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (href === "#" || href === "") return;

            const id = href.slice(1);
            const el = document.getElementById(id);
            if (el) {
                e.preventDefault();
                // calculate the target position of the element relative to document
                const rect = el.getBoundingClientRect();
                const offsetTop = rect.top + window.scrollY;

                // perform an animated jump by setting window.scrollTo in small steps
                // we'll set window.scrollTo immediately to the target so that targetY updates,
                // but we'll also smooth via the RAF loop. This makes anchor clicks feel natural.
                window.scrollTo({ top: offsetTop, behavior: "auto" });
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            // cleanup
            if (rafId.current) cancelAnimationFrame(rafId.current);
            if (resizeObserver.current && resizeObserver.current.disconnect) resizeObserver.current.disconnect();
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleAnchorClick);
            document.body.style.height = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [smooth]);

    // A small accessibility-friendly fallback: if user prefers reduced motion, disable smoothing
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const reduce = mq && mq.matches;
        if (reduce) {
            // disable transforming so native scrolling is preserved
            if (contentRef.current) {
                contentRef.current.style.transform = "none";
            }
            if (rafId.current) cancelAnimationFrame(rafId.current);
            document.body.style.height = "";
        }
    }, []);

    // Render: container is fixed and full-height, content is translated inside it
    // Styling uses Tailwind utility classes but also provides minimal inline fallback
    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                WebkitOverflowScrolling: "touch",
            }}
            className="w-full h-full"
        >
            <main
                ref={contentRef}
                style={{ willChange: "transform" }}
                className="min-h-screen w-full"
            >
                {/*
          The user passes the whole page content as children. Example usage:

          <SmoothScroll>
            <Header />
            <section id="hero">...</section>
            <section id="about">...</section>
            <Footer />
          </SmoothScroll>

        */}
                {children}
            </main>
        </div>
    );
}
