import React, { Component } from "react";
import styles from "./carousel.module.css";
import anime from "animejs";

const [CARD_WIDTH, CARD_GAP] = [300, 24];
const [STACK_GAP, STACK_RANGE_X, STACK_RANGE_Y] = [240, 20, 20];

const getTransformX = () => CARD_WIDTH + CARD_GAP;
const getSlideX = n => n * getTransformX();
const getSelectedOffsetX = () => CARD_WIDTH + STACK_GAP;
const getStackX = (rand = Math.random) => rand() * STACK_RANGE_X;
const getStackY = (rand = Math.random) => rand() * STACK_RANGE_Y;

export class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      items: Array.from({ length: 10 }).map((_, idx) => idx),
      selectedIndex: 0
    };

    this.elements = {
      container: React.createRef(),
      slides: Array.from({ length: this.state.items.length }).map(() =>
        React.createRef()
      )
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
  
  onClickToAdvance = (e) => {
    const idx = this.elements.slides.map(ref => ref.current).indexOf(e.currentTarget);
    this.setState(({ selectedIndex }) => {
      if (selectedIndex === idx) return;
      return { selectedIndex: idx };
    });
  };

  componentDidUpdate(_, prevState) {
    if (this.state.selectedIndex !== prevState.selectedIndex) {
      animateSlideChange(this.elements, this.state.selectedIndex)
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
  container.current.style.height = containerRect.height + 'px';
  slides.forEach((slide, idx) => {
    slide.current.style.position = 'absolute'
    slide.current.style.left = getSlideX(idx) + 'px'
  })
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

function animateSlideChange({ slides }, idx){
  const active = slides.slice(idx, idx + 1)
  const rest = slides.slice(0, idx).concat(slides.slice(idx + 1))
  const shared = { easing: "easeOutExpo", translateX: (getTransformX() * idx) * -1 }
  anime({
    ...shared,
    targets: active.map(({ current }) => current),
    translateY: -24, 
  });
  anime({
    ...shared,
    targets: rest.map(({ current }) => current),
    // the reveal stagger can be interrupted and 
    // gets stuck at non-zero if this is omitted
    translateY: 0, 
  });
}

export default Carousel;
