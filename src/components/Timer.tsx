import { useEffect, useState } from "react";
import "../styles/Timer.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return prev;
        }

        const newTotal = totalSeconds - 1;

        return {
          days: Math.floor(newTotal / 86400),
          hours: Math.floor((newTotal % 86400) / 3600),
          minutes: Math.floor((newTotal % 3600) / 60),
          seconds: newTotal % 60,
        };
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
