import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Hide cursor on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      dot.style.display = "none";
      return;
    }

    // Hide default cursor
    // document.body.style.cursor = "none";

    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const follow = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1;
      pos.current.y += (target.current.y - pos.current.y) * 0.1;
      dot.style.transform = `translate3d(${pos.current.x - 5}px, ${
        pos.current.y - 5
      }px, 0)`;
      requestAnimationFrame(follow);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(follow);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "13px",
        height: "13px",
        borderRadius: "50%",
        background: "#000",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate3d(-50%, -50%, 0)",
        transition: "transform 0.15s ease-out",
      }}
    />
  );
}
