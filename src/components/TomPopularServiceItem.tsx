import { useState } from "react";
import TopPopularServicesBar from "./TopPopularServicesBar";
import TopPopularServicesCard from "./TopPopularServicesCard";
import "../styles/TopPopularServiceItem.css";

interface TopPopularServiceItemProps {
  title: string;
  description: string;
  index: number;
  itemOpen: number | null;
  setItemOpen: (val: number) => void;
}

export default function TopPopularServiceItem({
  title,
  description,
  index,
  itemOpen,
  setItemOpen,
}: TopPopularServiceItemProps) {
  const [lowerHeight, setLowerHeight] = useState(false);

  return (
    <div className="popular-service-item">
      <TopPopularServicesBar
        title={title}
        description={description}
        index={index}
        lowerHeight={lowerHeight}
        setLowerHeight={setLowerHeight}
        setItemOpen={setItemOpen}
        itemOpen={itemOpen}
      />
      {lowerHeight && itemOpen === index && (
        <TopPopularServicesCard lowerHeight={lowerHeight} />
      )}
    </div>
  );
}
