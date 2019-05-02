import React, { Component } from "react";
import styles from "./carousel.module.scss";
import anime from "animejs";

const [CARD_WIDTH, CARD_GAP, STACK_GAP] = [300, 24, 200];
const LOREM_IPSUM = getLorems();

const getTransformX = () => CARD_WIDTH + CARD_GAP;
const getSlideX = n => n * getTransformX();
const getSelectedOffsetX = () => CARD_WIDTH + STACK_GAP;

export class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      items: Array.from({ length: 10 }).map(
        (_, idx) => idx + " " + LOREM_IPSUM[idx % LOREM_IPSUM.length]
      ),
      selectedIndex: 0
    };

    this.elements = {
      container: React.createRef(),
      slides: this.state.items.map(() => React.createRef())
    };
  }

  componentDidMount() {
    convertToAbsoluteLayout(this.elements);
    animateCarouselIntro(this.elements, () => console.log("finished intro"));
  }

  onPrevious = () => {
    this.setState(({ selectedIndex }) => {
      if (selectedIndex === 0) return;
      return { selectedIndex: selectedIndex - 1 };
    });
  };

  onNext = () => {
    this.setState(({ selectedIndex, items }) => {
      if (selectedIndex === items.length - 1) return;
      return { selectedIndex: selectedIndex + 1 };
    });
  };

  onClickToAdvance = e => {
    const idx = this.elements.slides
      .map(ref => ref.current)
      .indexOf(e.currentTarget);
    this.setState(({ selectedIndex }) => {
      if (selectedIndex === idx) return;
      return { selectedIndex: idx };
    });
  };

  componentDidUpdate(_, prevState) {
    if (this.state.selectedIndex !== prevState.selectedIndex) {
      animateSlideChange(this.elements, this.state.selectedIndex);
    }
  }

  render() {
    const { items, selectedIndex } = this.state;
    return (
      <section className={styles.container}>
        <header className={styles.nav}>
          <span>Current: {selectedIndex}</span>
          <nav>
            <button
              type="button"
              onClick={this.onPrevious}
              disabled={selectedIndex === 0}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.onNext}
              disabled={selectedIndex === items.length - 1}
            >
              Next
            </button>
          </nav>
        </header>
        <div className={styles.overflow}>
          <ul ref={this.elements.container} className={styles.carousel}>
            {items.map((item, idx) => (
              <li
                key={item}
                ref={this.elements.slides[idx]}
                className={styles.card}
                onClick={this.onClickToAdvance}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

function convertToAbsoluteLayout({ container, slides }) {
  const containerRect = container.current.getBoundingClientRect();
  container.current.style.height = containerRect.height + "px";
  // leave room for stack in absolutely positioned cards
  const offset = getSelectedOffsetX();
  slides.forEach((slide, idx) => {
    slide.current.style.position = "absolute";
    slide.current.style.left = offset + getSlideX(idx) + "px";
    slide.current.style.marginLeft = 0;
  });
}

function animateCarouselIntro({ slides }, complete) {
  anime
    .timeline({
      duration: 1000,
      easing: "cubicBezier(0.545, 0.475, 0.145, 1)",
      complete
    })
    .add({
      targets: slides.map(({ current }) => current),
      opacity: 1,
      translateY: [100, 0],
      delay: anime.stagger(80)
    });
}

function animateSlideChange({ slides }, idx) {
  const before = slides.slice(0, idx);
  const active = slides.slice(idx, idx + 1);
  const after = slides.slice(idx + 1);
  const easing = "easeOutExpo";
  const translateX = getSlideX(idx) * -1;
  before.forEach(({ current }, bIdx) => {
    anime({
      easing,
      translateX: translateX - getSelectedOffsetX() + getTransformX(),
      targets: current,
      translateY: 0
    });
  });
  anime({
    easing,
    translateX,
    targets: active.map(({ current }) => current),
    translateY: -24
  });
  anime({
    easing,
    translateX,
    targets: after.map(({ current }) => current),
    // the reveal stagger can be interrupted and
    // gets stuck at non-zero if this is omitted
    translateY: 0
  });
}

function getLorems() {
  return [
    [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto",
      "ipsum ratione deleniti amet facilis animi nemo impedit placeat, ab",
      "obcaecati magnam explicabo aperiam veniam magni accusantium non",
      "tempora enim? Deserunt veniam fugit, eaque, voluptatum ipsum"
    ].join(" "),
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur",
      "quia eligendi modi debitis error, reiciendis itaque totam sit saepe",
      "dignissimos rerum porro"
    ].join(" "),
    [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore",
      "impedit eveniet molestiae quia inventore, consectetur obcaecati, non",
      "obcaecati magnam explicabo aperiam veniam magni accusantium non",
      "iste quod ullam? Necessitatibus ut, molestiae quia inventore,",
      "consectetur obcaecati natus velit in non ex eligendi repellendus?"
    ].join(" "),
    [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut",
      "dignissimos est impedit totam minima deleniti rerum voluptatibus eum",
      "corrupti. Quia facilis sapiente at quaerat impedit repellendus in,",
      "adipisci culpa eos?"
    ].join(" ")
  ];
}

export default Carousel;
