import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./Containers/Home/Home.tsx";
import About from "./Containers/About/About.tsx";
import "./App.css";
import PaymentDelivery from "./Containers/PaymentDelivery/PaymentDelivery.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toolbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment-delivery" element={<PaymentDelivery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
