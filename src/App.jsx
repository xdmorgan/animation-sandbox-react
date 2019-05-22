import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VanishingCard from './vanishing-card'
import DraggableSlider from './draggable-slider'
import ScrollReveal from './scroll-reveal'
import GLSlideshow from './slideshow'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/vanishing-card" component={VanishingCard} />
        <Route exact path="/draggable-slider" component={DraggableSlider} />
        <Route exact path="/scroll-reveal" component={ScrollReveal} />
        <Route exact path="/gl-slideshow" component={GLSlideshow} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Contents</h2>
      <ul>
        <li><Link to="/vanishing-card">Vanishing Card Carousel</Link></li>
        <li><Link to="/draggable-slider">Draggable Slider</Link></li>
        <li><Link to="/scroll-reveal">Scroll Reveal</Link></li>
        <li><Link to="/gl-slideshow">Slideshow (GL transition)</Link></li>
      </ul>
    </div>
  );
}

export default App;
