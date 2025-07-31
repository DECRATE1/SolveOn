import { useEffect, useRef } from "react";
import { ExtraList } from "../data/ExtraList";
import "../styles/ExtraMenu.css";

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
      if (menuRef.current && extraBtnRef.current) {
        if (
          !menuRef.current.contains(e.target as Node) &&
          !extraBtnRef.current.contains(e.target as Node)
        ) {
          setExtraMenuIsVisible(false);
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="extra-menu" ref={menuRef}>
      {ExtraList.map((val, index) => (
        <div className="extra-menu__item" key={index}>
          <a href={val.href} className="extra-menu__link">
            {val.text}
          </a>
        </div>
      ))}
    </div>
  );
}
