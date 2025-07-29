import "../styles/Title.css";
export default function Title() {
  return (
    <div className="Title">
      <div className="textcontainer">
        <span className="maintext">Центр</span>
        <span className="secondtext">лазерной медицины</span>
      </div>

      <img className="icon" src="/eye.svg"></img>
    </div>
  );
}
