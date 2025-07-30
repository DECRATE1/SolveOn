import "../styles/MoreServicesBtn.css";

export default function MoreServicesBtn() {
  return (
    <a className="MoreServicesBtn" href="#">
      <span className="text">Больше услуг</span>
      <span className="roundedArrow">
        <img src="/HeroArrow.svg" width={14} height={14}></img>
      </span>
    </a>
  );
}
