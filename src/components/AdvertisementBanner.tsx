import { lazy } from "react";
import "../styles/AdBanner.css";
const Timer = lazy(() => import("./Timer"));

export default function AdvertisementBanner() {
  return (
    <div className="ad-banner">
      <span className="ad-banner__bg"></span>
      <div className="ad-banner__container">
        <span className="ad-banner__text">
          Скидка на Лазерную коррекцию до 60 %
        </span>
        <Timer />
        <a href="/newPage?hello=Никита" className="ad-banner__link">
          <img
            loading="lazy"
            src="/Group 646.svg"
            className="ad-banner__icon"
            alt="Акция"
          />
        </a>
      </div>
    </div>
  );
}
