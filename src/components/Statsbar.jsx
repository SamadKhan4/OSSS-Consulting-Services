/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = end / steps;
          
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    { label: 'Team of Professionals', value: 85, suffix: '+' },
    { label: 'Total Projects', value: 255, suffix: '+' },
    { label: 'Engaged Customers', value: 500, suffix: '+' },
    { label: 'Customer Success Rate', value: 99, suffix: '%' },
  ];

  return (
    <div className="w-full py-8 px-4" style={{ background: '#f8f8f8' }}>
      <div
        className="max-w-6xl mx-auto  relative overflow-hidden"
        style={{
          background: 'rgba(35, 52, 222, 0.5)',
          borderRadius: '19px 19px 19px 19px',
          padding: '28px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >

        {/* Decorative circle shapes */}
          {[
          { top: -120, left: 350, size: 200 },
          { bottom: -20, left: 20, size: 80 },
          { top: 50, right: 540, size: 35 },
          { bottom: -20, right: -10, size: 55 },
        ].map((d, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: d.size,
              height: d.size,
              background: "rgba(255,255,255,0.12)",
              borderRadius: "50%",
              top: d.top,
              bottom: d.bottom,
              left: d.left,
              right: d.right,
            }}
          />
        ))}

        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center relative z-10"
            style={i < stats.length - 1 ? {
              borderRight: '1px solid rgba(255,255,255,0.2)',
            } : {}}
          >
            <p className="text-4xl font-bold text-white mb-2">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </p>
            <p
              className="text-xs font-semibold uppercase tracking-widest "
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              {stat.label}
            </p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
