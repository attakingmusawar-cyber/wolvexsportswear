'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'customers',
    targetNumber: 100,
    suffix: '+',
    label: 'CUSTOMERS',
    sublabel: 'Sports clubs, gyms & international team brands',
  },
  {
    id: 'pieces',
    targetNumber: 1000,
    suffix: '+',
    label: 'PIECES PER MONTH',
    sublabel: 'Monthly custom manufacturing capacity',
  },
  {
    id: 'export',
    targetNumber: 100,
    suffix: '%',
    label: 'EXPORT QUALITY',
    sublabel: 'USA, UK, Europe & international destinations',
  },
];

export default function StatsStrip() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    customers: 0,
    pieces: 0,
    export: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers smoothly over 1.5s
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCounts({
              customers: Math.floor(easeProgress * 100),
              pieces: Math.floor(easeProgress * 1000),
              export: Math.floor(easeProgress * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                customers: 100,
                pieces: 1000,
                export: 100,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-[#080808] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 first:pt-0"
            >
              <div className="font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight tabular-nums bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-2">
                {counts[item.id].toLocaleString()}
                <span className="text-zinc-400 font-light">{item.suffix}</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-200 mb-1">
                {item.label}
              </p>
              <p className="text-xs text-zinc-500 max-w-xs font-normal">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
