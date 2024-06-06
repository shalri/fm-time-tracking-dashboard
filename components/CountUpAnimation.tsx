"use client";
import { useEffect, useState } from "react";

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

interface CountUpAnimationProps {
  children: number;
  duration?: number;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
  children,
  duration = 1000,
}) => {
  // const countTo = parseInt(children, 10);
  const countTo = children;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    return () => clearInterval(counter);
  }, [countTo, duration]);

  return <>{Math.floor(count)}</>;
};

export default CountUpAnimation;
