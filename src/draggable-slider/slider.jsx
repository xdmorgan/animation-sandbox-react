import React from "react";
import styles from "./slider.module.scss";
import { Gesture } from "react-with-gesture";
import anime from "animejs";

const NUM_SLIDES = 10;
const UNSPLASH = "https://source.unsplash.com/random";

export class Slider extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 0,
      slides: Array.from({ length: NUM_SLIDES }).map((_, idx) => ({
        image: `${UNSPLASH}?${idx}`
      }))
    };

    this.elements = {
      container: React.createRef(),
      children: this.state.slides.map(() => React.createRef())
    };
  }

  onDragStart = () => {
    const [first] = this.elements.children;
    const {width} = first.current.getBoundingClientRect();
    this.width = width;
  }

  onDragEvent = ({ delta: [deltaX] }) => {
    const { active } = this.state;
    const { container } = this.elements;
    const pos = (active * -1) + (deltaX / this.width);
    container.current.style.transform = `translateX(${(pos * 100)}%) translateZ(0)`;
  };

  onDragRelease = ({ delta: [deltaX] }) => {
    const [min, max] = [0, this.elements.children.length - 1]
    const offset = Math.round(deltaX / this.width);
    const raw = this.state.active + (offset * -1);
    const to = Math.min(Math.max(raw, min), max);
    animateSlideChange(this.elements, to)
    this.setState({ active: to })
  };

  render() {
    const { slides } = this.state;
    return (
      <div className={styles.container}>
        <Gesture
          onDown={this.onDragStart}
          onUp={this.onDragRelease}
          onAction={this.onDragEvent}
        >
          {() => (
            <div className={styles.overflow}>
              <ul
                className={styles.slider}
                ref={this.elements.container}
              >
                {slides.map((slide, idx) => (
                  <li
                    key={slide.image}
                    className={styles.slide}
                    ref={this.elements.children[idx]}
                  >
                    <div style={{ backgroundImage: `url(${slide.image})` }} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Gesture>
      </div>
    );
  }
}

function animateSlideChange(refs, to, cb = () => {}) {
  anime({
    targets: refs.container.current,
    translateZ: 0,
    translateX: `${to * -100}%`,
    easing: "easeOutExpo",
    complete: () => cb(to)
  });
  const all = refs.children.map(child => child.current);
  const [target, rest] = [all[to], all.slice(0, to).concat(all.slice(to))]
  anime({ targets: rest, opacity: 0.5, easing: "easeOutExpo" });
  anime({ targets: target, opacity: 1, easing: "easeOutExpo" });
}

export default Slider;
