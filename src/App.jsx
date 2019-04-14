import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Carousel } from './carousel'

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
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Carousel />
    </div>
  );
}

export default App;
