import { useRef, useEffect } from 'react'
import { Slideshow } from './slideshow'

export const useSlideshow = ({ sources, displacement }) => {
  const ref = useRef(null);
  useEffect(() => {
    new Slideshow({
      parent: ref.current,
      intensity: 0.1,
      sources,
      displacement
    });
  }, [sources, displacement]);
  return [ref];
};