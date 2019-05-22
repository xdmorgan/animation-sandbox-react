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
          images={[
            "https://source.unsplash.com/random?0",
            "https://source.unsplash.com/random?1",
            "https://source.unsplash.com/random?2",
            "https://source.unsplash.com/random?3",
            "https://source.unsplash.com/random?4",
            "https://source.unsplash.com/random?5"
          ]} />
      </div>
    </div>
  );
}