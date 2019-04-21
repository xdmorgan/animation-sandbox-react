import React from "react";
import styles from "./slider.module.scss";

const NUM_SLIDES = 10;
const UNSPLASH = "https://source.unsplash.com/random";

export class Slider extends React.Component {
  constructor() {
    super();

    this.state = {
      slides: Array.from({ length: NUM_SLIDES }).map((_, idx) => ({
        image: `${UNSPLASH}?${idx}`
      }))
    };
  }
  render() {
    const { slides } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.overflow}>
          <ul className={styles.slider}>
            {slides.map(slide => (
              <li
                key={slide.image}
                className={styles.slide}
              >
                <div style={{ backgroundImage: `url(${slide.image})` }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider