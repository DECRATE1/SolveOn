import "../styles/Navigation.css";
import { headerList } from "../data/HeaderList";
import { useRef, useState } from "react";
import ExtraMenu from "./ExtraMenu";
import RegisterMeetBtn from "./RegisterMeetBtn";
import ProfileBtn from "./ProfileBtn";

export default function Navigation() {
  const [extraMenuIsHidden, setExtraMenuIsHidden] = useState(true);
  const extraBtn = useRef<HTMLSpanElement>(null);
  return (
    <div className="Navigation">
      <ul>
        {headerList.map((val, index) => {
          return index === headerList.length - 1 ? (
            <div className="extra" key={index}>
              <span
                onClick={() => setExtraMenuIsHidden(!extraMenuIsHidden)}
                ref={extraBtn}
              >
                {val.text}
              </span>
              {!extraMenuIsHidden && (
                <ExtraMenu
                  setExtraMenuIsHidden={setExtraMenuIsHidden}
                  extraBtnRef={extraBtn}
                ></ExtraMenu>
              )}
            </div>
          ) : (
            <a href={val.href} key={index}>
              {val.text}
            </a>
          );
        })}
      </ul>
      <div className="registerContainer">
        <RegisterMeetBtn></RegisterMeetBtn>
        <ProfileBtn></ProfileBtn>
      </div>
    </div>
  );
}
