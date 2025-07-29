import { useEffect, useRef } from "react";
import { ExtraList } from "../data/ExtraList";
import "../styles/ExtraMenu.css";
export default function ExtraMenu({
  setExtraMenuIsHidden,
  extraBtnRef,
}: {
  setExtraMenuIsHidden: (val: boolean) => void;
  extraBtnRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window) {
      window.addEventListener("click", (e) => {
        if (menuRef.current && extraBtnRef.current) {
          if (
            !menuRef.current.contains(e.target as HTMLDivElement) &&
            !extraBtnRef.current.contains(e.target as HTMLDivElement)
          ) {
            setExtraMenuIsHidden(true);
          }
        }
      });
    }
  }, []);

  return (
    <div className="ExtraMenu" ref={menuRef}>
      {ExtraList.map((val, index) => {
        return (
          <div
            style={{ width: "100%", height: "36px", paddingBlock: "8px" }}
            key={index}
          >
            <a href={val.href} key={index}>
              {val.text}
            </a>
          </div>
        );
      })}
    </div>
  );
}
