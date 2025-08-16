import { useDispatch, useSelector } from "react-redux";
import "../styles/PopUpAds.css";
import type { RootState } from "../store/store";
import { closePopUp } from "../store/PopUpSlice";
import RegisterMeetBtn from "./RegisterMeetBtn";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { setState } from "../store/FetchSlice";
import HandlerLink from "./HanldlerLink";

interface SubmitData {
  phone: string;
  name: string;
  consent: boolean;
}

export default function PopUpAds() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.popup);
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [className, setClassName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<SubmitData>();

  useEffect(() => {
    if (isOpen) {
      clearErrors();
      setValue("name", "");
      setValue("phone", "");
    }
  }, [isOpen]);

  const onSubmit = async (data: SubmitData) => {
    try {
      dispatch(setState("send"));
      setClassName("--active");
      const response = await fetch("http://localhost:3000/api/form/postForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Ошибка отправки");

      dispatch(setState("success"));
      setTimeout(() => dispatch(setState("idle")), 2000);
    } catch (err) {
      console.error("Ошибка:", err);
      dispatch(setState("error"));
      setTimeout(() => dispatch(setState("idle")), 2000);
    }
    setClassName("");
  };

  if (!isOpen) return null;

  return (
    <div className="popup">
      <button
        className="popup__close-btn"
        onClick={() => dispatch(closePopUp())}
        aria-label="Закрыть"
      >
        <img
          loading="lazy"
          src="/vectorized.svg"
          width={64}
          height={64}
          alt="Закрыть"
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

      <form
        className="popup__form"
        onSubmit={handleSubmit(onSubmit, () => {
          if (errors.phone) {
            setPhoneValue("");
          }

          if (errors.name) {
            setNameValue("");
          }
        })}
      >
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
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              placeholder={errors.phone?.message || "Телефон"}
              className="popup__input"
            />
          </div>

          <div className="input-item">
            <input
              type="text"
              {...register("name", { required: "Имя обязательно" })}
              placeholder={errors.name?.message || "Имя"}
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              className="popup__input"
            />
          </div>
        </div>

        <div className="popup__privacy">
          <label className="popup__privacy-label">
            <input
              type="checkbox"
              {...register("consent", { required: "Необходимо согласие" })}
              className="popup__checkbox"
            />
            <span className="popup__privacy-text">
              Я даю согласие на обработку{" "}
              <HandlerLink to="#" className="popup__privacy-Link">
                персональных данных
              </HandlerLink>
            </span>
          </label>
          {errors.consent && (
            <p className="popup__error">{errors.consent.message}</p>
          )}
        </div>
        <div className="register__btn">
          <RegisterMeetBtn className={className}></RegisterMeetBtn>{" "}
        </div>
      </form>
    </div>
  );
}
