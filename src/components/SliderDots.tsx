import { SliderData } from "../data/SliderData";
import "../styles/SliderDots.css";
export default function SliderDots({
  indexOfActiveSlide,
  setCurrSlide,
}: {
  indexOfActiveSlide: number;
  setCurrSlide: (val: number) => void;
}) {
  return (
    <div className="SliderDots">
      {SliderData.map((_, index) => {
        return (
          <span
            key={index}
            style={{
              borderRadius: "60px",
              border: "1px solid",
              borderColor: "black",
              width: "12px",
              height: "12px",
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
