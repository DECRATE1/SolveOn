import AdvertisementUnderHeader from "./components/AdvertisementUnderHeader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/Main.css";
function App() {
  return (
    <div className="Main">
      <Header></Header>
      <AdvertisementUnderHeader></AdvertisementUnderHeader>
      <Hero></Hero>
    </div>
  );
}

export default App;
