import { lazy, useEffect, useState } from "react";
import "../styles/Slider.css";
import { SliderData } from "../data/SliderData";
const Slide = lazy(() => import("./Slide"));
const SliderDots = lazy(() => import("./SliderDots"));

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % SliderData.length),
      5000
    );
    return () => clearInterval(interval);
  }, [currentSlide]);

  const renderSlide = (slide: (typeof SliderData)[0], index: number) => {
    const isActive = index === currentSlide;
    const isPrev = index < currentSlide;

    return (
      <Slide
        src={slide.src}
        alt={slide.alt}
        key={`${index}-${slide.alt}`}
        transform={isActive ? 0 : 100}
        sign={isActive || isPrev ? "-" : "+"}
        slideToShowLink={isActive ? 1 : undefined}
        index={index}
      />
    );
  };

  return (
    <div className="slider">
      <div className="slider__track">{SliderData.map(renderSlide)}</div>

      <SliderDots
        indexOfActiveSlide={currentSlide}
        setCurrSlide={setCurrentSlide}
      />
    </div>
  );
}
