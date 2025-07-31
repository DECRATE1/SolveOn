import "../styles/RegisterMeetBtn.css";

export default function RegisterMeetBtn({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={`register-btn ${className}`}
      onClick={onClick}
      aria-label="Записаться на прием"
    >
      записаться
    </div>
  );
}
