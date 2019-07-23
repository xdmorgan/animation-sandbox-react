import React from "react";
import { useSlideshow } from "./use-slideshow";

const STYLES = {
  width: 420,
  height: 420
};

export function Slideshow({ sources, displacement }) {
  const [ref] = useSlideshow({ sources, displacement });
  return <div ref={ref} style={STYLES} />;
}

export default Slideshow;
