import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  start?: number;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ to, duration = 1200, start = 0 }: CountUpProps) => {
  const [value, setValue] = useState(start);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const eased = easeOutCubic(progress);
      const current = Math.round(start + (to - start) * eased);

      setValue(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [to, duration, start]);

  return <span>{value}</span>;
};

export default CountUp;
