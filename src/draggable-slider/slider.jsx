import React from "react";
import styles from "./slider.module.css";

export function Slider() {
  return (
    <div className={styles.container}>
      <ul className={styles.carousel}>
        <li className={styles.card}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto
          ipsum ratione deleniti amet facilis animi nemo impedit placeat, ab
          obcaecati magnam explicabo aperiam veniam magni accusantium non
          tempora enim?
        </li>
        <li className={styles.card}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          quia eligendi modi debitis error, reiciendis itaque totam sit saepe
          dignissimos rerum porro deserunt veniam fugit, eaque, voluptatum ipsum
          aut maxime?
        </li>
        <li className={styles.card}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore
          impedit eveniet molestiae quia inventore, consectetur obcaecati, non
          iste quod ullam? Necessitatibus ut, natus velit in non ex eligendi
          repellendus?
        </li>
        <li className={styles.card}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          dignissimos est impedit totam minima deleniti rerum voluptatibus eum
          corrupti. Quia facilis sapiente at quaerat impedit repellendus in,
          adipisci culpa eos?
        </li>
      </ul>
    </div>
  );
}

export default Slider;