import { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/Main.css";
import "../styles/Layout.css";
import PopUpAds from "./PopUpAds";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Outlet } from "react-router";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

export default function Layout() {
  const { isOpen } = useSelector((state: RootState) => state.popup);
  const { status } = useSelector((state: RootState) => state.fetch);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="layout">
      <Header />
      <Navigation setMobileMenuIsOpen={setMobileMenuIsOpen} />

      <main className={`main ${isOpen ? "layout__main--blurred" : ""}`}>
        <Outlet />
      </main>

      <div className={`status-indicator status-indicator--${status}`}>
        <h5>{status === "idle" ? "..." : status}</h5>
      </div>

      <PopUpAds />

      {mobileMenuIsOpen && (
        <MobileMenu setMobileMenuIsOpen={setMobileMenuIsOpen} />
      )}

      {isOpen && <div className="layout__overlay"></div>}
    </div>
  );
}
