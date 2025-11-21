import React, { useEffect, useRef, useState } from "react";
import hand from "../assets/images/hand.png";

const HandCursor = ({ targetId }) => {
  const handRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const handleEnter = () => {
      setIsVisible(true);
      target.style.cursor = "none"; // HIDE original cursor
    };

    const handleLeave = () => {
      setIsVisible(false);
      target.style.cursor = "default"; // SHOW original cursor back
    };

    target.addEventListener("mouseenter", handleEnter);
    target.addEventListener("mouseleave", handleLeave);

    return () => {
      target.removeEventListener("mouseenter", handleEnter);
      target.removeEventListener("mouseleave", handleLeave);
    };
  }, [targetId]);

  useEffect(() => {
    const moveCursor = (e) => {
      if (handRef.current && isVisible) {
        handRef.current.style.left = `${e.clientX}px`;
        handRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible]);

  return (
    <div className="hidden md:flex">
      <img
        ref={handRef}
        src={hand}
        loading="lazy"
        className={`fixed pointer-events-none brightness-70 grayscale-100 z-[9999] h-30 transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
        }}
        alt="hand cursor"
      />
    </div>
  );
};

export default HandCursor;
