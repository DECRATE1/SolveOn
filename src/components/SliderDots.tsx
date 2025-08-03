import { SliderData } from "../data/SliderData";

export default function SliderDots({
  indexOfActiveSlide,
  setCurrSlide,
}: {
  indexOfActiveSlide: number;
  setCurrSlide: (val: number) => void;
}) {
  return (
    <div className="slider__dots">
      {SliderData.map((_, index) => {
        return (
          <span
            className="slider__dots-dot"
            key={index}
            style={{
              borderRadius: "60px",
              border: "1px solid",
              borderColor: "black",

              backgroundColor:
                indexOfActiveSlide === index ? "black" : "inherit",
            }}
            onClick={() => setCurrSlide(index)}
          ></span>
        );
      })}
    </div>
  );
}
