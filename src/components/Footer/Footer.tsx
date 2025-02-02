
import footerLogo from './../../assets/images/footer_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <a href="#" className="logo-footer"><img src={footerLogo} alt="Sportova спортивные комплексы"/></a>
        <span>© ООО «Спортова», 2021</span>
      </div>
    </footer>
  );
};

export default Footer;