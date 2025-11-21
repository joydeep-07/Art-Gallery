import React, { useState, useEffect } from "react";

const CircleCursor = ({ targetId, hoverId }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [size, setSize] = useState(50); // Mouse tracking and active zone logic (using mousePos directly)

  useEffect(() => {
    const moveHandler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = document.getElementById(targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsActive(inside);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [targetId]); // Hover scaling effect (still uses smooth transition for size change)

  useEffect(() => {
    const hover = document.getElementById(hoverId);
    if (!hover) return;

    const enter = () => setSize(200);
    const leave = () => setSize(50);

    hover.addEventListener("mouseenter", enter);
    hover.addEventListener("mouseleave", leave);

    return () => {
      hover.removeEventListener("mouseenter", enter);
      hover.removeEventListener("mouseleave", leave);
    };
  }, [hoverId]);

  if (!isActive) return null;

  return (
    <div // REMOVED: transition-all duration-300 // The size change effect is still smooth because the `size` property changes smoothly via state // but the position (top/left) changes instantaneously.
      className="pointer-events-none hidden md:flex fixed z-[60] bg-white"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: mousePos.y - size / 2,
        left: mousePos.x - size / 2,
        mixBlendMode: "multiply", // Optional: Add transition ONLY for width/height if you want size change to be smooth
        transition: "width 0.3s ease-out, height 0.3s ease-out",
      }}
    />
  );
};

export default CircleCursor;
