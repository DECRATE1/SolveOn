import "../styles/ProfileBtn.css";

export default function ProfileBtn() {
  return (
    <div className="profile-btn">
      <img
        loading="lazy"
        src="/profile.svg"
        width={44}
        height={44}
        className="profile-btn__icon"
        alt="Profile icon"
      />
    </div>
  );
}
