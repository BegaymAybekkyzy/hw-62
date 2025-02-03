import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./Containers/Home/Home.tsx";
import About from "./Containers/About/About.tsx";
import PaymentDelivery from "./Containers/PaymentDelivery/PaymentDelivery.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import FastFoodInterface from "./Containers/Portfolio/FastFoodInterface/FastFoodInterface.tsx";
import BurgerConstructor from "./Containers/Portfolio/BurgerConstructor/BurgerConstructor.tsx";
import Game from "./Containers/Portfolio/Game/Game.tsx";
import DefunctPage from "./components/DefunctPage/DefunctPage.tsx";
import "./App.css";
import Portfolio from './Containers/Portfolio/Portfolio.tsx';

const App = () => {
  return (
    <>
      <Toolbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment-delivery" element={<PaymentDelivery />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/fast-food-interface"
          element={<FastFoodInterface />}
        />
        <Route
          path="/portfolio/burger-constructor"
          element={<BurgerConstructor />}
        />
        <Route path="/portfolio/game" element={<Game />} />

        <Route path="*" element={<DefunctPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
