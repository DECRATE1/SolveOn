import { AdvertisementList, AdvertisementPraice } from "../data/Advertisement";
import "../styles/AdvertisementUnderHeader.css";

export default function AdvertisementUnderHeader() {
  return (
    <section
      className="ad-under-header"
      role="region"
      aria-label="Преимущества и цены"
    >
      <ul className="ad-under-header__list">
        {AdvertisementList.map((val, index) => (
          <li
            className="ad-under-header__list-item"
            key={index}
            aria-label={`Преимущество: ${val}`}
          >
            <div className="ad-under-header__item-container">
              <span className="ad-under-header__text">{val}</span>
              <span className="ad-under-header__dot" aria-hidden="true"></span>
            </div>
          </li>
        ))}
      </ul>

      <div className="ad-under-header__prices">
        {AdvertisementPraice.map((val, index) => (
          <span
            key={index}
            className={
              index > 0
                ? "ad-under-header__price ad-under-header__price--highlighted"
                : "ad-under-header__price"
            }
          >
            {val}
          </span>
        ))}
      </div>
    </section>
  );
}
