import { useDispatch, useSelector } from "react-redux";
import "../styles/PopUpAds.css";
import type { RootState } from "../store/store";
import { closePopUp } from "../store/PopUpSlice";
import RegisterMeetBtn from "./RegisterMeetBtn";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function PopUpAds() {
  const [placeholderPhone, setPlaceholderPhone] = useState("Телефон");
  const [placeholderName, setPlaceholderName] = useState("Имя");

  interface SubmitData {
    phone: string;
    name: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubmitData>();

  useEffect(() => {
    if (errors.phone) {
      setPlaceholderPhone(errors.phone!.message!);
    }
  }, [errors.phone]);

  useEffect(() => {
    if (errors.name) {
      setPlaceholderName(errors.name!.message!);
    }
  }, [errors.name]);

  const onSubmit = async (data: SubmitData) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/form/postForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }
    } catch (err) {
      console.error("Ошибка: ", err);
    }
  };
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
          loading="lazy"
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

      <form className="popup__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="popup__input-group">
          <div className="input-item">
            <input
              type="tel"
              {...register("phone", {
                required: "Телефон обязателен",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Неверный формат телефона",
                },
              })}
              placeholder={placeholderPhone}
              className="popup__input"
            />
          </div>

          <div className="input-item">
            <input
              type="text"
              {...register("name", { required: "Имя обязательно" })}
              placeholder={placeholderName}
              className="popup__input"
            />
          </div>
        </div>

        <div className="popup__privacy">
          <label className="popup__privacy-label">
            <input type="checkbox" className="popup__checkbox" />
            <span className="popup__privacy-text">
              Я даю согласие на обработку{" "}
              <a href="#" className="popup__privacy-a">
                персональных данных
              </a>
            </span>
          </label>
        </div>
        <div className="register__btn">
          <RegisterMeetBtn onClick={() => console.log(1)}></RegisterMeetBtn>
        </div>
      </form>
    </div>
  );
}
