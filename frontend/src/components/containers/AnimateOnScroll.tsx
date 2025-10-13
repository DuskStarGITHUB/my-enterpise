/* eslint-disable no-duplicate-imports */
/**
 * =====================================================
 *  NAME    : AnimatedOnScroll.tsx
 *  DATE      : 27/09/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: ANIMATION COMPONENT APPLY SCROLL
 * =====================================================
 */

// DEPENDENCIES
import type React from "react";
import { useEffect, useRef, useState } from "react";

// LOGIC
type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// APPLY ANIMATION SCROLL
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => { setIsVisible(true); }, delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => { observer.disconnect(); };
  }, [delay]);
  return (
    <span
      ref={ref}
      className={`flex transition-all duration-1500 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </span>
  );
};
export default AnimateOnScroll;
