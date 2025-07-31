import "../styles/ProfileBtn.css";

export default function ProfileBtn() {
  return (
    <a className="profile-btn">
      <img
        src="/profile.svg"
        width={44}
        height={44}
        className="profile-btn__icon"
        alt="Profile icon"
      />
    </a>
  );
}
