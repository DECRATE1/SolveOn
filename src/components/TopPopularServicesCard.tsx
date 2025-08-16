import { Services } from "../data/ServicesData";
import { useCutText } from "../hooks";
import "../styles/TopPopularServicesCard.css";
import { useDispatch } from "react-redux";
import { selectItem } from "../store/AppSlice";
import HandlerLink from "./HanldlerLink";
interface TopPopularServicesCardProps {
  lowerHeight: boolean;
  description: string;
  src: string;
  title: string;
  index: number;
}
export default function TopPopularServicesCard({
  lowerHeight,
  description,
  src,
  title,
  index,
}: TopPopularServicesCardProps) {
  const dispatch = useDispatch();
  return (
    <div
      className="service-card"
      style={{
        opacity: lowerHeight ? 1 : 0,
        transition: "opacity 20s ease",
      }}
    >
      <div className="servise-card-table">
        <h3 className="service-card-table__title">{title}</h3>
        <p className="service-card-table__description">
          {useCutText(description, 300)}
        </p>
      </div>
      <h3 className="service-card__title">{title}</h3>

      <div className="servise-card-mobile">
        <div className="service-card-mobile-container">
          <h3 className="service-card-mobile__title">{title}</h3>

          <div className="service-card-mobile__image-container">
            <img
              className="service-card__image"
              src={src}
              width={361}
              height={361}
              alt="Услуги"
            />
            <HandlerLink
              to={`/newPage/${index}`}
              className="service-card__more-link"
            >
              <img
                loading="lazy"
                src="HeroArrow.svg"
                className="service-card__arrow-icon"
                alt="Услуги"
                aria-hidden="true"
                onClick={() => dispatch(selectItem(index))}
              />
              <span className="service-card__more-text">подробнее</span>
            </HandlerLink>
          </div>
        </div>

        <p className="service-card-mobile__description">
          {useCutText(Services[0].description, 200)}
        </p>
      </div>

      <div className="service-card__image-container">
        <img
          loading="lazy"
          className="service-card__image"
          src={src}
          width={361}
          height={361}
        />
        <HandlerLink
          to={`/newPage/${index}`}
          onClick={() => dispatch(selectItem(index))}
          className="service-card__more-link"
        >
          <img
            loading="lazy"
            src="HeroArrow.svg"
            className="service-card__arrow-icon"
            alt="Услуги"
            aria-hidden="true"
          />
          <span className="service-card__more-text">подробнее</span>
        </HandlerLink>
      </div>
      <p className="service-card__description">
        {useCutText(description, 200)}
      </p>
    </div>
  );
}
