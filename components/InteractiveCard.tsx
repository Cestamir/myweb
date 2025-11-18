"use client";
import { useState, useRef, useEffect } from "react";
import "../app/interactiveCard.css";

export default function InteractiveCard() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 1. Hover tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      if (open) return; // disable tilt when open

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.9)`;
    };

    const resetTilt = () => {
      if (!open) {
        card.style.transform = `perspective(1000px) scale(0.9) rotateX(0) rotateY(0)`;
      }
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, [open]);

  // Toggle open state
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`interactive-wrapper ${open ? "is-open" : ""}`}>
      <h1 className="name">
        <span className="copy-wrap">Enter in</span>
      </h1>

      <div
        className="card"
        onClick={toggleOpen}
        ref={cardRef}
      >
        <div className="card-title-wrap">
          <h1 className="title">
            <span className="copy-wrap">Portal</span>
          </h1>
          <button className="btn">{open ? "X" : "O"}</button>
        </div>

        <div className="card-img"></div>
      </div>

      <h2 className="copyright">
        <span className="copy-wrap">20&nbsp;&nbsp;&nbsp;&nbsp;25</span>
      </h2>
    </div>
  );
}