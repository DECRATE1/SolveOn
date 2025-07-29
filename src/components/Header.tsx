import AdvertisementBanner from "./AdvertisementBanner";
import "../styles/Header.css";
import Title from "./Title";
import Navigation from "./Navigation";
export default function Header() {
  return (
    <div className="Header">
      <AdvertisementBanner></AdvertisementBanner>
      <Title></Title>
      <Navigation></Navigation>
    </div>
  );
}
