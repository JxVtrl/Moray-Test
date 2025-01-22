import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';
import { easings } from '@react-spring/web';
import React from 'react';

export function SplitText({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: {
  text?: string | React.ReactNode;
  className?: string;
  delay?: number;
  animationFrom?: object;
  animationTo?: object;
  easing?: keyof typeof easings;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}) {
  const contentArray = React.Children.toArray(text);

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    contentArray.length,
    contentArray.map((_, i) => ({
      from: animationFrom as object,
      to: inView ? animationTo as object : animationFrom as object,
      delay: i * delay,  // Aplicando o delay corretamente para cada letra
      config: { easing: easings[easing as keyof typeof easings] as any },
      onRest: () => {
        animatedCount.current += 1;
        if (animatedCount.current === contentArray.length && onLetterAnimationComplete) {
          onLetterAnimationComplete();
        }
      }
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, display: 'inline', overflow: 'hidden' }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            willChange: 'transform, opacity',
          }}
        >
          {contentArray[index]}
        </animated.span>
      ))}
    </p>
  );
}

export default SplitText;
