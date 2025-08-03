import { lazy } from "react";
import "../styles/Services.css";
const MoreServicesBtn = lazy(() => import("./MoreServicesBtn"));

export default function Services() {
  return (
    <section className="services">
      <div className="services__header">
        <span className="services__indicator"></span>
        <span className="services-mobile__title">НАШИ УСЛУГИ</span>
        <span className="services__title">ПОПУЛЯРНЫЕ УСЛУГИ</span>
      </div>
      <MoreServicesBtn />
    </section>
  );
}
