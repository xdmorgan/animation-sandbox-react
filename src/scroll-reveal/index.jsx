import React from "react";
import { useInView } from "react-intersection-observer";

const DEMO_BOXES = 64;
const GRID_COLS = 6;
const GRID_GAP = 24;

export default function View() {
  return (
    <div>
      <h2>Draggable Slider</h2>
      <p>A common UI pattern</p>
      <h3>Dependencies</h3>
      <p>Native IntersectionObserver polyfill</p>
      <p>
        https://www.npmjs.com/package/intersection-observer#configuring-the-polyfill
      </p>
      <p>react-intersection-observer</p>

      <ul
        style={getListStyle()}
      >
        {Array.from({ length: DEMO_BOXES }).map((_, idx) => (
          <VisibleListItemOnce key={idx}>{idx}</VisibleListItemOnce>
        ))}
      </ul>

      <ul
        style={getListStyle()}
      >
        {Array.from({ length: DEMO_BOXES }).map((_, idx) => (
          <VisibleListItem key={idx}>{idx}</VisibleListItem>
        ))}
      </ul>
    </div>
  );
}

const DEFAULT_OPTIONS = { threshold: 0 };

function VisibleListItem({ children, opts = DEFAULT_OPTIONS }) {
  const [ref, inView] = useInView(opts);
  return (
    <li ref={ref} style={getItemStyle(inView)}>
      {children}
    </li>
  );
}

function VisibleListItemOnce({ children, opts = {} }) {
  const [ref, inView] = useInView({
    ...DEFAULT_OPTIONS,
    opts,
    triggerOnce: true
  });
  return (
    <li ref={ref} style={getItemStyle(inView)}>
      {children} (once)
    </li>
  );
}

function getListStyle(){
  return {
    listStyle: "none",
    display: "grid",
    gridTemplateRows: "auto",
    gridAutoRows: "auto",
    gridRowGap: GRID_GAP,
    gridColumnGap: GRID_GAP,
    gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`
  }
}

function getItemStyle(inView) {
  return {
    margin: 0,
    padding: "12px 24px",
    height: 200,
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    opacity: inView ? 1 : 0,
    transform: `translate3d(0, ${inView ? 0 : -20 + "px"}, 0) scale(${
      inView ? 1 : 0.8
    })`,
    transition: "all 400ms ease"
  };
}
