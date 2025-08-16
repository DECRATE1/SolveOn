import "../styles/ProfileBtn.css";

export default function ProfileBtn() {
  return (
    <button type="button" className="profile-btn" aria-label="Личный кабинет">
      <img
        loading="lazy"
        src="profile.svg"
        width={44}
        height={44}
        className="profile-btn__icon"
        alt=""
      />
    </button>
  );
}
