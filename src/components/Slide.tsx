import "../styles/Slide.css";
export default function Slide({
  src,
  alt,
  transform,
  sign,
  slideToShowLink,
  index,
}: {
  src: string;
  alt: string;
  transform: number;
  sign: string;
  slideToShowLink?: number;
  index: number;
}) {
  return (
    <div
      className="Slide"
      style={{
        transform: `translateX(${sign}${transform}%)`,
        visibility: transform === 0 ? "visible" : "hidden",
      }}
    >
      <img className="slideImage" src={`/${src}`} alt={alt}></img>
      {slideToShowLink! - 1 === index ? (
        <a className="slideAdditional" href="#">
          <img className="bigArrowHero" src="/HeroArrow.svg"></img>
          <span>Подробнее</span>
        </a>
      ) : (
        <a
          className="slideAdditional"
          style={{
            opacity: 0,
            transition: " opacity 500ms ease-in-out",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <img className="bigArrowHero" src="/HeroArrow.svg"></img>
          <span>Подробнее</span>
        </a>
      )}
    </div>
  );
}
