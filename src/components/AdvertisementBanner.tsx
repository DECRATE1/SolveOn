import "../styles/AdBanner.css";
import Timer from "./Timer";
export default function AdvertisementBanner() {
  return (
    <div className="Ad">
      <span className="bg"></span>
      <div className="container">
        <span>Скидка на Лазерную коррекцию до 60 %</span>
        <Timer></Timer>
        <a href="#">
          <img src="/Group 646.svg"></img>
        </a>
      </div>
    </div>
  );
}
