import { lazy, useRef, useState } from "react";
import { headerList } from "../data/HeaderList";
const ExtraMenu = lazy(() => import("./ExtraMenu"));
const RegisterMeetBtn = lazy(() => import("./RegisterMeetBtn"));
const ProfileBtn = lazy(() => import("./ProfileBtn"));
import { useDispatch } from "react-redux";
import { openPopUp } from "../store/PopUpSlice";
import "../styles/Navigation.css";
import { IoMenuSharp } from "react-icons/io5";
export default function Navigation({
  setMobileMenuIsOpen,
}: {
  setMobileMenuIsOpen: (val: boolean) => void;
}) {
  const dispatch = useDispatch();
  const [isExtraMenuVisible, setIsExtraMenuVisible] = useState(false);
  const extraBtnRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {headerList.map((item, index) => (
          <li className="nav__item" key={index}>
            {index === headerList.length - 1 ? (
              <div className="nav__extra">
                <div
                  className="nav__extra-btn"
                  onClick={() => setIsExtraMenuVisible(!isExtraMenuVisible)}
                  ref={extraBtnRef}
                  aria-expanded={isExtraMenuVisible}
                  aria-haspopup="true"
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
            ) : (
              <a href={item.href} className="nav__link">
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="nav__actions">
        <RegisterMeetBtn
          className="nav__register-btn"
          onClick={() => dispatch(openPopUp())}
        />
        <ProfileBtn />
        <IoMenuSharp
          className="mobile-menu__btn"
          onClick={() => setMobileMenuIsOpen(true)}
        ></IoMenuSharp>
      </div>
    </nav>
  );
}
