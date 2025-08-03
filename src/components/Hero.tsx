import { lazy } from "react";
import { HeroAdditional } from "../data/HeroAdditional";
import "../styles/Hero.css";
const Slider = lazy(() => import("./Slider"));

export default function Hero() {
  return (
    <div className="hero">
      <Slider />

      <div className="hero__additional-links">
        {HeroAdditional.map((val, index) => (
          <a href={val.href} key={index} className="hero__additional-a">
            {val.text}
          </a>
        ))}
      </div>
    </div>
  );
}
