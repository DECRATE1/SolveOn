import { lazy } from "react";
import "../styles/Header.css";

const AdvertisementBanner = lazy(() => import("./AdvertisementBanner"));
const Title = lazy(() => import("./Title"));

export default function Header() {
  return (
    <header className="header" role="banner">
      <AdvertisementBanner />

      <div className="header__nav-row">
        <Title />
      </div>
    </header>
  );
}
