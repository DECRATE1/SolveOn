import "../styles/TopPopularServicesBar.css";
import ReadAboutPopularServise from "./ReadAboutPopularServise";

export default function TopPopularServicesBar({
  title,
  description,
  index,
  lowerHeight,
  setLowerHeight,
}: {
  title: string;
  description: string;
  index: number;
  lowerHeight: boolean;
  setLowerHeight: (val: boolean) => void;
}) {
  return (
    <>
      <span className="line"></span>
      <div
        className="TopPopularServicesBar"
        style={{
          transform: lowerHeight ? "scaleY(0)" : "",
          height: lowerHeight ? "0" : "",
        }}
      >
        <span className="roundedNum">{index + 1}</span>
        <div className="serviseTitle">
          <img src="/slide1.jpg" width={92} height={92}></img>
          <span>{title}</span>
        </div>

        <ReadAboutPopularServise
          setLowerHeight={setLowerHeight}
        ></ReadAboutPopularServise>
      </div>
    </>
  );
}
