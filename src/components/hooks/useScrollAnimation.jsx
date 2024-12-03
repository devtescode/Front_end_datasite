import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const element = document.getElementById('scroll-container');
    if (element) {
      setElementTop(element.offsetTop);
      setClientHeight(window.innerHeight);
    }
  }, []);

  const initial = elementTop - clientHeight;
  const final = elementTop + 300;

  const yRange = useTransform(scrollY, [initial, final], [100, 0]);
  const opacityRange = useTransform(scrollY, [initial, final], [0, 1]);

  return { yRange, opacityRange };
};

