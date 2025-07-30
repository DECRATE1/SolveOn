import AdvertisementUnderHeader from "./components/AdvertisementUnderHeader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TopPopularServices from "./components/TopPopularServices";
import "./styles/Main.css";
function App() {
  return (
    <div className="Main">
      <Header></Header>
      <AdvertisementUnderHeader></AdvertisementUnderHeader>
      <Hero></Hero>
      <Services></Services>
      <TopPopularServices></TopPopularServices>
    </div>
  );
}

export default App;
