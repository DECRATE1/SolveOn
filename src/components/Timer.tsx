import { useEffect, useState } from "react";
import "../styles/Timer.css";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }

        if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        }

        if (prev.hours > 0) {
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }

        if (prev.days > 0) {
          return {
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="timer">
      <div className="timer__item timer__item--days">
        <span className="timer__value">{timeLeft.days} дня </span>
      </div>

      <div className="timer__item timer__item--hours">
        <span className="timer__value">{formatTime(timeLeft.hours)}</span>
      </div>

      <div className="timer__separator">:</div>

      <div className="timer__item timer__item--minutes">
        <span className="timer__value">{formatTime(timeLeft.minutes)}</span>
      </div>

      <div className="timer__separator">:</div>

      <div className="timer__item timer__item--seconds">
        <span className="timer__value">{formatTime(timeLeft.seconds)}</span>
      </div>
    </div>
  );
}
