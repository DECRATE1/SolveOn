import "../styles/Title.css";

export default function Title() {
  return (
    <div className="title">
      <div className="title__text-container">
        <h1 className="title__main-text">Центр</h1>
        <h2 className="title__secondary-text">лазерной медицины</h2>
      </div>
      <img
        className="title__icon"
        src="/eye.svg"
        alt="Иконка глаза"
        loading="lazy"
      />
    </div>
  );
}
