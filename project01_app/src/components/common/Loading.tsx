'use client';

import lottie, { AnimationItem } from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from '@/assets/lottie/loading.json';

interface Props {
  size?: 10 | 16 | 20;
}

export default function Loading({ size = 10 }: Props) {
  const containerElem = useRef<HTMLDivElement>(null);
  const animation = useRef<AnimationItem>();

  useEffect(() => {
    if (!containerElem.current) return;

    animation.current = lottie.loadAnimation({
      container: containerElem.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => {
      if (animation.current) animation.current.destroy();
    };
  }, []);

  return <div ref={containerElem} className={`w-${size}`}></div>;
}
