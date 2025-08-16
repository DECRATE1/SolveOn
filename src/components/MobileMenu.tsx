import { useDispatch } from "react-redux";
import { ExtraList } from "../data/ExtraList";
import { headerList } from "../data/HeaderList";
import "../styles/MobileMenu.css";
import { openPopUp } from "../store/PopUpSlice";
import { Fragment } from "react";
import HandlerLink from "./HanldlerLink";

export default function MobileMenu({
  setMobileMenuIsOpen,
}: {
  setMobileMenuIsOpen: (val: boolean) => void;
}) {
  const dispatch = useDispatch();

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header">
        <p className="mobile-menu-header__text">Центр Лазерной Медицины</p>
        <img
          loading="lazy"
          src="vectorized.svg"
          alt="Закрыть меню"
          className="mobile-menu-icon"
          onClick={() => setMobileMenuIsOpen(false)}
        />
      </div>

      <div className="mobile-menu-container">
        {headerList.map((item, index) =>
          !item.haveMenu ? (
            <HandlerLink
              to={item.href}
              key={index}
              className="mobile-menu__link"
            >
              {item.text}
            </HandlerLink>
          ) : (
            <Fragment key={index}>
              <span className="mobile-menu__link">{item.text}</span>
              <div className="mobile-menu-extra">
                {ExtraList.map((extra, i) => (
                  <HandlerLink
                    key={i}
                    to={extra.href}
                    className="mobile-menu-extra__link"
                  >
                    {extra.text}
                  </HandlerLink>
                ))}
              </div>
            </Fragment>
          )
        )}
      </div>

      <div className="mobile-menu-actions">
        <button type="button" className="mobile-menu-extra-account__btn">
          личный кабинет
        </button>
        <button
          style={{ border: "none" }}
          type="button"
          className="mobile-menu-extra-meet__btn"
          onClick={() => dispatch(openPopUp())}
        >
          записаться
        </button>
      </div>
    </div>
  );
}
