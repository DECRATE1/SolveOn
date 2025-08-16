import { SliderData } from "../data/SliderData";

interface SliderDotsProps {
  indexOfActiveSlide: number;
  setCurrSlide: (val: number) => void;
}

export default function SliderDots({
  indexOfActiveSlide,
  setCurrSlide,
}: SliderDotsProps) {
  return (
    <div className="slider__dots">
      {SliderData.map((_, index) => {
        const isActive = indexOfActiveSlide === index;

        return (
          <span
            key={index}
            className="slider__dots-dot"
            style={{
              borderRadius: "60px",
              border: "1px solid",
              borderColor: "black",
              backgroundColor: isActive ? "black" : "inherit",
            }}
            onClick={() => setCurrSlide(index)}
          ></span>
        );
      })}
    </div>
  );
}
