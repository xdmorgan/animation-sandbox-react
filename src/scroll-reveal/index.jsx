import React from "react";
import { useInView } from "react-intersection-observer";

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

      <ul>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
        <VisibleListItem>Anime.js</VisibleListItem>
        <VisibleListItem>CSS Modules</VisibleListItem>
        <VisibleListItem>react-with-gesture?</VisibleListItem>
      </ul>
    </div>
  );
}

function VisibleListItem({ children }) {
  const [ref, inView] = useInView({ threshold: 0 });
  return (
    <li
      ref={ref}
      style={{
        margin: 0,
        padding: '12px 24px',
        opacity: inView ? 1 : 0,
        transform: `translate3d(${inView ? 0 : -20 + 'px'}, 0, 0)`,
        transition: "all 400ms ease"
      }}
    >
      {children}
    </li>
  );
}
