import React from "react";
import { Slider } from './slider'

export default function View() {
  return (
    <div>
      <h2>Draggable Slider</h2>
      <p>A common UI pattern</p>
      <h3>Dependencies</h3>
      <ul>
        <li>Anime.js</li>
        <li>CSS Modules</li>
        <li>react-with-gesture?</li>
      </ul>
      <Slider />
    </div>
  );
}