import "../styles/TopPopularServicesBar.css";
import ReadAboutPopularServise from "./ReadAboutPopularServise";

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
  return (
    <>
      <span className="services-bar__line"></span>
      <div
        className="services-bar"
        style={{
          transform: lowerHeight && itemOpen === index ? "scaleY(0)" : "",
          height: lowerHeight && itemOpen === index ? "0" : "",
        }}
      >
        <span className="services-bar__number">{index + 1}</span>
        <h4 className="services-bar__title">
          <img
            src="/slide1.jpg"
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
