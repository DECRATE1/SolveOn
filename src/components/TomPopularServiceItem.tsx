import { useState } from "react";
import TopPopularServicesBar from "./TopPopularServicesBar";
import TopPopularServicesCard from "./TopPopularServicesCard";
import "../styles/TopPopularServiceItem.css";
export default function TopPopularServiceItem({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const [lowerHeight, setLowerHeight] = useState(false);
  return (
    <div className="TopPopularServiceItem">
      <TopPopularServicesBar
        title={title}
        description={description}
        index={index}
        lowerHeight={lowerHeight}
        setLowerHeight={setLowerHeight}
      ></TopPopularServicesBar>
      {lowerHeight && (
        <TopPopularServicesCard
          lowerHeight={lowerHeight}
        ></TopPopularServicesCard>
      )}
    </div>
  );
}
