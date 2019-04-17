import React from "react";
import { Carousel } from './carousel'

export default function View() {
  return (
    <div>
      <h2>Vanishing Card Carousel</h2>
      <p>React carousel for items disappearing behind a gradient fade. Click to advance or previous and next pagination buttons</p>
      <h3>Dependencies:</h3>
      <ul>
        <li>Anime.js</li>
        <li>CSS Modules</li>
      </ul>
      <Carousel />
    </div>
  );
}