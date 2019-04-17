import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VanishingCard from './vanishing-card'
import DraggableSlider from './draggable-slider'

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
      </ul>
    </div>
  );
}

export default App;
