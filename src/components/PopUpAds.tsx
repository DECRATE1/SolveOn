import { useDispatch, useSelector } from "react-redux";
import "../styles/PopUpAds.css";
import type { RootState } from "../store/store";
import { closePopUp } from "../store/PopUpSlice";

export default function PopUpAds() {
  const { isOpen } = useSelector((state: RootState) => state.popup);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="popup">
      <button
        className="popup__close-btn"
        onClick={() => dispatch(closePopUp())}
        aria-label="Close popup"
      >
        <img
          src="/vectorized.svg"
          width={64}
          height={64}
          alt="Close icon"
          className="popup__close-icon"
        />
      </button>

      <div className="popup__content">
        <h4 className="popup__title">
          Готовы доверить своё здоровье профессионалу?
        </h4>
        <h5 className="popup__subtitle">
          Не откладывайте заботу о зрении — запишитесь на приём к врачу уже
          сегодня.
        </h5>
      </div>

      <div className="popup__form">
        <div className="popup__input-group">
          <input type="tel" placeholder="Телефон" className="popup__input" />
          <input type="text" placeholder="Имя" className="popup__input" />
        </div>

        <div className="popup__privacy">
          <label className="popup__privacy-label">
            <input type="checkbox" className="popup__checkbox" />
            <span className="popup__privacy-text">
              Я даю согласие на обработку{" "}
              <a href="#" className="popup__privacy-link">
                персональных данных
              </a>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
