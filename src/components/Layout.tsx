import { useEffect, type JSX } from "react";
import Header from "./Header";
import "../styles/Main.css";
import "../styles/Layout.css";
import PopUpAds from "./PopUpAds";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function Layout({ children }: { children: JSX.Element }) {
  const { isOpen } = useSelector((state: RootState) => state.popup);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="layout">
      <Header />

      <main className={`main ${isOpen ? "layout__main--blurred" : ""}`}>
        {children}
      </main>

      <PopUpAds />

      {isOpen && <div className="layout__overlay"></div>}
    </div>
  );
}
