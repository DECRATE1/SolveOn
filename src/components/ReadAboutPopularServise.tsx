import "../styles/ReadAboutPopularServise.css";

export default function ReadAboutPopularServise({
  setLowerHeight,
  setItemOpen,
  index,
}: {
  setLowerHeight: (val: boolean) => void;
  setItemOpen: (val: number) => void;
  index: number;
}) {
  const handleClick = () => {
    setLowerHeight(true);
    setItemOpen(index);
  };

  return (
    <div className="expand-btn" onClick={handleClick}>
      <span className="expand-btn__dot"></span>
      <span className="expand-btn__dot"></span>
      <span className="expand-btn__dot"></span>
    </div>
  );
}
