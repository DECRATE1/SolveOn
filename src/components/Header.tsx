import { lazy } from "react";
const AdvertisementBanner = lazy(() => import("./AdvertisementBanner"));
const Navigation = lazy(() => import("./Navigation"));
const Title = lazy(() => import("./Title"));
import "../styles/Header.css";
export default function Header({
  setMobileMenuIsOpen,
}: {
  setMobileMenuIsOpen: (val: boolean) => void;
}) {
  return (
    <header className="header">
      <AdvertisementBanner></AdvertisementBanner>
      <Title></Title>
      <Navigation setMobileMenuIsOpen={setMobileMenuIsOpen}></Navigation>
    </header>
  );
}
