import { HeroAdditional } from "../data/HeroAdditional";
import "../styles/Hero.css";
import Slider from "./Slider";
export default function Hero() {
  return (
    <div className="Hero">
      <Slider></Slider>

      <div className="additional">
        {HeroAdditional.map((val, index) => {
          return (
            <a href={val.href} key={index}>
              {val.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
