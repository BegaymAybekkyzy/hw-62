
import "./App.css";
import Toolbar from './components/Toolbar/Toolbar.tsx';
import Footer from './components/Footer/Footer.tsx';
import Home from './Containers/Home/Home.tsx';

const App = () => {


  return (
    <>
      <Toolbar />
        <Home/>
      <Footer />
    </>
  );
};

export default App;
