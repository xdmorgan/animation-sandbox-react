import React, { useEffect, useRef } from "react";
import { Slideshow as SlideshowPlugin } from "./use-slideshow/slideshow";
// import cx from 'classnames';
// import styles from './slideshow.module.scss';

const STYLES = {
  width: 420,
  height: 420
};

const useSlideshow = ({ sources, displacement }) => {
  const ref = useRef(null);
  useEffect(() => {
    new SlideshowPlugin({
      parent: ref.current,
      intensity: 0.1,
      sources,
      displacement
    });
  }, [sources, displacement]);
  return [ref];
};

export function Slideshow({ sources, displacement }) {
  const [ref] = useSlideshow({ sources, displacement });
  return <div ref={ref} style={STYLES} />;
}

export default Slideshow;
