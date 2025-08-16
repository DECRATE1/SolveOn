import HandlerLink from "./HanldlerLink";

interface SlideProps {
  src: string;
  alt: string;
  transform: number;
  sign: string;
  slideToShowLink?: number;
  index: number;
}

export default function Slide({
  src,
  alt,
  transform,
  sign,
  slideToShowLink,
  index,
}: SlideProps) {
  const isActive =
    slideToShowLink !== undefined && slideToShowLink - 1 === index;

  return (
    <div
      className="slide"
      style={{
        transform: `translateX(${sign}${transform}%)`,
        visibility: transform === 0 ? "visible" : "hidden",
      }}
    >
      <div
        className="slide__image"
        style={{ backgroundImage: `url(/${src})` }}
        aria-label={alt}
      />

      <HandlerLink
        className={`slide__link ${isActive ? "" : "slide__link--hidden"}`}
        to={isActive ? "#" : ""}
      >
        <img
          className="slide__arrow"
          loading="lazy"
          src="HeroArrow.svg"
          alt="Arrow icon"
        />
        <span className="slide__link-text">Подробнее</span>
      </HandlerLink>
    </div>
  );
}
