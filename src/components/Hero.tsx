import { HeroAdditional } from "../data/HeroAdditional";
import "../styles/Hero.css";
import Slider from "./Slider";

export default function Hero() {
  return (
    <div className="hero">
      <Slider />

      <div className="hero__additional-links">
        {HeroAdditional.map((val, index) => (
          <a href={val.href} key={index} className="hero__additional-link">
            {val.text}
          </a>
        ))}
      </div>
    </div>
  );
}
