import React from "react";
import { useInView } from "react-intersection-observer";
// import cx from 'classnames';
import styles from './scroll.module.scss';

const DEMO_BOXES = 255;

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
      <div className={styles.container}>
        <ul className={styles.list}>
          {Array.from({ length: DEMO_BOXES }).map((_, idx) => (
            <VisibleListItem key={idx}>{idx}</VisibleListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DEFAULT_OPTIONS = { threshold: 0.1 };

// function VisibleListItem({ children, opts = DEFAULT_OPTIONS }) {
//   const [ref, inView] = useInView(opts);
//   return (
//     <li ref={ref} className={`${styles.item} ${inView ? '' : styles.offscreen}`}>
//       {children}
//     </li>
//   );
// }

function VisibleListItem({ children, opts = {} }) {
  const [ref, inView] = useInView({
    ...DEFAULT_OPTIONS,
    opts,
    // triggerOnce: true
  });
  return (
    <li ref={ref} className={`${styles.item} ${inView ? '' : styles.offscreen}`}>
      {children}
    </li>
  );
}
