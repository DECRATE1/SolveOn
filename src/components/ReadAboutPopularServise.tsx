import "../styles/ReadAboutPopularServise.css";
export default function ReadAboutPopularServise({
  setLowerHeight,
}: {
  setLowerHeight: (val: boolean) => void;
}) {
  return (
    <div
      className="ReadAboutPopularServise"
      onClick={() => {
        setLowerHeight(true);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
