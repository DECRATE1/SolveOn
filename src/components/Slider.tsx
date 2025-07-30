import { useEffect, useState } from "react";
import "../styles/Slider.css";
import { SliderData } from "../data/SliderData";
import Slide from "./Slide";
import SliderDots from "./SliderDots";
export default function Slider() {
  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrSlide((currSlide + 1) % 3), 5000);
    return () => clearInterval(interval);
  }, [currSlide]);
  return (
    <div className="Slider">
      {SliderData.map((slide, index) => {
        if (index === currSlide) {
          return (
            <Slide
              src={slide.src}
              alt={slide.alt}
              key={index + slide.alt}
              transform={0}
              sign="+"
              slideToShowLink={1}
              index={index}
            ></Slide>
          );
        } else if (index < currSlide) {
          return (
            <Slide
              src={slide.src}
              alt={slide.alt}
              key={index + slide.alt}
              transform={100}
              sign="-"
              index={index}
            ></Slide>
          );
        } else {
          return (
            <Slide
              src={slide.src}
              alt={slide.alt}
              key={index + slide.alt}
              transform={100}
              sign="+"
              index={index}
            ></Slide>
          );
        }
      })}

      <SliderDots
        indexOfActiveSlide={currSlide}
        setCurrSlide={setCurrSlide}
      ></SliderDots>
    </div>
  );
}
