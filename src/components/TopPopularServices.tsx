import "../styles/TopPopularServices.css";
import { Services } from "../data/ServicesData";
import TopPopularServiceItem from "./TomPopularServiceItem";

export default function TopPopularServices() {
  return (
    <div className="TopPopularServices">
      {Services.map((service, index) => {
        return (
          <TopPopularServiceItem
            title={service.title}
            index={index}
            description={service.description}
          />
        );
      })}
    </div>
  );
}
