import { AdvertisementList, AdvertisementPraice } from "../data/Advertisement";
import "../styles/AdvertisementUnderHeader.css";
export default function AdvertisementUnderHeader() {
  return (
    <div className="AdvertisementUnderHeader">
      <ul className="advertisementList">
        {AdvertisementList.map((val, index) => {
          return (
            <div className="advertisementListContainer">
              <span key={index}>{val}</span>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "black",
                  borderRadius: "60px",
                }}
              ></div>
            </div>
          );
        })}
      </ul>

      <div className="advertisementPraice">
        {AdvertisementPraice.map((val, index) => {
          return (
            <span
              key={index}
              style={{
                fontWeight: index > 0 ? 700 : 400,
                color: index > 0 ? "rgba(6, 6, 6, 0.5)" : "black",
                fontStyle: index > 0 ? "Regular" : "large",
              }}
            >
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
}
