import { lazy } from "react";
import "../styles/TopPopularServicesBar.css";

const ReadAboutPopularServise = lazy(() => import("./ReadAboutPopularServise"));

interface TopPopularServicesBarProps {
  title: string;
  description: string;
  index: number;
  lowerHeight: boolean;
  setLowerHeight: (val: boolean) => void;
  itemOpen: number | null;
  setItemOpen: (val: number) => void;
}

export default function TopPopularServicesBar({
  title,
  index,
  lowerHeight,
  setLowerHeight,
  itemOpen,
  setItemOpen,
}: TopPopularServicesBarProps) {
  const isCollapsed = lowerHeight && itemOpen === index;

  return (
    <>
      <span className="services-bar__line"></span>
      <div
        className="services-bar"
        style={{
          transform: isCollapsed ? "scaleY(0)" : undefined,
          height: isCollapsed ? "0" : undefined,
        }}
      >
        <span className="services-bar__number">{index + 1}</span>
        <h4 className="services-bar__title">
          <img
            loading="lazy"
            src="slide1.jpg"
            width={92}
            height={92}
            alt=""
            className="services-bar__image"
          />
          <span className="services-bar__title-text">{title}</span>
        </h4>

        <ReadAboutPopularServise
          setLowerHeight={setLowerHeight}
          setItemOpen={setItemOpen}
          index={index}
        />
      </div>
    </>
  );
}
