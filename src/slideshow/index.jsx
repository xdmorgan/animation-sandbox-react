import React from "react";
import { Slideshow } from "./slideshow";

function Header() {
  return (
    <>
      <h2>GL Slideshow</h2>
      <p>Slides and fades, no user controls</p>
      <h3>Dependencies</h3>
      <ul>
        <li>CSS Modules</li>
      </ul>
    </>
  )
}

export default function View() {
  return (
    <div>
      <Header />
      <div>
        <Slideshow
          displacement="/assets/slideshow/displacement.jpg"
          sources={[
            "/assets/slideshow/1.jpg",
            "/assets/slideshow/2.jpg",
            "/assets/slideshow/3.jpg",
            "/assets/slideshow/4.jpg",
            "/assets/slideshow/5.jpg"
          ]} 
        />
      </div>
    </div>
  );
}