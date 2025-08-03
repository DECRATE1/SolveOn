import "../styles/RegisterMeetBtn.css";

export default function RegisterMeetBtn({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={`register-btn ${className}`}
      onClick={onClick}
      aria-label="Записаться на прием"
    >
      записаться
    </button>
  );
}
