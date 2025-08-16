import { lazy, useState } from "react";
import "../styles/TopPopularServiceItem.css";
import TopPopularServicesCard from "./TopPopularServicesCard";

const TopPopularServicesBar = lazy(() => import("./TopPopularServicesBar"));

interface TopPopularServiceItemProps {
  title: string;
  description: string;
  index: number;
  itemOpen: number | null;
  setItemOpen: (val: number) => void;
  src: string;
}

export default function TopPopularServiceItem({
  title,
  description,
  index,
  itemOpen,
  src,
  setItemOpen,
}: TopPopularServiceItemProps) {
  const [lowerHeight, setLowerHeight] = useState(false);

  const isExpanded = lowerHeight && itemOpen === index;

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

      {isExpanded && (
        <TopPopularServicesCard
          lowerHeight={lowerHeight}
          description={description}
          src={src}
          index={index}
          title={title}
        />
      )}
    </div>
  );
}
