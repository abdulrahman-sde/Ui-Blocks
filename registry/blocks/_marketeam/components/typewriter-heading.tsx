"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  text: string;
  splitIndex: number;
  speed: number;
  delay: number;
  onComplete?: () => void;
}

export function TypewriterHeading({ text, splitIndex, speed, delay, onComplete }: Props) {
  const [displayed, setDisplayed] = useState("");
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    const startTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          done.current = true;
          onComplete?.();
        }
      }, speed);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, speed, delay, onComplete]);

  const black = displayed.slice(0, splitIndex);
  const white = displayed.slice(splitIndex);

  return (
    <span>
      <span style={{ color: "#000000" }}>{black}</span>
      <span style={{ color: "#ffffff" }}>{white}</span>
    </span>
  );
}
