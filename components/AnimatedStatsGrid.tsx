import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (val: number) => string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  formatter,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out cubic formula for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);
      
      setCount(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  const displayValue = formatter ? formatter(count) : count.toLocaleString();

  return (
    <span ref={countRef}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  colorClass: string;
  borderClass: string;
  formatAsK?: boolean;
}

interface StatsGridProps {
  compact?: boolean;
  useFullNumbers?: boolean;
}

export const EarthquakeStatsGrid: React.FC<StatsGridProps> = ({ compact = false, useFullNumbers = true }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 my-6">
      {/* Fatalities */}
      <div className="bg-gray-900/95 text-white p-4 sm:p-5 rounded-2xl text-center border-b-4 border-brand-crimson shadow-lg backdrop-blur-sm transform hover:scale-102 transition-transform duration-300">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-crimson block mb-1">
          <AnimatedCounter prefix="+" end={300} duration={1800} />
        </span>
        <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-300 font-semibold block">
          {compact ? 'Fatalities' : 'Confirmed Fatalities'}
        </span>
      </div>

      {/* Injured */}
      <div className="bg-gray-900/95 text-white p-4 sm:p-5 rounded-2xl text-center border-b-4 border-brand-supernova shadow-lg backdrop-blur-sm transform hover:scale-102 transition-transform duration-300">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-supernova block mb-1">
          <AnimatedCounter end={4187} duration={2200} />
        </span>
        <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-300 font-semibold block">
          {compact ? 'Injured' : 'Injured Citizens'}
        </span>
      </div>

      {/* Missing */}
      <div className="bg-gray-900/95 text-white p-4 sm:p-5 rounded-2xl text-center border-b-4 border-amber-500 shadow-lg backdrop-blur-sm transform hover:scale-102 transition-transform duration-300">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-400 block mb-1">
          <AnimatedCounter end={143} duration={1600} />
        </span>
        <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-300 font-semibold block">
          {compact ? 'Missing' : 'Reported Missing'}
        </span>
      </div>

      {/* Affected Families */}
      <div className="bg-gray-900/95 text-white p-4 sm:p-5 rounded-2xl text-center border-b-4 border-blue-500 shadow-lg backdrop-blur-sm transform hover:scale-102 transition-transform duration-300">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-400 block mb-1">
          {useFullNumbers ? (
            <AnimatedCounter prefix="+" end={120328} duration={2500} />
          ) : (
            <AnimatedCounter prefix="+" end={120} suffix="k" duration={2500} />
          )}
        </span>
        <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-300 font-semibold block">
          {compact ? 'Affected Families' : 'Affected Families'}
        </span>
      </div>
    </div>
  );
};

export default EarthquakeStatsGrid;
