import { lazy } from "react";
const AdvertisementUnderHeader = lazy(
  () => import("../components/AdvertisementUnderHeader")
);
const Hero = lazy(() => import("../components/Hero"));
const Services = lazy(() => import("../components/Services"));
const TopPopularServices = lazy(
  () => import("../components/TopPopularServices")
);
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
