import Toolbar from './components/Toolbar/Toolbar.tsx';
import Footer from './components/Footer/Footer.tsx';
// import Home from './Containers/Home/Home.tsx';
// import About from './Containers/About/About.tsx';
import "./App.css";
import PaymentDelivery from './Containers/PaymentDelivery/PaymentDelivery.tsx';

const App = () => {


  return (
    <>
      <Toolbar />
        {/*<Home/>*/}
        {/*<About/>*/}
      <PaymentDelivery/>
      <Footer />
    </>
  );
};

export default App;
