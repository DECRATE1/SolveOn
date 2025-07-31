import AdvertisementUnderHeader from "../components/AdvertisementUnderHeader";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TopPopularServices from "../components/TopPopularServices";

export default function MainPage() {
  return (
    <>
      <AdvertisementUnderHeader></AdvertisementUnderHeader>
      <Hero></Hero>
      <Services></Services>
      <TopPopularServices></TopPopularServices>
    </>
  );
}
