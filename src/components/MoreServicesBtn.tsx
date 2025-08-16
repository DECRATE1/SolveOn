import "../styles/MoreServicesBtn.css";
import HandlerLink from "./HanldlerLink";

export default function MoreServicesBtn() {
  return (
    <HandlerLink className="more-services-btn" to="#">
      <span className="more-services-btn__text">Больше услуг</span>
      <span className="more-services-btn__arrow">
        <img
          loading="lazy"
          src="HeroArrow.svg"
          width={14}
          height={14}
          alt=""
          aria-hidden="true"
          className="more-services-btn__arrow-icon"
        />
      </span>
    </HandlerLink>
  );
}
