import { useEffect, useRef } from "react";
import { ExtraList } from "../data/ExtraList";
import "../styles/ExtraMenu.css";
import HandlerLink from "./HanldlerLink";

export default function ExtraMenu({
  setExtraMenuIsVisible,
  extraBtnRef,
}: {
  setExtraMenuIsVisible: (val: boolean) => void;
  extraBtnRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        extraBtnRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !extraBtnRef.current.contains(e.target as Node)
      ) {
        setExtraMenuIsVisible(false);
        extraBtnRef.current?.focus();
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExtraMenuIsVisible(false);
        extraBtnRef.current?.focus();
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className="extra-menu"
      ref={menuRef}
      role="menu"
      aria-label="Дополнительное меню"
    >
      {ExtraList.map((val, index) => (
        <div className="extra-menu__item" key={index}>
          <HandlerLink
            to={val.href}
            role="menuitem"
            className="extra-menu__link"
            onClick={() => setExtraMenuIsVisible(false)}
          >
            {val.text}
          </HandlerLink>
        </div>
      ))}
    </div>
  );
}
