import "../styles/MoreServicesBtn.css";

export default function MoreServicesBtn() {
  return (
    <a className="more-services-btn" href="#">
      <span className="more-services-btn__text">Больше услуг</span>
      <span className="more-services-btn__arrow">
        <img
          src="/HeroArrow.svg"
          width={14}
          height={14}
          alt=""
          className="more-services-btn__arrow-icon"
        />
      </span>
    </a>
  );
}
