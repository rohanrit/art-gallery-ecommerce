'use client';
import React, { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in';

interface FadeInProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  stagger?: number;
  threshold?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span';
}

export function FadeIn({
  children,
  variant = 'fade-in',
  stagger,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const staggerClass = stagger ? `stagger-${stagger}` : '';

  return (
    <Tag
      ref={ref}
      className={`${variant} ${staggerClass} ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
