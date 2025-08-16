import { useRef, useState } from "react";
import { headerList } from "../data/HeaderList";
import ExtraMenu from "./ExtraMenu";
import RegisterMeetBtn from "./RegisterMeetBtn";
import ProfileBtn from "./ProfileBtn";
import { useDispatch } from "react-redux";
import { openPopUp } from "../store/PopUpSlice";
import "../styles/Navigation.css";
import { IoMenuSharp } from "react-icons/io5";
import HandlerLink from "./HanldlerLink";

export default function Navigation({
  setMobileMenuIsOpen,
}: {
  setMobileMenuIsOpen: (val: boolean) => void;
}) {
  const dispatch = useDispatch();
  const [isExtraMenuVisible, setIsExtraMenuVisible] = useState(false);
  const extraBtnRef = useRef<HTMLDivElement>(null);

  const renderNavItem = (
    item: { text: string; href: string },
    index: number
  ) => {
    if (index === headerList.length - 1) {
      return (
        <div className="nav__extra">
          <div
            className="nav__extra-btn"
            onClick={() => setIsExtraMenuVisible(!isExtraMenuVisible)}
            ref={extraBtnRef}
            aria-expanded={isExtraMenuVisible}
            aria-haspopup="true"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsExtraMenuVisible(!isExtraMenuVisible);
              }
            }}
          >
            {item.text}
          </div>

          {isExtraMenuVisible && (
            <ExtraMenu
              setExtraMenuIsVisible={setIsExtraMenuVisible}
              extraBtnRef={extraBtnRef}
            />
          )}
        </div>
      );
    }
    return (
      <HandlerLink to={item.href} className="nav__link">
        {item.text}
      </HandlerLink>
    );
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        {headerList.map((item, index) => (
          <li className="nav__item" key={index}>
            {renderNavItem(item, index)}
          </li>
        ))}
      </ul>

      <div className="nav__actions">
        <RegisterMeetBtn onClick={() => dispatch(openPopUp())} />
        <ProfileBtn />
        <IoMenuSharp
          className="mobile-menu__btn"
          onClick={() => setMobileMenuIsOpen(true)}
        />
      </div>
    </nav>
  );
}
