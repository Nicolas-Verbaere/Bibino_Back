import './Footer.scss';
import FooterNav from "./FooterNav/FooterNav"

function Footer() {
    return (
      <footer className="footer">
        <p className="footer-copyright">Copyright © 2022 Bibino - Tous droits réservés</p>
        <FooterNav />
      </footer>
    );
}

export default Footer;