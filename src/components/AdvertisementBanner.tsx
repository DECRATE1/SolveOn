import { lazy, Suspense } from "react";
import "../styles/AdBanner.css";
import HandlerLink from "./HanldlerLink";

const Timer = lazy(() => import("./Timer"));

export default function AdvertisementBanner() {
  return (
    <section
      className="ad-banner"
      role="region"
      aria-label="Рекламный баннер со скидкой"
    >
      <span className="ad-banner__bg" aria-hidden="true"></span>

      <div className="ad-banner__container">
        <span className="ad-banner__text">
          Скидка на Лазерную коррекцию до 60%
        </span>

        <Suspense fallback={<span className="ad-banner__loading">...</span>}>
          <Timer />
        </Suspense>

        <HandlerLink
          to="/newPage/1"
          className="ad-banner__link"
          aria-label="Подробнее об акции"
        >
          <img
            loading="lazy"
            width="32"
            height="32"
            src="Group-646.svg"
            className="ad-banner__icon"
            alt="Стрелка"
          />
        </HandlerLink>
      </div>
    </section>
  );
}
