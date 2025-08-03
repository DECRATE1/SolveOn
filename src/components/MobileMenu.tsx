import { useDispatch } from "react-redux";
import { ExtraList } from "../data/ExtraList";
import { headerList } from "../data/HeaderList";
import "../styles/MobileMenu.css";
import { openPopUp } from "../store/PopUpSlice";

export default function MobileMenu({
  setMobileMenuIsOpen,
}: {
  setMobileMenuIsOpen: (val: boolean) => void;
}) {
  const dispatch = useDispatch();
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header">
        <p className="mobile-menu-header__text">Центр Лазерной Медецины</p>
        <img
          loading="lazy"
          src="/vectorized.svg"
          alt="Arrow"
          className="mobile-menu-icon"
          onClick={() => setMobileMenuIsOpen(false)}
        ></img>
      </div>

      <div className="mobile-menu-container">
        {headerList.map((item, index) => {
          return !item.haveMenu ? (
            <a href={item.href} key={index} className="mobile-menu__link">
              {item.text}
            </a>
          ) : (
            <>
              <span className="mobile-menu__link">{item.text}</span>
              <div className="mobile-menu-extra">
                {ExtraList.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="mobile-menu-extra__link"
                    >
                      {item.text}
                    </a>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>

      <div className="mobile-menu-actions">
        <div className="mobile-menu-extra-account__btn">личный кабинет</div>
        <div
          className="mobile-menu-extra-meet__btn"
          onClick={() => dispatch(openPopUp())}
        >
          записаться
        </div>
      </div>
    </div>
  );
}
