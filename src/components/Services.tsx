import "../styles/Services.css";
import MoreServicesBtn from "./MoreServicesBtn";

export default function Services() {
  return (
    <section className="services">
      <div className="services__header">
        <span className="services__indicator"></span>
        <span className="services__title">ПОПУЛЯРНЫЕ УСЛУГИ</span>
      </div>
      <MoreServicesBtn />
    </section>
  );
}
