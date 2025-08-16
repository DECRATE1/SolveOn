import "../styles/RegisterMeetBtn.css";

export default function RegisterMeetBtn({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  const isActive = className.trim() === "--active";

  return (
    <button
      type="submit"
      className={`register-btn ${className}`}
      onClick={onClick}
      aria-label="Записаться на прием"
      disabled={isActive}
      style={{ cursor: isActive ? "not-allowed" : "pointer" }}
    >
      записаться
    </button>
  );
}
