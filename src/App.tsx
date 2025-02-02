
import "./App.css";
import Toolbar from './components/Toolbar/Toolbar.tsx';
import Footer from './components/Footer/Footer.tsx';
import Home from './Containers/Home/Home.tsx';
import About from './Containers/About/About.tsx';

const App = () => {


  return (
    <>
      <Toolbar />
        <Home/>
        <About/>
      <Footer />
    </>
  );
};

export default App;
