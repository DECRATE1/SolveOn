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
    <button
      type="button"
      className="expand-btn"
      onClick={handleClick}
      aria-label="Подробнее о сервисе"
    >
      <span className="expand-btn__dot"></span>
      <span className="expand-btn__dot"></span>
      <span className="expand-btn__dot"></span>
    </button>
  );
}
