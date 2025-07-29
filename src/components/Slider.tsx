import { useState } from "react";
import "../styles/Slider.css";
export default function Slider() {
  const [currSlide, setCurrSlide] = useState(0);
  const [slides, setSlides] = useState(["blue", "yellow", "green"]);

  return (
    <div className="Slider">
      <div
        style={{
          background: "red",
          width: "20px",
          height: "20px",
          position: "absolute",
        }}
        onClick={() => {
          setCurrSlide(currSlide + 1 > 3 ? 0 : currSlide + 1);
          console.log(currSlide);
        }}
      >
        a
      </div>
      {slides.map(() => {
        return (
          <div
            style={{
              background: `${slides[currSlide]}`,
              width: "100%",
              height: "100%",
              transform: `translateX((${currSlide * 10})%)`,
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "150ms",
            }}
          ></div>
        );
      })}
    </div>
  );
}
