import { lazy, useEffect, useState } from "react";
const Header = lazy(() => import("./Header"));
import "../styles/Main.css";
import "../styles/Layout.css";
const PopUpAds = lazy(() => import("./PopUpAds"));
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Outlet } from "react-router";
import MobileMenu from "./MobileMenu";
export default function Layout() {
  const { isOpen } = useSelector((state: RootState) => state.popup);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="layout">
      <Header setMobileMenuIsOpen={setMobileMenuIsOpen} />

      <main className={`main ${isOpen ? "layout__main--blurred" : ""}`}>
        <Outlet></Outlet>
      </main>

      <PopUpAds />

      {mobileMenuIsOpen && (
        <MobileMenu setMobileMenuIsOpen={setMobileMenuIsOpen} />
      )}

      {isOpen && <div className="layout__overlay"></div>}
    </div>
  );
}
