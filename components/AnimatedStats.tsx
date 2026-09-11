"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

type AnimatedStatsProps = {
  stats: Stat[];
};

export default function AnimatedStats({
  stats,
}: AnimatedStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
      {stats.map((stat) => (
        <AnimatedStat
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </div>
  );
}

function AnimatedStat({
  value,
  suffix,
  label,
}: Stat) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = statRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * value
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [started, value]);

  return (
    <div
      ref={statRef}
      className="group relative px-6 py-8 text-center sm:px-8 sm:py-6"
    >
      <div className="absolute inset-5 rounded-3xl bg-gold/[0.04] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="text-5xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-gold sm:text-6xl lg:text-7xl">
          {count}
          {suffix}
        </div>

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 sm:text-xs">
          {label}
        </p>
      </div>
    </div>
  );
}