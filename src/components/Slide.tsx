export default function Slide({
  src,
  transform,
  sign,
  slideToShowLink,
  index,
  alt,
}: {
  src: string;
  alt: string;
  transform: number;
  sign: string;
  slideToShowLink?: number;
  index: number;
}) {
  const isActive = slideToShowLink! - 1 === index;

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
      ></div>

      <a
        className={`slide__link ${!isActive ? "slide__link--hidden" : ""}`}
        href={isActive ? "#" : undefined}
      >
        <img className="slide__arrow" src="/HeroArrow.svg" alt="Arrow icon" />
        <span className="slide__link-text">Подробнее</span>
      </a>
    </div>
  );
}
