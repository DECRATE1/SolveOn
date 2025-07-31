import AdvertisementBanner from "./AdvertisementBanner";
import "../styles/Header.css";
import Title from "./Title";
import Navigation from "./Navigation";
export default function Header() {
  return (
    <header className="header">
      <AdvertisementBanner></AdvertisementBanner>
      <Title></Title>
      <Navigation></Navigation>
    </header>
  );
}
