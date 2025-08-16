import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "../store/store";

export default function SecondPage() {
  const selectedItem = useSelector(
    (state: RootState) => state.app.selectedItem
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>{`welcome back ${selectedItem}`}</span>

      <Link to={"/"}>Назад</Link>
    </div>
  );
}
