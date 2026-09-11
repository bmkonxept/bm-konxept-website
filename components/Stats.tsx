"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Designs Delivered",
  },
  {
    value: 40,
    suffix: "+",
    label: "Clients Served",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.025] px-5 py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group px-6 py-7 text-center sm:px-8 sm:py-4"
            >
              <div className="text-5xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-gold sm:text-6xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}