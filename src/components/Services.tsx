import "../styles/Services.css";
import MoreServicesBtn from "./MoreServicesBtn";
export default function Services() {
  return (
    <div className="Services">
      <div className="popularServices">
        <span
          style={{
            display: "flex",
            width: "15px",
            height: "15px",
            borderRadius: "60px",
            backgroundColor: "black",
          }}
        ></span>
        <span>ПОПУЛЯРНЫЕ УСЛУГИ</span>
      </div>

      <MoreServicesBtn></MoreServicesBtn>
    </div>
  );
}
