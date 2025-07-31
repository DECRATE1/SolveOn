import { AdvertisementList, AdvertisementPraice } from "../data/Advertisement";
import "../styles/AdvertisementUnderHeader.css";

export default function AdvertisementUnderHeader() {
  return (
    <div className="ad-under-header">
      <ul className="ad-under-header__list">
        {AdvertisementList.map((val, index) => (
          <li className="ad-under-header__list-item" key={index}>
            <div className="ad-under-header__item-container">
              <span className="ad-under-header__text">{val}</span>
              <div className="ad-under-header__dot"></div>
            </div>
          </li>
        ))}
      </ul>

      <div className="ad-under-header__prices">
        {AdvertisementPraice.map((val, index) => (
          <span
            className={`ad-under-header__price ${
              index > 0 ? "ad-under-header__price--highlighted" : ""
            }`}
            key={index}
          >
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}
