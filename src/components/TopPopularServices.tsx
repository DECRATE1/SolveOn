import { Services } from "../data/ServicesData";
import { lazy, useState } from "react";
import "../styles/TopPopularServices.css";

const TopPopularServiceItem = lazy(() => import("./TopPopularServiceItem"));

export default function TopPopularServices() {
  const [itemOpen, setItemOpen] = useState<null | number>(null);

  return (
    <div className="popular-services">
      {Services.map((service, index) => (
        <TopPopularServiceItem
          src={service.src}
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
