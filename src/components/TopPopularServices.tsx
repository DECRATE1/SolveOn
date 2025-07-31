import { Services } from "../data/ServicesData";
import { useState } from "react";
import "../styles/TopPopularServices.css";
import TopPopularServiceItem from "./TomPopularServiceItem";

export default function TopPopularServices() {
  const [itemOpen, setItemOpen] = useState<null | number>(null);

  return (
    <div className="popular-services">
      {Services.map((service, index) => (
        <TopPopularServiceItem
          key={index}
          title={service.title}
          description={service.description}
          index={index}
          itemOpen={itemOpen}
          setItemOpen={setItemOpen}
        />
      ))}
    </div>
  );
}
